"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Scene3D({
  className = "absolute inset-0 pointer-events-none",
}: {
  className?: string;
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

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
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

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Master group for mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ============================================================
    // 1. TOP-LEFT: FLOWING CHROME RIBBON KNOT (Glossy Silver & Blue reflection)
    // ============================================================
    const ribbonGeo = new THREE.TorusKnotGeometry(1.2, 0.36, 120, 32, 2, 5);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      metalness: 0.98,
      roughness: 0.12,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, chromeMat);
    ribbonMesh.position.set(-3.8, 2.2, -1.8);
    ribbonMesh.scale.set(0.9, 0.9, 0.9);
    masterGroup.add(ribbonMesh);

    // ============================================================
    // 2. BOTTOM-RIGHT: CYAN CHROME SPIRAL RIDGED SWIRL
    // ============================================================
    const spiralGeo = new THREE.TorusKnotGeometry(1.05, 0.3, 96, 32, 3, 4);
    const cyanChromeMat = new THREE.MeshStandardMaterial({
      color: 0x35d9ff,
      metalness: 0.96,
      roughness: 0.14,
    });
    const spiralMesh = new THREE.Mesh(spiralGeo, cyanChromeMat);
    spiralMesh.position.set(4.0, -2.1, -1.5);
    spiralMesh.scale.set(0.95, 0.95, 0.95);
    masterGroup.add(spiralMesh);

    // ============================================================
    // 3. BACKGROUND: RETRO WIREFRAME ISOMETRIC CAGE
    // ============================================================
    const bgKnotGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const bgWireMat = new THREE.MeshBasicMaterial({
      color: 0x0a2463,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const bgKnot = new THREE.Mesh(bgKnotGeo, bgWireMat);
    bgKnot.position.set(3.4, 2.4, -4.0);
    masterGroup.add(bgKnot);

    // ============================================================
    // 4. FLOATING 3D PIXEL SMILEY BADGE (tilted on left)
    // ============================================================
    const smileyGroup = new THREE.Group();
    const coinGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.22, 28);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0x2563ff,
      metalness: 0.9,
      roughness: 0.2,
    });
    const coinMesh = new THREE.Mesh(coinGeo, coinMat);
    coinMesh.rotation.x = Math.PI / 2;
    smileyGroup.add(coinMesh);

    // White pixel blocks
    const pixelMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeGeo = new THREE.BoxGeometry(0.12, 0.22, 0.08);
    const leftEye = new THREE.Mesh(eyeGeo, pixelMat);
    leftEye.position.set(-0.24, 0.12, 0.13);
    smileyGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, pixelMat);
    rightEye.position.set(0.24, 0.12, 0.13);
    smileyGroup.add(rightEye);

    const mouthBottom = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.09, 0.08),
      pixelMat
    );
    mouthBottom.position.set(0, -0.2, 0.13);
    smileyGroup.add(mouthBottom);

    const mouthLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.11, 0.08),
      pixelMat
    );
    mouthLeft.position.set(-0.19, -0.13, 0.13);
    smileyGroup.add(mouthLeft);

    const mouthRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.11, 0.08),
      pixelMat
    );
    mouthRight.position.set(0.19, -0.13, 0.13);
    smileyGroup.add(mouthRight);

    smileyGroup.position.set(-2.8, 0.4, 0.1);
    smileyGroup.rotation.set(0.15, 0.4, -0.12);
    masterGroup.add(smileyGroup);

    // ============================================================
    // 5. 3D TRANSLUCENT GLASS 4-POINT STAR
    // ============================================================
    const starShape = new THREE.Shape();
    const starRadius = 0.65;
    const innerRadius = 0.14;
    starShape.moveTo(0, starRadius);
    starShape.quadraticCurveTo(0.04, innerRadius, innerRadius, innerRadius);
    starShape.quadraticCurveTo(innerRadius, 0.04, starRadius, 0);
    starShape.quadraticCurveTo(innerRadius, -0.04, innerRadius, -innerRadius);
    starShape.quadraticCurveTo(0.04, -innerRadius, 0, -starRadius);
    starShape.quadraticCurveTo(-0.04, -innerRadius, -innerRadius, -innerRadius);
    starShape.quadraticCurveTo(-innerRadius, -0.04, -starRadius, 0);
    starShape.quadraticCurveTo(-innerRadius, 0.04, -innerRadius, innerRadius);
    starShape.quadraticCurveTo(-0.04, innerRadius, 0, starRadius);

    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    const glassStarMat = new THREE.MeshStandardMaterial({
      color: 0x35d9ff,
      metalness: 0.65,
      roughness: 0.08,
      transparent: true,
      opacity: 0.85,
    });
    const starMesh = new THREE.Mesh(starGeo, glassStarMat);
    starMesh.position.set(2.5, 1.4, 0.2);
    starMesh.rotation.set(0.1, 0.2, 0.3);
    masterGroup.add(starMesh);

    // ============================================================
    // 6. FLOATING PARTICLES FIELD
    // ============================================================
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x35d9ff,
      size: 0.04,
      transparent: true,
      opacity: 0.55,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // ============================================================
    // 7. LIGHTING SETUP (Electric Blue & Cyan Rim)
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0x050816, 2.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x35d9ff, 8, 25);
    cyanLight.position.set(-1.8, 0.6, 4);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x2563ff, 7, 25);
    blueLight.position.set(3.2, -2, 3);
    scene.add(blueLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, 6, 5);
    scene.add(rimLight);

    // ============================================================
    // 8. MOUSE INTERACTION & DAMPING
    // ============================================================
    let targetX = 0;
    let targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // ============================================================
    // 9. ANIMATION LOOP
    // ============================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      ribbonMesh.rotation.x = elapsedTime * 0.18;
      ribbonMesh.rotation.y = elapsedTime * 0.24;

      spiralMesh.rotation.x = elapsedTime * 0.2;
      spiralMesh.rotation.z = elapsedTime * 0.16;

      bgKnot.rotation.y = elapsedTime * 0.06;

      smileyGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.8) * 0.12;
      smileyGroup.rotation.y = 0.4 + Math.sin(elapsedTime * 1.2) * 0.12;

      starMesh.rotation.z = elapsedTime * 0.3;
      starMesh.position.y = 1.4 + Math.sin(elapsedTime * 2.0) * 0.08;

      particleField.rotation.y = elapsedTime * 0.015;

      masterGroup.rotation.y += (targetX * 0.35 - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x +=
        (-targetY * 0.35 - masterGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return null; // Graceful fallback
  }

  return <div ref={containerRef} className={className} />;
}
