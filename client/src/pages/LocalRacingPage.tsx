import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { User, Trophy, Flag, Zap, ArrowLeft, RotateCw } from 'lucide-react';
import Lightning from '../components/Lightning/Lightning';
import './LocalRacingPage.scss';

interface GameState {
  player1Score: number;
  player2Score: number;
  player1Progress: number;
  player2Progress: number;
}

export default function LocalRacingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [gameState, setGameState] = useState<GameState>({
    player1Score: 0,
    player2Score: 0,
    player1Progress: 0,
    player2Progress: 0,
  });
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const RACE_LENGTH = 500; // Total race distance
  const FINISH_LINE_Z = -450; // Finish line position
  const winnerRef = useRef<string>('');

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Pure black for lightning effect
    scene.fog = new THREE.Fog(0x000000, 50, 400);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting - Cyberpunk style
    const trackHeight = 20; // Define early for lights
    
    const ambientLight = new THREE.AmbientLight(0x8844ff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 50, 20);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Animated neon lights
    const neonLights: THREE.PointLight[] = [];
    for (let i = 0; i < 10; i++) {
      const color = i % 2 === 0 ? 0xff00ff : 0x00ffff;
      const light = new THREE.PointLight(color, 2, 50);
      light.position.set(
        Math.random() * 40 - 20,
        trackHeight + 10,
        -i * 50
      );
      scene.add(light);
      neonLights.push(light);
    }

    // Create SMOOTH CURVED racing track as a ROAD PLATFORM (not tunnel)
    const trackGroup = new THREE.Group();
    const trackWidth = 20; // Wider track
    const raceLength = 500;
    
    // Create smooth curved path for racing with elevation changes
    const pathPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= raceLength; i += 2) {
      const t = i / raceLength;
      const x = Math.sin(t * Math.PI * 4) * 12; // Smooth S curves
      const y = trackHeight + Math.sin(t * Math.PI * 3) * 4; // Up and down elevation
      const z = -i;
      pathPoints.push(new THREE.Vector3(x, y, z));
    }
    const path = new THREE.CatmullRomCurve3(pathPoints, false, 'catmullrom', 0.5);
    
    // Create road segments along the path
    const segments = 100;
    for (let i = 0; i < segments; i++) {
      const t1 = i / segments;
      const t2 = (i + 1) / segments;
      
      const p1 = path.getPoint(t1);
      const p2 = path.getPoint(t2);
      const tangent = path.getTangent(t1);
      
      // Calculate perpendicular for road width
      const binormal = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 1, 0)).normalize();
      
      // Create road segment as a flat platform
      const roadGeometry = new THREE.PlaneGeometry(trackWidth, p1.distanceTo(p2) * 1.5);
      const roadMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a2e,
        emissive: 0x000000,
        emissiveIntensity: 0,
        roughness: 0.7,
        metalness: 0.3,
        side: THREE.DoubleSide,
      });
      const roadSegment = new THREE.Mesh(roadGeometry, roadMaterial);
      
      // Position and rotate segment
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      roadSegment.position.copy(midPoint);
      roadSegment.lookAt(p2);
      roadSegment.rotateX(Math.PI / 2);
      roadSegment.castShadow = true;
      roadSegment.receiveShadow = true;
      trackGroup.add(roadSegment);
      
      // Add subtle edge lines
      if (i % 2 === 0) {
        const edgeGeometry = new THREE.BoxGeometry(0.15, 0.1, p1.distanceTo(p2) * 1.5);
        const edgeMaterial = new THREE.MeshStandardMaterial({
          color: 0x444444,
          emissive: 0x222222,
          emissiveIntensity: 0.2,
        });
        
        const leftEdge = new THREE.Mesh(edgeGeometry, edgeMaterial);
        leftEdge.position.copy(midPoint).add(binormal.clone().multiplyScalar(trackWidth / 2));
        leftEdge.lookAt(p2);
        trackGroup.add(leftEdge);
        
        const rightEdge = new THREE.Mesh(edgeGeometry, edgeMaterial.clone());
        rightEdge.position.copy(midPoint).sub(binormal.clone().multiplyScalar(trackWidth / 2));
        rightEdge.lookAt(p2);
        trackGroup.add(rightEdge);
      }
    }
    
    scene.add(trackGroup);

    // Add STARS in the background like the tunnel
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices: number[] = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 400;
      const y = Math.random() * 200;
      const z = -Math.random() * 500;
      starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.5,
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create ENHANCED CYBERPUNK cars with aggressive design
    const createCar = (color: number) => {
      const carGroup = new THREE.Group();
      
      // Main car body - sleek and aggressive
      const bodyGeometry = new THREE.BoxGeometry(2, 0.9, 4);
      const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color,
        emissive: color,
        emissiveIntensity: 0.5,
        metalness: 0.98,
        roughness: 0.02,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 0.5;
      body.castShadow = true;
      carGroup.add(body);
      
      // Front end spoiler/bumper - aggressive
      const frontSpoilerGeometry = new THREE.BoxGeometry(2.2, 0.15, 0.3);
      const spoilerMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.7,
        metalness: 1,
        roughness: 0.05,
      });
      const frontSpoiler = new THREE.Mesh(frontSpoilerGeometry, spoilerMaterial);
      frontSpoiler.position.set(0, 0.8, 2.2);
      carGroup.add(frontSpoiler);
      
      // Cockpit/windshield - darker tinted
      const cockpitGeometry = new THREE.BoxGeometry(1.6, 0.7, 2.2);
      const cockpitMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0a0a1e,
        emissive: color,
        emissiveIntensity: 0.3,
        metalness: 0.7,
        roughness: 0.15,
        transparent: true,
        opacity: 0.7,
      });
      const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
      cockpit.position.set(0, 1.1, 0.3);
      carGroup.add(cockpit);
      
      // Rear spoiler - tall and pronounced
      const rearSpoilerGeometry = new THREE.BoxGeometry(2.2, 0.8, 0.15);
      const rearSpoiler = new THREE.Mesh(rearSpoilerGeometry, spoilerMaterial);
      rearSpoiler.position.set(0, 1.5, -2);
      carGroup.add(rearSpoiler);
      
      // Aggressive wheels with neon rims
      const wheelGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.5, 20);
      const wheelMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0a0a0a,
        metalness: 0.95,
        roughness: 0.1,
      });
      
      const rimGeometry = new THREE.TorusGeometry(0.45, 0.08, 12, 32);
      const rimMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 1.5,
        metalness: 1,
        roughness: 0.05,
      });
      
      const wheelPositions = [
        [-1.2, 0, 1.5],
        [1.2, 0, 1.5],
        [-1.2, 0, -1.5],
        [1.2, 0, -1.5],
      ];
      
      wheelPositions.forEach(pos => {
        // Main wheel
        const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        wheel.position.set(pos[0], pos[1], pos[2]);
        wheel.rotation.z = Math.PI / 2;
        wheel.castShadow = true;
        carGroup.add(wheel);
        
        // Neon rim
        const rim = new THREE.Mesh(rimGeometry, rimMaterial);
        rim.position.set(pos[0] + (pos[0] > 0 ? 0.3 : -0.3), pos[1], pos[2]);
        rim.rotation.y = Math.PI / 2;
        carGroup.add(rim);
      });
      
      // Advanced headlights - dual strips
      const headlightGeometry = new THREE.BoxGeometry(0.3, 0.15, 0.4);
      const headlightMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xccffff,
        emissive: 0xccffff,
        emissiveIntensity: 2.5,
      });
      
      const headlight1 = new THREE.Mesh(headlightGeometry, headlightMaterial);
      headlight1.position.set(-0.8, 0.5, 2.1);
      carGroup.add(headlight1);
      
      const headlight2 = new THREE.Mesh(headlightGeometry, headlightMaterial);
      headlight2.position.set(0.8, 0.5, 2.1);
      carGroup.add(headlight2);
      
      // Aggressive taillights
      const taillightMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff1111,
        emissive: 0xff1111,
        emissiveIntensity: 2,
      });
      
      const taillight1 = new THREE.Mesh(headlightGeometry, taillightMaterial);
      taillight1.position.set(-0.8, 0.5, -2.1);
      carGroup.add(taillight1);
      
      const taillight2 = new THREE.Mesh(headlightGeometry, taillightMaterial);
      taillight2.position.set(0.8, 0.5, -2.1);
      carGroup.add(taillight2);
      
      // Side stripes for aggression
      const stripeGeometry = new THREE.BoxGeometry(0.1, 0.8, 3);
      const stripeMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.8,
        metalness: 0.9,
      });
      
      const stripeLeft = new THREE.Mesh(stripeGeometry, stripeMaterial);
      stripeLeft.position.set(-1.1, 0.5, 0);
      carGroup.add(stripeLeft);
      
      const stripeRight = new THREE.Mesh(stripeGeometry, stripeMaterial);
      stripeRight.position.set(1.1, 0.5, 0);
      carGroup.add(stripeRight);
      
      // Undercar neon glow - intense
      const underglowGeometry = new THREE.PlaneGeometry(2.1, 3.8);
      const underglowMaterial = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const underglow = new THREE.Mesh(underglowGeometry, underglowMaterial);
      underglow.rotation.x = -Math.PI / 2;
      underglow.position.y = 0.02;
      carGroup.add(underglow);
      
      return carGroup;
    };

    const car1 = createCar(0xff0000); // Red
    car1.position.set(-3, trackHeight + 2, 0);
    car1.userData.velocity = { x: 0, y: 0, z: 0 };
    car1.userData.score = 0;
    car1.userData.radius = 1.2; // For collision detection
    car1.castShadow = true;
    scene.add(car1);
    
    const car2 = createCar(0x0000ff); // Blue
    car2.position.set(3, trackHeight + 2, 0);
    car2.userData.velocity = { x: 0, y: 0, z: 0 };
    car2.userData.score = 0;
    car2.userData.radius = 1.2; // For collision detection
    car2.castShadow = true;
    scene.add(car2);

    const cars = [car1, car2];

    // Create BOOST PADS (speed boosters)
    const boostPads: THREE.Mesh[] = [];
    const boostPadGeometry = new THREE.CylinderGeometry(2.5, 2.5, 0.3, 32);
    const boostPadMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x00ff00,
      emissive: 0x00ff00,
      emissiveIntensity: 1,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < 15; i++) {
      const boostPad = new THREE.Mesh(boostPadGeometry, boostPadMaterial.clone());
      const t = (i * 30 + 40) / raceLength;
      const pathPoint = path.getPoint(Math.min(0.99, t));
      const x = pathPoint.x + (Math.random() - 0.5) * (trackWidth - 6);
      const z = pathPoint.z;
      const y = pathPoint.y;
      
      boostPad.position.set(x, y + 0.3, z);
      boostPad.rotation.x = Math.PI / 2;
      boostPad.userData.used = false;
      scene.add(boostPad);
      boostPads.push(boostPad);
      
      // Add arrow indicator on boost pad
      const arrowGeometry = new THREE.ConeGeometry(1, 2, 3);
      const arrowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffff00,
        emissive: 0xffff00,
        emissiveIntensity: 1.5,
      });
      const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
      arrow.position.set(x, y + 2, z);
      arrow.rotation.x = Math.PI;
      scene.add(arrow);
    }

    // Create OBSTACLES
    const obstacles: THREE.Mesh[] = [];
    const obstacleGeometry = new THREE.BoxGeometry(2, 3, 2);
    const obstacleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });

    for (let i = 0; i < 20; i++) {
      const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
      const t = (i * 30 + 50) / raceLength;
      const pathPoint = path.getPoint(Math.min(0.99, t));
      const x = pathPoint.x + (Math.random() - 0.5) * (trackWidth - 6);
      const z = pathPoint.z;
      const y = pathPoint.y;
      
      obstacle.position.set(x, y + 1.5, z);
      obstacle.userData.active = true;
      scene.add(obstacle);
      obstacles.push(obstacle);
    }

    // Split-screen cameras
    const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
    camera1.position.set(-3, trackHeight + 8, 15);
    camera1.lookAt(-3, trackHeight, 0);
    
    const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
    camera2.position.set(3, trackHeight + 8, 15);
    camera2.lookAt(3, trackHeight, 0);

    // Keyboard input
    const keys: { [key: string]: boolean } = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Countdown
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setGameStarted(true);
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // No timer needed for race-to-finish mode

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Animate stars and particles
      if (stars.geometry.attributes.position) {
        const positions = stars.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 2] += 0.5; // Move stars forward
          if (positions[i + 2] > 20) {
            positions[i + 2] = -500;
          }
        }
        stars.geometry.attributes.position.needsUpdate = true;
      }

      // Animate neon lights
      neonLights.forEach((light, i) => {
        light.intensity = 2 + Math.sin(Date.now() * 0.003 + i) * 1;
      });

      // Animate boost pads
      boostPads.forEach(pad => {
        if (!pad.userData.used) {
          pad.rotation.z += 0.03;
          pad.position.y = trackHeight + 0.3 + Math.sin(Date.now() * 0.004 + pad.position.z) * 0.2;
          const mat = pad.material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = 0.8 + Math.sin(Date.now() * 0.005) * 0.3;
        }
      });

      // Pulse obstacles
      obstacles.forEach(obstacle => {
        if (obstacle.userData.active) {
          const scale = 1 + Math.sin(Date.now() * 0.005 + obstacle.position.z) * 0.1;
          obstacle.scale.set(scale, scale, scale);
        }
      });

      if (gameStarted && !gameOver) {
        const speed = 0.4;

        // Player 1 controls (WASD)
        if (keys['w']) {
          cars[0].position.z -= speed;
          cars[0].rotation.y = 0;
        }
        if (keys['s']) {
          cars[0].position.z += speed;
          cars[0].rotation.y = Math.PI;
        }
        if (keys['a']) {
          cars[0].position.x -= speed;
          cars[0].rotation.y = Math.PI / 2;
        }
        if (keys['d']) {
          cars[0].position.x += speed;
          cars[0].rotation.y = -Math.PI / 2;
        }
        
        // Player 2 controls (Arrow keys) - Normal directions
        if (keys['ArrowUp']) {
          cars[1].position.z -= speed;
          cars[1].rotation.y = 0;
        }
        if (keys['ArrowDown']) {
          cars[1].position.z += speed;
          cars[1].rotation.y = Math.PI;
        }
        if (keys['ArrowLeft']) {
          cars[1].position.x -= speed;
          cars[1].rotation.y = Math.PI / 2;
        }
        if (keys['ArrowRight']) {
          cars[1].position.x += speed;
          cars[1].rotation.y = -Math.PI / 2;
        }
        
        // Keep cars on track at all times
        cars.forEach((car, index) => {
          const t = Math.abs(car.position.z / RACE_LENGTH);
          const trackPoint = path.getPoint(Math.max(0, Math.min(0.99, t)));
          const trackCenterX = trackPoint.x;
          const trackY = trackPoint.y;
          const distanceFromCenter = car.position.x - trackCenterX;
          
          // Constrain car to track width
          const maxDistanceFromCenter = (trackWidth / 2) - 1;
          if (Math.abs(distanceFromCenter) > maxDistanceFromCenter) {
            car.position.x = trackCenterX + Math.sign(distanceFromCenter) * maxDistanceFromCenter;
          }
          
          // Always keep car on track surface
          car.position.y = trackY + 2;

          // Check if car crossed finish line
          if (car.position.z <= FINISH_LINE_Z && !gameOver) {
            setGameOver(true);
            winnerRef.current = index === 0 ? 'Player 1' : 'Player 2';
          }

          // Update progress for HUD
          const progress = Math.min(100, Math.abs(car.position.z / FINISH_LINE_Z) * 100);
          if (index === 0) {
            setGameState(prev => ({ ...prev, player1Progress: progress }));
          } else {
            setGameState(prev => ({ ...prev, player2Progress: progress }));
          }

          // Check boost pad collision (instead of coins)
          boostPads.forEach(pad => {
            if (!pad.userData.used) {
              const distance = new THREE.Vector2(
                car.position.x - pad.position.x,
                car.position.z - pad.position.z
              ).length();
              
              if (distance < 3) {
                pad.userData.used = true;
                const mat = pad.material as THREE.MeshStandardMaterial;
                mat.emissive.setHex(0x333333);
                mat.emissiveIntensity = 0.2;
                
                // Apply speed boost
                const boostDirection = new THREE.Vector3(0, 0, -1);
                car.position.add(boostDirection.multiplyScalar(8));
                
                // Boost effect
                const boostGeometry = new THREE.BufferGeometry();
                const boostVertices: number[] = [];
                for (let i = 0; i < 30; i++) {
                  boostVertices.push(
                    pad.position.x + (Math.random() - 0.5) * 4,
                    pad.position.y + (Math.random() - 0.5) * 4,
                    pad.position.z + (Math.random() - 0.5) * 4
                  );
                }
                boostGeometry.setAttribute('position', new THREE.Float32BufferAttribute(boostVertices, 3));
                const boostMaterial = new THREE.PointsMaterial({ 
                  color: 0x00ff00, 
                  size: 0.5,
                  transparent: true,
                  blending: THREE.AdditiveBlending,
                });
                const boostEffect = new THREE.Points(boostGeometry, boostMaterial);
                scene.add(boostEffect);
                setTimeout(() => scene.remove(boostEffect), 400);
                
                // Reset after 5 seconds
                setTimeout(() => {
                  pad.userData.used = false;
                  const mat = pad.material as THREE.MeshStandardMaterial;
                  mat.emissive.setHex(0x00ff00);
                  mat.emissiveIntensity = 1;
                }, 5000);
              }
            }
          });

          // Check obstacle collision
          obstacles.forEach(obstacle => {
            if (obstacle.userData.active) {
              const distance = new THREE.Vector2(
                car.position.x - obstacle.position.x,
                car.position.z - obstacle.position.z
              ).length();
              
              if (distance < 2.5) {
                obstacle.userData.active = false;
                obstacle.visible = false;
                
                // Lose points on collision
                car.userData.score = Math.max(0, car.userData.score - 15);
                
                // Explosion effect
                const explosionGeometry = new THREE.BufferGeometry();
                const explosionVertices: number[] = [];
                for (let i = 0; i < 30; i++) {
                  explosionVertices.push(
                    obstacle.position.x + (Math.random() - 0.5) * 5,
                    obstacle.position.y + (Math.random() - 0.5) * 5,
                    obstacle.position.z + (Math.random() - 0.5) * 5
                  );
                }
                explosionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(explosionVertices, 3));
                const explosionMaterial = new THREE.PointsMaterial({ 
                  color: 0xff0000, 
                  size: 0.5,
                  transparent: true,
                });
                const explosion = new THREE.Points(explosionGeometry, explosionMaterial);
                scene.add(explosion);
                setTimeout(() => scene.remove(explosion), 500);
                
                // Push car back
                car.position.z += 5;
              }
            }
          });
        });

        // CAR-TO-CAR COLLISION DETECTION (cars can bump and push each other)
        const car1Pos = cars[0].position;
        const car2Pos = cars[1].position;
        const carDistance = new THREE.Vector3(car1Pos.x - car2Pos.x, 0, car1Pos.z - car2Pos.z).length();
        const minDistance = 2.5; // Sum of both car radii
        
        if (carDistance < minDistance) {
          // Calculate push direction
          const pushDirection = new THREE.Vector3(car1Pos.x - car2Pos.x, 0, car1Pos.z - car2Pos.z).normalize();
          const pushStrength = 0.8;
          
          // Push cars apart
          cars[0].position.add(pushDirection.multiplyScalar(pushStrength));
          cars[1].position.sub(pushDirection.multiplyScalar(pushStrength));
          
          // Slight speed penalty for both cars on collision
          cars[0].userData.score = Math.max(0, cars[0].userData.score - 2);
          cars[1].userData.score = Math.max(0, cars[1].userData.score - 2);
          
          // Collision spark effect
          const sparkGeometry = new THREE.BufferGeometry();
          const sparkVertices: number[] = [];
          const collisionPoint = new THREE.Vector3(
            (car1Pos.x + car2Pos.x) / 2,
            (car1Pos.y + car2Pos.y) / 2,
            (car1Pos.z + car2Pos.z) / 2
          );
          for (let i = 0; i < 40; i++) {
            sparkVertices.push(
              collisionPoint.x + (Math.random() - 0.5) * 3,
              collisionPoint.y + (Math.random() - 0.5) * 3,
              collisionPoint.z + (Math.random() - 0.5) * 3
            );
          }
          sparkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(sparkVertices, 3));
          const sparkMaterial = new THREE.PointsMaterial({ 
            color: 0xffff00,
            size: 0.4,
            transparent: true,
            blending: THREE.AdditiveBlending,
          });
          const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
          scene.add(sparks);
          setTimeout(() => scene.remove(sparks), 600);
        }

        // Update scores in state
        setGameState(prev => ({
          ...prev,
          player1Score: cars[0].userData.score,
          player2Score: cars[1].userData.score,
        }));

        // Update cameras to follow cars
        const camDistance = 15;
        const camHeight = 8;
        
        camera1.position.x = cars[0].position.x;
        camera1.position.y = cars[0].position.y + camHeight;
        camera1.position.z = cars[0].position.z + camDistance;
        camera1.lookAt(cars[0].position.x, cars[0].position.y, cars[0].position.z - 10);
        
        camera2.position.x = cars[1].position.x;
        camera2.position.y = cars[1].position.y + camHeight;
        camera2.position.z = cars[1].position.z + camDistance;
        camera2.lookAt(cars[1].position.x, cars[1].position.y, cars[1].position.z - 10);
      }

      // Split-screen rendering
      renderer.setScissorTest(true);

      // Left viewport - Player 1
      renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
      renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
      renderer.render(scene, camera1);

      // Right viewport - Player 2
      renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
      renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
      renderer.render(scene, camera2);

      renderer.setScissorTest(false);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(countdownInterval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="local-racing-page">
      <div className="lightning-background">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1.2} size={1} />
      </div>
      <div ref={containerRef} className="game-container" />
      
      {countdown > 0 && (
        <div className="countdown-overlay">
          <div className="countdown-content">
            <div className="countdown-number">{countdown}</div>
            <div className="countdown-label">GET READY</div>
          </div>
        </div>
      )}

      {!gameStarted && countdown === 0 && (
        <div className="countdown-overlay">
          <div className="countdown-content go">
            <Flag size={80} strokeWidth={1.5} />
            <div className="countdown-label">GO!</div>
          </div>
        </div>
      )}

      {gameStarted && !gameOver && (
        <div className="game-hud">
          <div className="score-panel player1">
            <div className="player-name">
              <User size={16} />
              <span>Player 1</span>
            </div>
            <div className="score">{Math.round(gameState.player1Progress)}%</div>
            <div className="coins-label">
              <Flag size={12} />
              <span>PROGRESS</span>
            </div>
          </div>
          
          <div className="timer-panel">
            <div className="timer">
              <Trophy size={20} />
              <span>RACE TO FINISH</span>
            </div>
            <div className="timer-label">First to {Math.abs(FINISH_LINE_Z)}m wins</div>
          </div>
          
          <div className="score-panel player2">
            <div className="player-name">
              <User size={16} />
              <span>Player 2</span>
            </div>
            <div className="score">{Math.round(gameState.player2Progress)}%</div>
            <div className="coins-label">
              <Flag size={12} />
              <span>PROGRESS</span>
            </div>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="game-over-overlay">
          <div className="game-over-content">
            <div className="winner-trophy">
              <Trophy size={64} />
            </div>
            <h1 className="winner-text">{winnerRef.current} WINS!</h1>
            <div className="final-scores">
              <div className="final-score">
                <User size={24} />
                <span>Player 1: {Math.round(gameState.player1Progress)}%</span>
              </div>
              <div className="final-score">
                <User size={24} />
                <span>Player 2: {Math.round(gameState.player2Progress)}%</span>
              </div>
            </div>
            <div className="game-over-buttons">
              <button className="btn-play-again" onClick={() => window.location.reload()}>
                <RotateCw size={20} />
                <span>Play Again</span>
              </button>
              <button className="btn-back" onClick={() => navigate('/')}>
                <ArrowLeft size={20} />
                <span>Back to Menu</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {!gameOver && (
        <div className="controls-overlay">
          <div className="controls-help">
            <div className="player-controls">
              <h3>
                <User size={18} />
                <span>Player 1 (Red)</span>
              </h3>
              <p>W/A/S/D - Move</p>
              <p className="info">
                <Zap size={14} />
                <span>Hit boost pads! Avoid obstacles!</span>
              </p>
            </div>
            <div className="divider" />
            <div className="player-controls">
              <h3>
                <User size={18} />
                <span>Player 2 (Blue)</span>
              </h3>
              <p>Arrow Keys - Move</p>
              <p className="info">
                <Zap size={14} />
                <span>Hit boost pads! Avoid obstacles!</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
