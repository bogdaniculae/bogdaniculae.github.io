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
    mazeDimension = 5,
    mazeMesh,
    floorMesh,
    floorBody,
    playerMesh,
    playerBody,
    victoryMesh,
    victoryBoxBody,
    entrancePos = [],
    exitPos = [],
    keys,
    gameState,
    gameLevel = 0

const textures = {
    ball: 'ball.png',
    wall: 'brick.png',
    floor: 'concrete.png',
}

const labyrinth = {
    first: [
        [1, 1, 1, 1, 1, 1, 1],
        [2, 0, 0, 0, 1, 0, 3],
        [1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ],
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

const level = document.createElement('div')
level.classList.add('level')
document.body.appendChild(level)

const congrats = document.createElement('div')
congrats.classList.add('congrats')

gameState = 'initialize'
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
    // maze = generateMaze()
    mazeMesh = generateMazeMesh()
    scene.add(mazeMesh)

    // Add player
    addPlayer()

    // Add victory box
    victoryMesh = placeWiningBox()
    scene.add(victoryMesh)
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
            mazeArr[r][doorPos] = ["door", "entrance"]
            entrancePos = [r, doorPos]
        }

        if (r == rows - 1) {
            // place entrance in bottom row
            let doorPos = posToSpace(rand(1, mazeDimension))
            mazeArr[r][doorPos] = ["door", "exit"]
            exitPos = [r, doorPos]
        }
    })

    // start partitioning 
    partition(1, mazeDimension - 1, 1, mazeDimension - 1)
}

function generateMazeMesh() {

    const texture = new THREE.TextureLoader().load(textures.wall)
    const geometries = []
    const body = new CANNON.Body({ mass: 0 })

    labyrinth.first.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cell == 1) {
                const dummy = new THREE.BoxGeometry(1, 1, 1)
                dummy.translate(c, 0.5, r)
                geometries.push(dummy)

                const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
                body.addShape(shape, new CANNON.Vec3(c, 0.5, r))
            }

            if (cell == 2) {
                entrancePos = [c, r]
            }

            if (cell == 3) {
                exitPos = [c, r]
            }
        })
    })

    const geometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true)
    const material = new THREE.MeshStandardMaterial({ map: texture })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.name = 'Maze'

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

    const boundingBox = new THREE.Box3().setFromObject(playerMesh)
    const boxSize = boundingBox.getSize(new THREE.Vector3())

    const playerBodyBoundingBox = new CANNON.Sphere(boxSize.x / 2)
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

    const boundingBox = new THREE.Box3().setFromObject(victoryMesh)
    const boxSize = boundingBox.getSize(new THREE.Vector3())

    const shape = new CANNON.Box(new CANNON.Vec3(boxSize.x / 2, boxSize.y / 2, boxSize.z / 2))
    victoryBoxBody = new CANNON.Body({
        mass: 0,
        shape,
        isTrigger: true
    })
    victoryBoxBody.position.copy(victoryMesh.position)
    world.addBody(victoryBoxBody)

    return victoryMesh
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

    localVelocity.set(0, 0, moveDistance * 0.25);
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

function update() {

    delta = clock.getDelta()

    // Update game logic here
    world.fixedStep()
    // worldDebugger.update()

    if (playerMesh)
        movePlayer()

}

function destroy() {

    // Traverse the whole scene
    scene.traverse((child) => {

        // Test if it's a mesh
        if (child instanceof THREE.Mesh) {
            child.geometry.dispose()

            // Loop through the material properties
            for (const key in child.material) {
                const value = child.material[key]

                // Test if there is a dispose function
                if (value && typeof value.dispose === 'function') {
                    value.dispose()
                }
            }

        }

    })

    renderer.dispose()

}

function animate() {
    // Call animate recursively on each frame
    requestAnimationFrame(animate)

    switch (gameState) {
        case 'initialize':
            init()
            events()

            light.intensity = 0

            level.innerHTML = `Game level - ${gameLevel}`
            gameState = 'fade in'
            break;

        case 'fade in':
            // Update the game logic
            update()

            light.intensity += 0.1 * (1.0 - light.intensity);
            if (Math.abs(light.intensity - 1.0) < 0.05) {
                light.intensity = 1.0;
                gameState = 'play'
            }

            // Render the scene
            renderer.render(scene, camera);
            break;

        case 'play':

            // Update the game logic
            update()

            // Check for victory
            victoryBoxBody.addEventListener('collide', (e) => {
                if (e.body === playerBody) {
                    // do something

                    destroy()
                    document.querySelector('canvas')?.remove()
                    gameState = 'fade out'
                }
            })


            // Render the scene
            renderer.render(scene, camera);

            break;

        case 'fade out':
            // Update the game logic
            update()

            light.intensity += 0.1 * (0.0 - light.intensity);
            if (Math.abs(light.intensity - 0.0) < 0.1) {
                light.intensity = 0.0;
                gameLevel += 1
                gameState = 'initialize'
            }

            // Render the scene
            renderer.render(scene, camera);
            break;
    }



}

function resize() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
