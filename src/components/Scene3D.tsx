"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type SceneVariant =
  | "hero"
  | "about"
  | "services"
  | "work"
  | "experience"
  | "how"
  | "philosophy"
  | "contact";

export default function Scene3D({
  className = "absolute inset-0 pointer-events-none",
  variant = "hero",
}: {
  className?: string;
  variant?: SceneVariant;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Master group for mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ============================================================
    // ELEGANT MATERIALS (Soft Glass, Luminous Cyan, Liquid Silver)
    // ============================================================
    const liquidChromeMat = new THREE.MeshStandardMaterial({
      color: 0xdbeafe,
      metalness: 0.95,
      roughness: 0.1,
    });

    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x35d9ff,
      metalness: 0.8,
      roughness: 0.08,
      transparent: true,
      opacity: 0.85,
    });

    const softGlassMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      metalness: 0.6,
      roughness: 0.05,
      transparent: true,
      opacity: 0.7,
    });

    // Helper: Delicate 4-Point Glass Star
    const createStarMesh = (radius = 0.55, color = 0x35d9ff) => {
      const starShape = new THREE.Shape();
      const innerRadius = radius * 0.22;
      starShape.moveTo(0, radius);
      starShape.quadraticCurveTo(0.03, innerRadius, innerRadius, innerRadius);
      starShape.quadraticCurveTo(innerRadius, 0.03, radius, 0);
      starShape.quadraticCurveTo(innerRadius, -0.03, innerRadius, -innerRadius);
      starShape.quadraticCurveTo(0.03, -innerRadius, 0, -radius);
      starShape.quadraticCurveTo(-0.03, -innerRadius, -innerRadius, -innerRadius);
      starShape.quadraticCurveTo(-innerRadius, -0.03, -radius, 0);
      starShape.quadraticCurveTo(-innerRadius, 0.03, -innerRadius, innerRadius);
      starShape.quadraticCurveTo(-0.03, innerRadius, 0, radius);

      const starGeo = new THREE.ExtrudeGeometry(starShape, {
        depth: 0.12,
        bevelEnabled: true,
        bevelSegments: 3,
        bevelSize: 0.04,
        bevelThickness: 0.04,
      });
      const glassStarMat = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.8,
        roughness: 0.06,
        transparent: true,
        opacity: 0.85,
      });
      return new THREE.Mesh(starGeo, glassStarMat);
    };

    // Helper: Minimalist Glass Bubble / Sphere
    const createGlassSphere = (radius = 0.4, color = 0x35d9ff) => {
      return new THREE.Mesh(
        new THREE.SphereGeometry(radius, 32, 32),
        new THREE.MeshStandardMaterial({
          color: color,
          metalness: 0.85,
          roughness: 0.08,
          transparent: true,
          opacity: 0.75,
        })
      );
    };

    // Objects collection for animation loop
    const animatedObjects: {
      mesh: THREE.Object3D;
      rotSpeed: { x: number; y: number; z: number };
      floatSpeed?: number;
      floatAmp?: number;
      initialY?: number;
    }[] = [];

    // ============================================================
    // BUILD CLEAN, PERIPHERAL-ONLY 3D SCENE (NEVER BEHIND TEXT)
    // ============================================================
    if (variant === "hero") {
      // 1. Top-Left Far Margin: Liquid Chrome Ribbon
      const ribbon = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.0, 0.3, 120, 32, 2, 5),
        liquidChromeMat
      );
      ribbon.position.set(-4.5, 2.2, -1.0);
      masterGroup.add(ribbon);
      animatedObjects.push({ mesh: ribbon, rotSpeed: { x: 0.18, y: 0.24, z: 0 } });

      // 2. Bottom-Right Far Margin: Cyan Swirl
      const swirl = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.9, 0.25, 96, 32, 3, 4),
        cyanGlowMat
      );
      swirl.position.set(4.6, -2.4, -0.8);
      masterGroup.add(swirl);
      animatedObjects.push({ mesh: swirl, rotSpeed: { x: 0.2, y: 0, z: 0.16 } });

      // 3. Floating Glass Star Top Right
      const star1 = createStarMesh(0.55, 0x35d9ff);
      star1.position.set(4.0, 2.2, 0.2);
      masterGroup.add(star1);
      animatedObjects.push({
        mesh: star1,
        rotSpeed: { x: 0, y: 0, z: 0.3 },
        floatSpeed: 2.0,
        floatAmp: 0.12,
        initialY: 2.2,
      });

      // 4. Floating Glass Sphere Bottom Left
      const sphereL = createGlassSphere(0.35, 0x93c5fd);
      sphereL.position.set(-4.2, -2.0, 0.5);
      masterGroup.add(sphereL);
      animatedObjects.push({
        mesh: sphereL,
        rotSpeed: { x: 0.1, y: 0.1, z: 0 },
        floatSpeed: 1.8,
        floatAmp: 0.14,
        initialY: -2.0,
      });
    } else if (variant === "about") {
      // PERIPHERAL ONLY: Left corner & Right corner (NO OBJECTS BEHIND TEXT)
      // 1. Far Top-Right Corner: Floating Glass Star
      const starR = createStarMesh(0.65, 0x35d9ff);
      starR.position.set(5.2, 2.6, 0.2);
      masterGroup.add(starR);
      animatedObjects.push({
        mesh: starR,
        rotSpeed: { x: 0.05, y: 0.1, z: 0.25 },
        floatSpeed: 1.6,
        floatAmp: 0.15,
        initialY: 2.6,
      });

      // 2. Far Top-Left Corner: Subtle Chrome Ring
      const ringL = new THREE.Mesh(
        new THREE.TorusGeometry(0.9, 0.18, 24, 48),
        liquidChromeMat
      );
      ringL.position.set(-5.2, 2.4, -1.0);
      masterGroup.add(ringL);
      animatedObjects.push({ mesh: ringL, rotSpeed: { x: 0.15, y: 0.2, z: 0.05 } });

      // 3. Far Bottom-Right Corner: Floating Glass Sphere
      const sphereR = createGlassSphere(0.4, 0x93c5fd);
      sphereR.position.set(5.0, -2.5, 0.3);
      masterGroup.add(sphereR);
      animatedObjects.push({
        mesh: sphereR,
        rotSpeed: { x: 0.1, y: 0.1, z: 0 },
        floatSpeed: 1.8,
        floatAmp: 0.12,
        initialY: -2.5,
      });
    } else if (variant === "services") {
      // Far Outer Flanks only
      const starL = createStarMesh(0.55, 0x35d9ff);
      starL.position.set(-5.0, 1.8, 0.2);
      masterGroup.add(starL);
      animatedObjects.push({
        mesh: starL,
        rotSpeed: { x: 0, y: 0, z: 0.3 },
        floatSpeed: 1.8,
        floatAmp: 0.14,
        initialY: 1.8,
      });

      const sphereR = createGlassSphere(0.45, 0x35d9ff);
      sphereR.position.set(5.0, -1.8, 0.2);
      masterGroup.add(sphereR);
      animatedObjects.push({
        mesh: sphereR,
        rotSpeed: { x: 0.1, y: 0.1, z: 0 },
        floatSpeed: 2.0,
        floatAmp: 0.15,
        initialY: -1.8,
      });
    } else if (variant === "work") {
      // Far Left & Right Top Margins
      const ribbon = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.85, 0.22, 96, 32, 2, 3),
        liquidChromeMat
      );
      ribbon.position.set(5.2, 2.5, -1.2);
      masterGroup.add(ribbon);
      animatedObjects.push({ mesh: ribbon, rotSpeed: { x: 0.15, y: 0.18, z: 0 } });

      const starL = createStarMesh(0.5, 0x35d9ff);
      starL.position.set(-5.0, -2.2, 0.3);
      masterGroup.add(starL);
      animatedObjects.push({
        mesh: starL,
        rotSpeed: { x: 0, y: 0, z: -0.25 },
        floatSpeed: 1.7,
        floatAmp: 0.12,
        initialY: -2.2,
      });
    } else if (variant === "experience") {
      const ringL = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.15, 20, 48), softGlassMat);
      ringL.position.set(-5.0, 1.5, -0.5);
      masterGroup.add(ringL);
      animatedObjects.push({ mesh: ringL, rotSpeed: { x: 0.2, y: 0.15, z: 0 } });

      const starR = createStarMesh(0.55, 0x35d9ff);
      starR.position.set(5.0, -2.0, 0.3);
      masterGroup.add(starR);
      animatedObjects.push({
        mesh: starR,
        rotSpeed: { x: 0, y: 0, z: 0.3 },
        floatSpeed: 2.0,
        floatAmp: 0.12,
        initialY: -2.0,
      });
    } else if (variant === "how") {
      const sphereL = createGlassSphere(0.4, 0x35d9ff);
      sphereL.position.set(-5.0, 2.0, 0.2);
      masterGroup.add(sphereL);
      animatedObjects.push({
        mesh: sphereL,
        rotSpeed: { x: 0.1, y: 0.1, z: 0 },
        floatSpeed: 1.6,
        floatAmp: 0.14,
        initialY: 2.0,
      });

      const starR = createStarMesh(0.5, 0x93c5fd);
      starR.position.set(5.0, -1.8, 0.3);
      masterGroup.add(starR);
      animatedObjects.push({
        mesh: starR,
        rotSpeed: { x: 0, y: 0, z: -0.3 },
        floatSpeed: 1.8,
        floatAmp: 0.12,
        initialY: -1.8,
      });
    } else if (variant === "philosophy") {
      // Far Outer Orbit Rings (Centered but very large radius so they frame the text without blocking)
      const ringLarge = new THREE.Mesh(
        new THREE.TorusGeometry(3.6, 0.08, 16, 80),
        cyanGlowMat
      );
      masterGroup.add(ringLarge);
      animatedObjects.push({ mesh: ringLarge, rotSpeed: { x: 0.08, y: 0.12, z: 0 } });

      const starL = createStarMesh(0.5, 0x35d9ff);
      starL.position.set(-4.8, 0, 0.5);
      masterGroup.add(starL);
      animatedObjects.push({
        mesh: starL,
        rotSpeed: { x: 0, y: 0, z: 0.25 },
        floatSpeed: 1.9,
        floatAmp: 0.15,
        initialY: 0,
      });

      const starR = createStarMesh(0.5, 0x93c5fd);
      starR.position.set(4.8, 0, 0.5);
      masterGroup.add(starR);
      animatedObjects.push({
        mesh: starR,
        rotSpeed: { x: 0, y: 0, z: -0.25 },
        floatSpeed: 2.1,
        floatAmp: 0.15,
        initialY: 0,
      });
    } else if (variant === "contact") {
      const starL = createStarMesh(0.6, 0x35d9ff);
      starL.position.set(-4.8, 1.5, 0.4);
      masterGroup.add(starL);
      animatedObjects.push({
        mesh: starL,
        rotSpeed: { x: 0, y: 0, z: 0.3 },
        floatSpeed: 1.8,
        floatAmp: 0.14,
        initialY: 1.5,
      });

      const sphereR = createGlassSphere(0.45, 0x93c5fd);
      sphereR.position.set(4.8, -1.5, 0.4);
      masterGroup.add(sphereR);
      animatedObjects.push({
        mesh: sphereR,
        rotSpeed: { x: 0.1, y: 0.1, z: 0 },
        floatSpeed: 2.0,
        floatAmp: 0.15,
        initialY: -1.5,
      });
    }

    // ============================================================
    // SOFT STARDUST PARTICLES (Subtle, never obstructive)
    // ============================================================
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 18;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 6 - 1.0;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleField = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x35d9ff,
        size: 0.035,
        transparent: true,
        opacity: 0.5,
      })
    );
    scene.add(particleField);

    // ============================================================
    // BALANCED LIGHTING SETUP
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x35d9ff, 10, 25);
    cyanLight.position.set(-3.5, 2.0, 4.0);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x2563ff, 9, 25);
    blueLight.position.set(3.5, -2.0, 4.0);
    scene.add(blueLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, 6, 6);
    scene.add(rimLight);

    // ============================================================
    // MOUSE INTERACTION & RESIZE
    // ============================================================
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ============================================================
    // ANIMATION LOOP
    // ============================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate each object
      animatedObjects.forEach((obj) => {
        obj.mesh.rotation.x += obj.rotSpeed.x * 0.05;
        obj.mesh.rotation.y += obj.rotSpeed.y * 0.05;
        obj.mesh.rotation.z += obj.rotSpeed.z * 0.05;

        if (obj.floatSpeed && obj.floatAmp !== undefined && obj.initialY !== undefined) {
          obj.mesh.position.y =
            obj.initialY + Math.sin(elapsedTime * obj.floatSpeed) * obj.floatAmp;
        }
      });

      particleField.rotation.y = elapsedTime * 0.012;

      // Mouse damping
      masterGroup.rotation.y += (targetX * 0.25 - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (-targetY * 0.25 - masterGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  if (!hasWebGL) {
    return null; // Graceful fallback
  }

  return <div ref={containerRef} className={className} />;
}
