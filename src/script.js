import * as THREE from "three"
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js'
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
    mazeDimension = 6,
    mazeMesh,
    floorMesh,
    floorBody,
    playerMesh,
    playerBody,
    victoryMesh,
    entrancePos = [],
    exitPos = [],
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
    moveDistance = 15

// New way of generating the maze
const rows = 2 * mazeDimension + 1
const cols = 2 * mazeDimension + 1
const mazeArr = initArray([])

init()
events()
animate()

function init() {

    // Set camera
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(1, 5, 1)
    camera.lookAt(new THREE.Vector3(1, 0, 1))

    // Create Scene
    scene = new THREE.Scene();

    initCannon()
    initCannonDebugger()

    // Create Render
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(sizes.width, sizes.height);
    document.body.appendChild(renderer.domElement)


    // Add light
    addLight()

    // Add floor
    addGround()

    // Add maze
    maze = generateMaze()
    mazeMesh = generateMazeMesh(maze)
    scene.add(mazeMesh)

    // Add player
    addPlayer().catch(error => {
        console.error(error)
    })

    placeWiningBox()

}

function initArray(val) {
    return new Array(rows).fill().map(() => new Array(cols).fill(val))
}

function posToSpace(x) {
    return 2 * (x - 1) + 1
}

function posToWall(x) {
    return 2 * x;
}

function rand(min, max) {
    return min + Math.floor(Math.random() * (1 + max - min))
}

function shuffle(array) {
    /* sauce: https://stackoverflow.com/a/12646864 */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateMaze() {

    // place init walls
    mazeArr.forEach((row, r) => {
        row.forEach((cell, c) => {
            switch (r) {
                case 0:
                case rows - 1:
                    mazeArr[r][c] = ["wall"]
                    break;

                default:
                    if ((r % 2) == 1) {
                        if ((c == 0) || (c == cols - 1)) {
                            mazeArr[r][c] = ["wall"]
                        }
                    } else if (c % 2 == 0) {
                        mazeArr[r][c] = ["wall"]
                    }
            }
        })

        if (r == 0) {
            // place exit on top row
            let doorPos = posToSpace(rand(1, mazeDimension))
            mazeArr[r][doorPos] = ["door", "exit"]
            exitPos = [r, doorPos]
        }

        if (r == rows - 1) {
            // place entrance in bottom row
            let doorPos = posToSpace(rand(1, mazeDimension))
            mazeArr[r][doorPos] = ["door", "entrance"]
            entrancePos = [r, doorPos]
        }
    })

    // start partitioning 
    partition(1, mazeDimension - 1, 1, mazeDimension - 1)
}

function partition(r1, r2, c1, c2) {
    /* create partition walls
      ref: https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method */

    let horiz, vert, x, y, start, end

    if ((r2 < r1) || (c2 < c1)) {
        return false
    }

    if (r1 == r2) {
        horiz = r1;
    } else {
        x = r1 + 1;
        y = r2 - 1;
        start = Math.round(x + (y - x) / 4);
        end = Math.round(x + 3 * (y - x) / 4);
        horiz = rand(start, end);
    }

    if (c1 == c2) {
        vert = c1;
    } else {
        x = c1 + 1;
        y = c2 - 1;
        start = Math.round(x + (y - x) / 3);
        end = Math.round(x + 2 * (y - x) / 3);
        vert = rand(start, end);
    }

    for (let i = posToWall(r1) - 1; i <= posToWall(r2) + 1; i++) {
        for (let j = posToWall(c1) - 1; j <= posToWall(c2) + 1; j++) {
            if ((i == posToWall(horiz)) || (j == posToWall(vert))) {
                mazeArr[i][j] = ["wall"];
            }
        }
    }

    let gaps = shuffle([true, true, true, false]);

    /* create gaps in partition walls */

    if (gaps[0]) {
        let gapPosition = rand(c1, vert);
        mazeArr[posToWall(horiz)][posToSpace(gapPosition)] = [];
    }

    if (gaps[1]) {
        let gapPosition = rand(vert + 1, c2 + 1);
        mazeArr[posToWall(horiz)][posToSpace(gapPosition)] = [];
    }

    if (gaps[2]) {
        let gapPosition = rand(r1, horiz);
        mazeArr[posToSpace(gapPosition)][posToWall(vert)] = [];
    }

    if (gaps[3]) {
        let gapPosition = rand(horiz + 1, r2 + 1);
        mazeArr[posToSpace(gapPosition)][posToWall(vert)] = [];
    }

    /* recursively partition newly created chambers */

    partition(r1, horiz - 1, c1, vert - 1);
    partition(horiz + 1, r2, c1, vert - 1);
    partition(r1, horiz - 1, vert + 1, c2);
    partition(horiz + 1, r2, vert + 1, c2);


}

function generateMazeMesh() {

    const texture = new THREE.TextureLoader().load(textures.wall)
    const geometries = []
    const body = new CANNON.Body({ mass: 0 })

    mazeArr.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cell == 'wall') {

                const dummy = new THREE.BoxGeometry(1, 1, 1)
                dummy.translate(r, 0.5, c)
                geometries.push(dummy)

                const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
                body.addShape(shape, new CANNON.Vec3(r, 0.5, c))
            }
        })
    })

    const geometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true)
    const material = new THREE.MeshStandardMaterial({ map: texture })
    const mesh = new THREE.Mesh(geometry, material)

    body.position.copy(mesh.position)
    world.addBody(body)

    return mesh
}

