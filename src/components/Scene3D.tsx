"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene3D({ className = "absolute inset-0 pointer-events-none" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Main 3D Liquid Chrome Torus Knot
    const torusGeometry = new THREE.TorusKnotGeometry(1.4, 0.42, 128, 32, 2, 3);
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      metalness: 0.95,
      roughness: 0.12,
      wireframe: false,
    });
    const mainKnot = new THREE.Mesh(torusGeometry, chromeMaterial);
    mainKnot.position.set(2.2, 0.2, -1);
    group.add(mainKnot);

    // Secondary floating crystal (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: true,
    });
    const crystal = new THREE.Mesh(crystalGeo, glassMaterial);
    crystal.position.set(-2.8, -1.2, 0);
    group.add(crystal);

    // Orbiting octahedron
    const octGeo = new THREE.OctahedronGeometry(0.45);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      metalness: 0.9,
      roughness: 0.1,
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(-1.8, 1.8, -0.5);
    group.add(octahedron);

    // Particle field
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 8, 20);
    cyanLight.position.set(4, 3, 3);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x2563eb, 7, 20);
    blueLight.position.set(-4, -3, 2);
    scene.add(blueLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2);
    rimLight.position.set(0, 5, 5);
    scene.add(rimLight);

    // Mouse movement reactivity
    let targetX = 0;
    let targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth damping rotation
      mainKnot.rotation.x = elapsedTime * 0.25;
      mainKnot.rotation.y = elapsedTime * 0.35;
      mainKnot.position.y = 0.2 + Math.sin(elapsedTime * 0.8) * 0.15;

      crystal.rotation.x = elapsedTime * 0.4;
      crystal.rotation.y = elapsedTime * 0.3;
      crystal.position.y = -1.2 + Math.cos(elapsedTime * 0.9) * 0.12;

      octahedron.rotation.y = elapsedTime * 0.5;
      octahedron.position.y = 1.8 + Math.sin(elapsedTime * 1.1) * 0.1;

      // Group reactive tilt
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (-targetY - group.rotation.x) * 0.05;

      // Particles subtle drift
      particleField.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      torusGeometry.dispose();
      chromeMaterial.dispose();
      crystalGeo.dispose();
      glassMaterial.dispose();
      octGeo.dispose();
      octMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
