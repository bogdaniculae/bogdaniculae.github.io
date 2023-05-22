import * as THREE from "three"
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


let instance,
    maze,
    mazeSize = 11,
    ballRadius = 0.25,
    keys = [],
    keyAxis = [0, 0],
    dt = 1 / 60,
    gameState

export default class Game {
    constructor(canvas) {

        // Options
        instance = this
        instance.canvas = canvas
        instance.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        instance.textures = {
            ball: 'ball.png',
            wall: 'brick.png',
            floor: 'concrete.png',
        }

        gameState = 'initialize';

        instance.render()
        instance.update()

        window.addEventListener('resize', instance.resize)

        window.addEventListener('keydown', (e) => {
            keys[e.code] = true

            if (e.code === 'KeyS') {
                gameState = 'fade-in'
                console.log(gameState);
            }
        })
        window.addEventListener('keyup', (e) => {
            keys[e.code] = false
        })

    }

    controls() {
        if (keys['ArrowUp']) {
            keyAxis[1] = -1
        }

        if (keys['ArrowDown']) {
            keyAxis[1] = 1
        }

        if (keys['ArrowLeft']) {
            keyAxis[0] = -1
        }

        if (keys['ArrowRight']) {
            keyAxis[0] = 1
        }

    }

    generateWalls(size) {
        const geometries = []

        // Physics maze
        const body = new CANNON.Body({
            type: CANNON.Body.STATIC
        })

        for (let r = 0; r < size.dimension; r++) {
            for (let c = 0; c < size.dimension; c++) {
                if (size[r][c]) {
                    const geometry = new THREE.BoxGeometry(1, 1, 1)
                    geometry.translate(r, c, 0.5)
                    geometries.push(geometry)

                    // 
                    const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
                    body.addShape(shape, new CANNON.Vec3(r, c, 0.5))
                }
            }
        }

        // Mesh
        const newGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true)
        const texture = new THREE.TextureLoader().load(instance.textures.wall)
        const material = new THREE.MeshStandardMaterial({ map: texture, wireframe: false })
        const mesh = new THREE.Mesh(newGeometry, material)
        mesh.rotation.x = -Math.PI * 0.5
        instance.scene.add(mesh)

        body.quaternion.setFromEuler(-Math.PI * 0.5, 0, 0)
        instance.world.addBody(body)

    }

    generateFloor(size) {
        // Mesh plane
        const geometry = new THREE.PlaneGeometry(size * 5, size * 5, size, size)
        const texture = new THREE.TextureLoader().load(instance.textures.floor)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(size * 5, size * 5)

        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set((size - 1) / 2, 0, -(size - 2) / 2)
        mesh.rotation.x = -Math.PI * 0.5
        instance.scene.add(mesh)

        // Physics plane
        const shape = new CANNON.Plane()
        const body = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape
        })
        body.position.copy(mesh.position)
        body.quaternion.setFromEuler(-Math.PI * 0.5, 0, 0)

        instance.world.addBody(body)
    }

    generateBall(radius, position) {
        const geometry = new THREE.SphereGeometry(radius, 32, 16)
        const texture = new THREE.TextureLoader().load(instance.textures.ball)
        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        instance.scene.add(mesh)

        instance.ballMesh = mesh

        // // Cannon js
        const shape = new CANNON.Sphere(radius)
        // const shape = new CANNON.Box(new CANNON.Vec3(radius, radius, radius))
        const body = new CANNON.Body({
            mass: 1,
            // type: CANNON.Body.KINEMATIC,
            shape,
            linearDamping: 0.9,
            fixedRotation: true
        })
        body.updateMassProperties()
        body.position.copy(position)

        instance.world.addBody(body)
        instance.ballBody = body
    }

    victoryBox(position) {
        const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
        const body = new CANNON.Body({
            shape,
            isTrigger: true
        })
        body.position.copy(position)

        instance.world.addBody(body)
        instance.triggerVictory = body
    }

    createWorld() {
        instance.world = new CANNON.World()
        instance.world.broadphase = new CANNON.SAPBroadphase(instance.world)
        // instance.world.allowSleep = true
        instance.world.gravity = new CANNON.Vec3(0, -9.82, 0)
    }

    createScene() {
        instance.scene = new THREE.Scene();

        instance.light = new THREE.PointLight(0xffffff, 1); // soft white light
        instance.light.position.set(1, 2, -1)
        instance.scene.add(instance.light);

        instance.camera = new THREE.PerspectiveCamera(75, instance.sizes.width / instance.sizes.height, 0.1, 100)
        instance.camera.position.set(1, 5, -1)
        instance.camera.rotation.x = -Math.PI * 0.5

        instance.generateBall(ballRadius, { x: 1, y: ballRadius, z: -1 })
        instance.generateWalls(maze)
        instance.generateFloor(mazeSize)
        instance.victoryBox({ x: mazeSize, y: 0.5, z: -mazeSize + 2 })
    }

    render() {
        instance.renderer = new THREE.WebGLRenderer({ canvas: instance.canvas });
        instance.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        instance.renderer.setSize(instance.sizes.width, instance.sizes.height);

        // const controls = new OrbitControls(instance.camera, instance.renderer.domElement);

    }

    resize() {
        instance.sizes.width = window.innerWidth
        instance.sizes.height = window.innerHeight

        // Update camera
        instance.camera.aspect = instance.sizes.width / instance.sizes.height
        instance.camera.updateProjectionMatrix()

        // Update renderer
        instance.renderer.setSize(instance.sizes.width, instance.sizes.height)
        instance.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    debug() {
        instance.cannonDebugger = new CannonDebugger(instance.scene, instance.world, {
            // options...
            scale: 1
        })
    }

    updateWorld() {
        instance.ballMesh.position.copy(instance.ballBody.position)
        instance.ballMesh.quaternion.copy(instance.ballBody.quaternion)

        // Apply force
        instance.controls()

        instance.ballBody.position.x += keyAxis[0] * dt * 2
        instance.ballBody.position.z += keyAxis[1] * dt * 2
        keyAxis = [0, 0]

        // Run the simulation independently of framerate every 1 / 60 ms
        instance.world.fixedStep()
    }

    updateScene() {
        // Update camera and light position
        instance.camera.position.x += (instance.ballMesh.position.x - instance.camera.position.x) * 0.1
        instance.camera.position.z += (instance.ballMesh.position.z - instance.camera.position.z) * 0.1
        instance.camera.position.y += (5 - instance.camera.position.y) * 0.1

        instance.light.position.x = instance.camera.position.x
        instance.light.position.z = instance.camera.position.z
        instance.light.position.y = instance.camera.position.y - 3
    }

    updateRender() {
        instance.renderer.render(instance.scene, instance.camera);
    }

    checkForVictory(event) {

        if (event.body === instance.ballBody) {
            console.log('win is triggered!', event);
            mazeSize += 2
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

                const level = Math.floor((mazeSize - 1) / 2 - 4);
                document.querySelector('#level').innerHTML = 'Level ' + level;

                break;

            case 'fade-in':
                instance.light.intensity += 0.1 * (1.0 - instance.light.intensity)
                instance.updateRender()
                document.querySelector('.instructions').style.opacity = 0

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
                    gameState = 'initialize'
                }

                break;
        }

        requestAnimationFrame(instance.update);

    }
}

const generateSquareMaze = (dimension) => {

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


