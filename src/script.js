import * as THREE from "three"
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRAColoader.js'

import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/');
dracoLoader.preload()

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let scene,
    world,
    worldDebugger,
    controls,
    camera,
    renderer,
    light,
    sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    },
    maze,
    floor,
    floorBody,
    floorBodyMaterial,
    player,
    playerBody,
    playerBodyMaterial,
    keys,
    gameState

const textures = {
    ball: 'ball.png',
    wall: 'brick.png',
    floor: 'concrete.png',
}

let
    clock = new THREE.Clock(),
    delta,
    axisY = new CANNON.Vec3(0, 1, 0),
    rotationQuaternion = new CANNON.Quaternion(),
    localVelocity = new CANNON.Vec3(),
    moveDistance = 35

class Maze {
    constructor({
        box = {
            width,
            height,
            depth,
        }
    }) {
        this.box = box
    }

    generateMaze(dimension) {
        function iterate(field, x, y) {
            field[x][y] = false;
            while (true) {
                let directions = [];
                if (x > 1 && field[x - 2][y] == true) {
                    directions.push([-1, 0]);
                }
                if (x < field.dimension - 2 && field[x + 2][y] == true) {
                    directions.push([1, 0]);
                }
                if (y > 1 && field[x][y - 2] == true) {
                    directions.push([0, -1]);
                }
                if (y < field.dimension - 2 && field[x][y + 2] == true) {
                    directions.push([0, 1]);
                }
                if (directions.length == 0) {
                    return field;
                }
                const dir = directions[Math.floor(Math.random() * directions.length)];
                field[x + dir[0]][y + dir[1]] = false;
                field = iterate(field, x + dir[0] * 2, y + dir[1] * 2);

            }

        }

        // Initialize the field.
        let field = new Array(dimension);
        field.dimension = dimension;
        for (var i = 0; i < dimension; i++) {
            field[i] = new Array(dimension);
            for (var j = 0; j < dimension; j++) {
                field[i][j] = true;
            }
        }

        // Gnerate the maze recursively.
        field = iterate(field, 1, 1);

        return field;
    }

    generateWalls(size) {
        const geometries = []

        const body = new CANNON.Body({
            mass: 0
        })

        for (let r = 0; r < size.dimension; r++) {
            for (let c = 0; c < size.dimension; c++) {
                if (size[r][c]) {
                    const geometry = new THREE.BoxGeometry(this.box.width, this.box.height, this.box.depth)
                    geometry.translate(r, this.box.depth * -0.5 + floor.height * -0.5, c)
                    geometries.push(geometry)

                    const shape = new CANNON.Box(new CANNON.Vec3(this.box.width * 0.5, this.box.height * 0.5, this.box.depth * 0.5))
                    body.addShape(shape, new CANNON.Vec3(r, this.box.depth * -0.5 + floor.height * -0.5, c))
                }
            }
        }

        // Mesh
        const newGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true)
        const texture = new THREE.TextureLoader().load(textures.wall)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        const material = new THREE.MeshStandardMaterial({ map: texture, wireframe: false })
        const mesh = new THREE.Mesh(newGeometry, material)
        mesh.rotation.x = -Math.PI / 2
        scene.add(mesh)

        body.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
        world.addBody(body)
    }
}

init()
events()
animate()

function init() {

    // Set camera
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 1, 1)

    // Create Scene
    scene = new THREE.Scene();
    camera.lookAt(scene.position)

    initCannon()
    initCannonDebugger()

    // const controls = new OrbitControls()

    // Add helpers
    const grid = new THREE.GridHelper(100, 20)
    scene.add(grid);

    // Create Render
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height);
    document.body.appendChild(renderer.domElement)

    // Add light
    addLight()

    addGround()
    addPlayer().catch(error => {
        console.error(error)
    })

}

function addLight() {
    light = new THREE.PointLight(0xffffff, 2); // soft white light
    light.position.set(0, 5, 0)
    scene.add(light);
}

function addGround() {
    const floorShape = new CANNON.Box(new CANNON.Vec3(50, 50, 1))
    floorBodyMaterial = new CANNON.Material('ground')
    floorBody = new CANNON.Body({ mass: 0, material: floorBodyMaterial })
    floorBody.addShape(floorShape)
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
    world.addBody(floorBody)

    const floorGeometry = new THREE.PlaneGeometry(100, 100)
    const floorTexture = new THREE.TextureLoader().load(textures.floor)
    const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture })
    floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    scene.add(floor)
}

function modelLoader(url) {
    return new Promise((resolve, reject) => {
        gltfLoader.load(url, data => resolve(data), null, reject)
    })
}

async function addPlayer() {

    const gltfData = await modelLoader('GLITCH.gltf')

    player = gltfData.scene
    player.position.y = 3.5
    scene.add(player)

    player.add(camera)
    player.add(light)

    const playerBoundingBox = new THREE.Box3().setFromObject(player)
    const playerSize = playerBoundingBox.getSize(new THREE.Vector3()).length()
    const playerCenter = playerBoundingBox.getCenter(new THREE.Vector3())

    const halfExtents = new CANNON.Vec3(playerSize / 2, playerSize / 2, playerSize / 2)
    const playerShape = new CANNON.Box(halfExtents)
    playerBodyMaterial = new CANNON.Material('concrete')
    playerBody = new CANNON.Body({
        mass: 5,
        material: playerBodyMaterial,
        shape: new CANNON.Sphere(playerSize / 2),
        linearDamping: 0.5,
        angularDamping: 1,
    })
    playerBody.addShape(playerShape)
    playerBody.position.copy(player.position)
    world.addBody(playerBody)

}

