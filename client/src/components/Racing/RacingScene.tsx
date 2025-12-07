import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getSocket } from "../../sockets/cloudflareSocket";

interface RacingSceneProps {
  playerId: string;
  gameState: {
    status: string;
    players: Array<{
      id: string;
      username: string;
      lap: number;
    }>;
  };
}

interface CarState {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  velocity: THREE.Vector3;
  mesh: THREE.Mesh;
  nameTag: THREE.Sprite;
}

export default function RacingScene({
  playerId,
  gameState,
}: RacingSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const carsRef = useRef<Map<string, CarState>>(new Map());
  const keysRef = useRef<Set<string>>(new Set());
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || gameState.status !== "racing") return;

    const socket = getSocket();

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000033, 0.001);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 20);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // Create tunnel track (similar to Hyperspeed)
    createTunnelTrack(scene);

    // Create starting grid
    createStartingGrid(scene);

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current.add(e.key.toLowerCase());
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // WebSocket message handler
    socket.on("position_sync", (data: any) => {
      // Update other players' positions
      data.positions.forEach((pos: any) => {
        if (pos.playerId !== playerId) {
          updateCarPosition(pos.playerId, pos.position, pos.rotation);
        }
      });
    });

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (gameState.status === "racing") {
        updatePlayerCar();
        animateTunnel();
      }

      updateCamera();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      socket.off("position_sync");
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [playerId, gameState.status]);

  // Create cyberpunk tunnel track
  const createTunnelTrack = (scene: THREE.Scene) => {
    const tunnelLength = 1000;
    const tunnelRadius = 20;

    // Neon rings along the tunnel
    const colors = [0x00ffff, 0xff00ff, 0x00ff00, 0xffff00];
    for (let i = 0; i < 100; i++) {
      const ringGeometry = new THREE.TorusGeometry(tunnelRadius, 0.3, 16, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.z = -i * 10;
      scene.add(ring);
    }

    // Grid floor (unique variable name)
    const tunnelGrid = new THREE.GridHelper(100, 50, 0x00ffff, 0x00ffff);
    tunnelGrid.material.opacity = 0.3;
    tunnelGrid.material.transparent = true;
    tunnelGrid.position.y = -5;
    scene.add(tunnelGrid);

    // Ambient particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.5,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Tunnel walls with glowing lines
    const geometry = new THREE.CylinderGeometry(
      tunnelRadius,
      tunnelRadius,
      tunnelLength,
      32,
      1,
      true
    );
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      side: THREE.BackSide,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
    });
    const tunnel = new THREE.Mesh(geometry, material);
    tunnel.rotation.x = Math.PI / 2;
    tunnel.position.z = -tunnelLength / 2;
    scene.add(tunnel);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(40, tunnelLength);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f1e,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -tunnelLength / 2;
    ground.position.y = -1;
    scene.add(ground);
  };

  // Create starting grid markers
  const createStartingGrid = (scene: THREE.Scene) => {
    for (let i = 0; i < 8; i++) {
      const row = Math.floor(i / 2);
      const col = i % 2;
      
      const markerGeometry = new THREE.BoxGeometry(3, 0.1, 4);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.5,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(col === 0 ? -5 : 5, 0, row * 5);
      scene.add(marker);
    }
  };

  // Create car for a player
  const createCar = (_playerId: string, username: string): CarState => {
    const scene = sceneRef.current;
    if (!scene) throw new Error("Scene not initialized");

    // Car body
    const carGeometry = new THREE.BoxGeometry(2, 1, 3);
    const carMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5),
      metalness: 0.7,
      roughness: 0.3,
    });
    const carMesh = new THREE.Mesh(carGeometry, carMaterial);
    carMesh.castShadow = true;
    scene.add(carMesh);

    // Name tag
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.textAlign = "center";
    ctx.fillText(username, 128, 42);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(4, 1, 1);
    sprite.position.y = 2;
    carMesh.add(sprite);

    return {
      position: new THREE.Vector3(0, 0.5, 0),
      rotation: new THREE.Euler(0, 0, 0),
      velocity: new THREE.Vector3(0, 0, 0),
      mesh: carMesh,
      nameTag: sprite,
    };
  };

  // Update player's car based on keyboard input
  const updatePlayerCar = () => {
    const car = carsRef.current.get(playerId);
    if (!car) {
      // Create player car if it doesn't exist
      const player = gameState.players.find((p) => p.id === playerId);
      if (player) {
        const newCar = createCar(playerId, player.username);
        carsRef.current.set(playerId, newCar);
        return;
      }
    }

    if (!car) return;

    const acceleration = 0.5;
    const maxSpeed = 2;
    const turnSpeed = 0.05;
    const friction = 0.95;

    // Forward/Backward
    if (keysRef.current.has("w") || keysRef.current.has("arrowup")) {
      car.velocity.z -= acceleration * Math.cos(car.rotation.y);
      car.velocity.x -= acceleration * Math.sin(car.rotation.y);
    }
    if (keysRef.current.has("s") || keysRef.current.has("arrowdown")) {
      car.velocity.z += acceleration * 0.5 * Math.cos(car.rotation.y);
      car.velocity.x += acceleration * 0.5 * Math.sin(car.rotation.y);
    }

    // Left/Right
    if (keysRef.current.has("a") || keysRef.current.has("arrowleft")) {
      car.rotation.y += turnSpeed;
    }
    if (keysRef.current.has("d") || keysRef.current.has("arrowright")) {
      car.rotation.y -= turnSpeed;
    }

    // Apply friction and max speed
    car.velocity.multiplyScalar(friction);
    const speed = car.velocity.length();
    if (speed > maxSpeed) {
      car.velocity.normalize().multiplyScalar(maxSpeed);
    }

    // Update position
    car.position.add(car.velocity);

    // Boundary checking (keep on track)
    car.position.x = Math.max(-15, Math.min(15, car.position.x));

    // Update mesh
    car.mesh.position.copy(car.position);
    car.mesh.rotation.copy(car.rotation);

    // Send position update to server
    const socket = getSocket();
    socket.emit("position_update", {
      playerId,
      position: {
        x: car.position.x,
        y: car.position.y,
        z: car.position.z,
      },
      rotation: {
        x: car.rotation.x,
        y: car.rotation.y,
        z: car.rotation.z,
      },
      velocity: {
        x: car.velocity.x,
        y: car.velocity.y,
        z: car.velocity.z,
      },
    });
  };

  // Update other players' cars
  const updateCarPosition = (
    id: string,
    position: { x: number; y: number; z: number },
    rotation: { x: number; y: number; z: number }
  ) => {
    let car = carsRef.current.get(id);
    
    if (!car) {
      const player = gameState.players.find((p) => p.id === id);
      if (player) {
        car = createCar(id, player.username);
        carsRef.current.set(id, car);
      } else {
        return;
      }
    }

    // Smooth interpolation
    car.position.lerp(
      new THREE.Vector3(position.x, position.y, position.z),
      0.3
    );
    car.mesh.position.copy(car.position);
    car.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  };

  // Animate tunnel movement
  const animateTunnel = () => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Move rings forward
    scene.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
        child.position.z += 1;
        if (child.position.z > 50) {
          child.position.z = -950;
        }
      }
    });
  };

  // Update camera to follow player
  const updateCamera = () => {
    const camera = cameraRef.current;
    const playerCar = carsRef.current.get(playerId);

    if (camera && playerCar) {
      const targetPos = new THREE.Vector3(
        playerCar.position.x,
        playerCar.position.y + 10,
        playerCar.position.z + 15
      );
      camera.position.lerp(targetPos, 0.1);
      camera.lookAt(playerCar.position);
    }
  };

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
