import * as THREE from "three"
import * as CANNON from 'cannon'
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let instance,
    maze,
    mazeSize = 11,
    ballRadius = 0.25,
    keyAxis = [0, 0]

const clock = new THREE.Clock()
let oldElapsedTime = 0

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

        maze = instance.generateSquareMaze(mazeSize)
        maze[mazeSize - 1][mazeSize - 2] = false

        instance.objectsToUpdate = []

        instance.physicsWorld()
        instance.world()
        instance.render()
        instance.update()

        window.addEventListener('resize', instance.resize)
    }

    generateSquareMaze(dimension) {

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

        // Physics maze
        const body = new CANNON.Body({ mass: 0 })

        for (let r = 0; r < size.dimension; r++) {
            for (let c = 0; c < size.dimension; c++) {
                if (size[r][c]) {
                    const geometry = new THREE.BoxGeometry(1, 1, 1)
                    geometry.translate(r, c, 0.5)
                    geometries.push(geometry)

                    // 
                    const shape = new CANNON.Box(new CANNON.Vec3(1, 1, 1))
                    body.addShape(shape, new CANNON.Vec3(r, c, 0.5))
                }
            }
        }

        // Mesh
        const newGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true)
        const texture = new THREE.TextureLoader().load(instance.textures.wall)
        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(newGeometry, material)
        mesh.rotation.x = -Math.PI * 0.5

        // body.quaternion.setFromAxisAngle(
        //     new CANNON.Vec3(1, 0, 0),
        //     Math.PI * 0.5)

        instance.scene.add(mesh)
        instance.physicsWorld.addBody(body)

    }

    generateFloor(size) {
        // Mesh plane
        const geometry = new THREE.PlaneGeometry(size * 10, size * 10, size, size)
        const texture = new THREE.TextureLoader().load(instance.textures.floor)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(size * 5, size * 5)

        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(0, 0, 0)
        mesh.rotation.x = -Math.PI * 0.5

        // Physics plane
        const shape = new CANNON.Plane()
        const body = new CANNON.Body({
            mass: 0,
            shape
        })
        body.quaternion.setFromAxisAngle(
            new CANNON.Vec3(-1, 0, 0),
            Math.PI * 0.5)

        instance.scene.add(mesh)
        instance.physicsWorld.addBody(body)
    }

    generateBall(radius, position) {
        const geometry = new THREE.SphereGeometry(radius, 32, 16)
        const texture = new THREE.TextureLoader().load(instance.textures.ball)
        const material = new THREE.MeshStandardMaterial({ map: texture })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        instance.scene.add(mesh)

        // Cannon js
        const shape = new CANNON.Sphere(radius)
        const body = new CANNON.Body({
            mass: 1,
            shape
        })
        body.position.copy(position)
        instance.physicsWorld.addBody(body)

        // Save in objects to update
        instance.objectsToUpdate.push({
            mesh: mesh,
            body: body
        })
    }

    physicsWorld() {
        instance.physicsWorld = new CANNON.World()
        instance.physicsWorld.gravity.set(0, -9.82, 0)

        // Material
        const defaultMaterial = new CANNON.Material('default')
        const contactMaterial = new CANNON.ContactMaterial(
            defaultMaterial,
            defaultMaterial,
            {
                friction: 0.1,
                restitution: 0
            }
        )

        instance.physicsWorld.addContactMaterial(contactMaterial)
        instance.physicsWorld.defaultContactMaterial = contactMaterial
    }

    world() {
        instance.scene = new THREE.Scene();

        instance.light = new THREE.AmbientLight(0xffffff); // soft white light
        instance.scene.add(instance.light);

        instance.camera = new THREE.PerspectiveCamera(75, instance.sizes.width / instance.sizes.height, 0.1, 100)
        instance.camera.position.set(1, 5, -1)
        instance.camera.rotation.x = -Math.PI * 0.5

        instance.ball = instance.generateBall(ballRadius, { x: 1, y: 4, z: -1 })
        instance.walls = instance.generateWalls(maze)
        instance.floor = instance.generateFloor(mazeSize)

    }

    render() {
        instance.renderer = new THREE.WebGLRenderer({ canvas: instance.canvas });
        instance.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        instance.renderer.setSize(instance.sizes.width, instance.sizes.height);
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

    updatePhysicsWorld() {
        for (const object of instance.objectsToUpdate) {
            object.mesh.position.copy(object.body.position)
        }

        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - oldElapsedTime
        oldElapsedTime = elapsedTime

        // Take a time step.
        instance.physicsWorld.step(1 / 60, deltaTime, 3)
    }

    update() {

        instance.updatePhysicsWorld()

        instance.renderer.render(instance.scene, instance.camera);
        // Call animate on next frame
        requestAnimationFrame(instance.update);
    }
}