function initCannon() {
    world = new CANNON.World()
    world.broadphase = new CANNON.SAPBroadphase(world)
    // world.allowSleep = true
    world.gravity = new CANNON.Vec3(0, -9.82, 0)

}

function initCannonDebugger() {
    worldDebugger = new CannonDebugger(scene, world, {
        onInit(body, mesh) {
            document.body.addEventListener('keydown', (e) => {
                if (e.code === "KeyR") {
                    mesh.visible = !mesh.visible
                }
            })

        }
    })

}

function events() {
    // Events
    window.addEventListener('resize', resize)

    keys = {
        arrowleft: false,
        arrowdown: false,
        arrowright: false,
        arrowup: false,
        a: false,
        s: false,
        d: false,
        w: false,
    }

    document.body.addEventListener('keydown', (e) => {
        const key = e.code.replace('Key', '').toLowerCase()
        if (keys[key] !== undefined) keys[key] = true
    })

    document.body.addEventListener('keyup', (e) => {
        const key = e.code.replace('Key', '').toLowerCase()
        if (keys[key] !== undefined) keys[key] = false
    })
}

function movePlayer() {

    player.position.copy(playerBody.position)
    player.quaternion.copy(playerBody.quaternion)

    floor.position.copy(floorBody.position)
    floor.quaternion.copy(floorBody.quaternion)

    const rotateAngle = Math.PI / 2 * delta

    if (keys.arrowleft || keys.a) {
        rotationQuaternion.setFromAxisAngle(axisY, rotateAngle)
        playerBody.quaternion = rotationQuaternion.mult(playerBody.quaternion)
    }

    if (keys.arrowright || keys.d) {
        rotationQuaternion.setFromAxisAngle(axisY, -rotateAngle)
        playerBody.quaternion = rotationQuaternion.mult(playerBody.quaternion)
    }

    localVelocity.set(0, 0, moveDistance * 0.2);
    const worldVelocity = playerBody.quaternion.vmult(localVelocity);

    if (keys.arrowup || keys.w) {
        playerBody.velocity.x = -worldVelocity.x;
        playerBody.velocity.z = -worldVelocity.z;
    }

    if (keys.arrowdown || keys.s) {
        playerBody.velocity.x = worldVelocity.x;
        playerBody.velocity.z = worldVelocity.z;
    }
}

function animate() {
    requestAnimationFrame(animate)

    delta = clock.getDelta()


    if (player)
        movePlayer()

    world.fixedStep()
    worldDebugger.update()

    renderer.render(scene, camera);
}

function resize() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}



class Game {

    victoryBox(position) {

        const geometry = new THREE.BoxGeometry(ballRadius, ballRadius, ballRadius)
        const texture = new THREE.TextureLoader().load(instance.textures.ball)
        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        instance.scene.add(mesh)

        const shape = new CANNON.Box(new CANNON.Vec3(ballRadius / 2, ballRadius / 2, ballRadius / 2))
        const body = new CANNON.Body({
            shape,
            isTrigger: true
        })
        body.position.copy(position)

        instance.world.addBody(body)
        instance.triggerVictory = body
    }

    checkForVictory(event) {

        if (event.body === instance.ballBody) {
            console.log('win is triggered!', event);
            // mazeSize += 2
            gameState = 'fade-out'
        }

    }

    update() {

        switch (gameState) {
            case 'initialize':

                maze = generateSquareMaze(mazeSize)
                maze[mazeSize - 1][mazeSize - 2] = false

                instance.createWorld()
                instance.createScene()
                // instance.debug()

                instance.light.intensity = 0
                document.querySelector('.instructions').style.opacity = 1

                const level = Math.floor((mazeSize - 1) / 2 - 6);
                document.querySelector('#level').innerHTML = 'Level ' + level;

                break;

            case 'fade-in':
                instance.light.intensity += 0.1 * (1.0 - instance.light.intensity)
                instance.updateRender()
                document.querySelector('.instructions').style.opacity = 0
                document.querySelector('.level').style.opacity = 0

                if (Math.abs(instance.light.intensity - 1.0) < 0.05) {
                    instance.light.intensity = 1.0;
                    gameState = 'play'
                }

                break;

            case 'play':
                instance.updateWorld()
                instance.updateScene()

                // instance.cannonDebugger.update()
                instance.updateRender()

                instance.triggerVictory.addEventListener('collide', instance.checkForVictory)

                break;

            case 'fade-out':
                instance.updateWorld()
                instance.updateScene()
                instance.light.intensity += 0.1 * (0.0 - instance.light.intensity);
                instance.updateRender()

                if (Math.abs(instance.light.intensity - 0.0) < 0.1) {
                    instance.light.intensity = 0.0;
                    instance.updateRender()
                    gameState = 'congrats'
                }

                break;

            case 'congrats':
                maze = generateSquareMaze(mazeSize)
                maze[mazeSize - 1][mazeSize - 2] = false

                instance.createWorld()
                instance.createScene()
                // instance.debug()

                instance.light.intensity = 0
                document.querySelector('.level').style.opacity = 1

                const localVelocity = 1
                // document.querySelector('#level').innerHTML = 'Level ' + level;
                document.querySelector('.level p').innerHTML = 'Level ' + localVelocity + ' complete';

                break;
        }

        requestAnimationFrame(instance.update);

    }
}



