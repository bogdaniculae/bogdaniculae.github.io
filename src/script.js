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
    camera,
    renderer,
    light,
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
    gameLevel = 0,
    clock = new THREE.Clock(),
    delta,
    axisY = new CANNON.Vec3(0, 1, 0),
    rotationQuaternion = new CANNON.Quaternion(),
    localVelocity = new CANNON.Vec3(),
    moveDistance = 15

const textures = {
    ball: 'ball.png',
    wall: 'brick.png',
    floor: 'concrete.png',
}

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
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

const level = document.createElement('div')
level.classList.add('level')
document.body.appendChild(level)

const congrats = document.createElement('div')
congrats.classList.add('congrats')

gameState = 'initialize'
events()
animate()

function init() {

    // Set camera
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(1, 4, 1)
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
    light = new THREE.PointLight('#ffffff'); // soft white light
    light.position.set(0, 1.5, 0)
    scene.add(light);

    // Add floor
    floorMesh = addGround()
    scene.add(floorMesh)

    // Add player
    addPlayer()

    // Add maze
    mazeMesh = generateMazeMesh()
    scene.add(mazeMesh)

    // Add victory box
    victoryMesh = placeWiningBox()
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

function addGround() {
    floorBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() })
    floorBody.quaternion.setFromEuler(-Math.PI * 0.5, 0, 0) // make it face up
    world.addBody(floorBody)

    const geometry = new THREE.PlaneGeometry(50, 50)
    const texture = new THREE.TextureLoader().load(textures.floor)

    console.log(texture);
    const material = new THREE.MeshStandardMaterial({ map: texture })
    floorMesh = new THREE.Mesh(geometry, material)
    floorMesh.rotation.x = -Math.PI * 0.5 // make it face up

    return floorMesh
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

function updatePlayer() {

    playerMesh.position.copy(playerBody.position)
    playerMesh.quaternion.copy(playerBody.quaternion)

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

function update() {
    // Update game logic here
    delta = clock.getDelta()

    world.fixedStep()
    // worldDebugger.update()

    if (playerMesh) {
        updatePlayer()

        camera.position.x = playerMesh.position.x
        camera.position.z = playerMesh.position.z

        light.position.x = playerMesh.position.x
        light.position.z = playerMesh.position.z
    }

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

function resize() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function animate() {
    // Call animate recursively on each frame
    requestAnimationFrame(animate)

    switch (gameState) {
        case 'initialize':
            init()

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