function addLight() {
    light = new THREE.PointLight(0xffffff); // soft white light
    light.position.set(0, 1.5, 0)
    scene.add(light);
}

function addGround() {
    const floorShape = new CANNON.Plane()
    floorBody = new CANNON.Body({ mass: 0, shape: floorShape })
    floorBody.quaternion.setFromEuler(-Math.PI * 0.5, 0, 0) // make it face up
    world.addBody(floorBody)

    const floorGeometry = new THREE.PlaneGeometry(50, 50)
    const floorTexture = new THREE.TextureLoader().load(textures.floor)
    const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture })
    floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
    floorMesh.rotation.x = -Math.PI / 2
    scene.add(floorMesh)
}

function modelLoader(url) {
    return new Promise((resolve, reject) => {
        gltfLoader.load(url, data => resolve(data), null, reject)
    })
}

async function addPlayer() {

    const gltfData = await modelLoader('GLITCH_LowPoly_v03.gltf')
    const bakedMaterial = new THREE.MeshStandardMaterial({ color: '#00ff00' })

    playerMesh = gltfData.scene

    playerMesh.traverse((child) => {
        child.material = bakedMaterial
    })

    playerMesh.position.x = entrancePos[0]
    playerMesh.position.y = 0.5
    playerMesh.position.z = entrancePos[1]
    scene.add(playerMesh)

    const playerBoundingBox = new THREE.Box3().setFromObject(playerMesh)
    const playerSize = playerBoundingBox.getSize(new THREE.Vector3())

    const player = {
        width: playerSize.x,
        height: playerSize.y,
        depth: playerSize.z,
    }

    const playerBodyBoundingBox = new CANNON.Sphere(player.width / 2)
    playerBody = new CANNON.Body({
        mass: 1,
        shape: playerBodyBoundingBox,
        linearDamping: 0.25,
        angularDamping: 1,
    })
    playerBody.position.copy(playerMesh.position)
    world.addBody(playerBody)

}

function placeWiningBox() {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
    const material = new THREE.MeshStandardMaterial({ color: '#00ffff' })
    victoryMesh = new THREE.Mesh(geometry, material)

    victoryMesh.position.x = exitPos[0]
    victoryMesh.position.z = exitPos[1]
    scene.add(victoryMesh)
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

    playerMesh.position.copy(playerBody.position)
    playerMesh.quaternion.copy(playerBody.quaternion)

    camera.position.x = playerMesh.position.x
    camera.position.z = playerMesh.position.z

    light.position.x = playerMesh.position.x
    light.position.z = playerMesh.position.z

    const rotateAngle = Math.PI * delta

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

    if (playerMesh)
        movePlayer()

    world.fixedStep()
    // worldDebugger.update()

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



