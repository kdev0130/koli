"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import globeData from "../../../data/globe.json";

export function World({
  data,
  globeConfig,
}: {
  data: Array<{
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
  }>;
  globeConfig: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.Fog(0x000000, 2000, 3000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
    cameraRef.current = camera;
    camera.position.z = 2.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe group
    const globe = new THREE.Group();
    globeRef.current = globe;
    scene.add(globe);

    // Create sphere geometry with countries
    const sphereGeometry = new THREE.IcosahedronGeometry(1, 12);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0D1117,
      emissive: 0xF5C842,
      emissiveIntensity: 0.15,
      shininess: 10,
      wireframe: false,
    });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globe.add(sphere);

    // Add particles for countries
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFFE680,
      size: 0.01,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });

    const positions = [];
    if (globeData && globeData.features) {
      globeData.features.forEach((feature) => {
        if (feature.geometry && feature.geometry.coordinates) {
          const coords = feature.geometry.coordinates;
          if (feature.geometry.type === "Polygon") {
            coords[0].forEach((coord: any) => {
              const [lng, lat] = coord as [number, number];
              const x = Math.cos((lat * Math.PI) / 180) * Math.cos((lng * Math.PI) / 180);
              const y = Math.sin((lat * Math.PI) / 180);
              const z = Math.cos((lat * Math.PI) / 180) * Math.sin((lng * Math.PI) / 180);
              positions.push(x, y, z);
            });
          } else if (feature.geometry.type === "MultiPolygon") {
            coords.forEach((polygon: any) => {
              polygon[0].forEach((coord: any) => {
                const [lng, lat] = coord as [number, number];
                const x = Math.cos((lat * Math.PI) / 180) * Math.cos((lng * Math.PI) / 180);
                const y = Math.sin((lat * Math.PI) / 180);
                const z = Math.cos((lat * Math.PI) / 180) * Math.sin((lng * Math.PI) / 180);
                positions.push(x, y, z);
              });
            });
          }
        }
      });
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    globe.add(particles);

    // Add arcs
    const arcLines: { line: THREE.Line; maxPoints: number; progress: number; isActive: boolean }[] = [];
    const glowPoints: { start: THREE.Mesh; end: THREE.Mesh }[] = [];
    
    data.forEach((arc) => {
      const startLat = (arc.startLat * Math.PI) / 180;
      const startLng = (arc.startLng * Math.PI) / 180;
      const endLat = (arc.endLat * Math.PI) / 180;
      const endLng = (arc.endLng * Math.PI) / 180;

      const start = new THREE.Vector3(
        Math.cos(startLat) * Math.cos(startLng),
        Math.sin(startLat),
        Math.cos(startLat) * Math.sin(startLng)
      );

      const end = new THREE.Vector3(
        Math.cos(endLat) * Math.cos(endLng),
        Math.sin(endLat),
        Math.cos(endLat) * Math.sin(endLng)
      );

      const points = [];
      const steps = 50;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const point = new THREE.Vector3().lerpVectors(start, end, t);
        
        // Add arc altitude
        const height = Math.sin(t * Math.PI) * arc.arcAlt;
        point.normalize();
        point.multiplyScalar(1 + height);
        
        points.push(point);
      }

      const arcGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const arcMaterial = new THREE.LineBasicMaterial({
        color: arc.color,
        linewidth: 2,
        transparent: true,
        opacity: 0.6,
      });

      const arcLine = new THREE.Line(arcGeometry, arcMaterial);
      globe.add(arcLine);
      
      // Set initial draw range to 0 (invisible)
      arcGeometry.setDrawRange(0, 0);
      
      arcLines.push({ 
        line: arcLine, 
        maxPoints: points.length,
        progress: 0,
        isActive: false
      });

      // Add glow points at start and end
      const pointGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const startPointMaterial = new THREE.MeshBasicMaterial({ 
        color: arc.color,
        transparent: true,
        opacity: 1.0
      });
      const startPoint = new THREE.Mesh(pointGeometry, startPointMaterial);
      startPoint.position.copy(start);
      globe.add(startPoint);

      const endPointMaterial = new THREE.MeshBasicMaterial({ 
        color: arc.color,
        transparent: true,
        opacity: 1.0
      });
      const endPoint = new THREE.Mesh(pointGeometry, endPointMaterial);
      endPoint.position.copy(end);
      globe.add(endPoint);

      glowPoints.push({ start: startPoint, end: endPoint });
    });

    // Lights
    const light1 = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    light2.position.set(5, 3, 5);
    scene.add(light2);

    // Mouse interaction for drag rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let lastMoveTime = Date.now();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      lastMoveTime = Date.now();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const currentTime = Date.now();
        const deltaTime = Math.max(currentTime - lastMoveTime, 1);
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        
        // Calculate velocity
        velocityX = (deltaX / deltaTime) * 16; // Normalize to 60fps
        velocityY = (deltaY / deltaTime) * 16;
        
        targetRotationY += deltaX * 0.003;
        targetRotationX += deltaY * 0.003;
        
        // Clamp vertical rotation to prevent upside-down (between -60 and 60 degrees)
        const maxRotation = Math.PI / 3; // 60 degrees
        targetRotationX = Math.max(-maxRotation, Math.min(maxRotation, targetRotationX));
        
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
        lastMoveTime = currentTime;
      } else {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseLeave = () => {
      isDragging = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      if (globeRef.current) {
        // Auto-rotate when not dragging
        if (globeConfig.autoRotate && !isDragging) {
          targetRotationY += globeConfig.autoRotateSpeed * 0.002;
        }
        
        // Apply momentum when not dragging
        if (!isDragging) {
          // Apply velocity with decay
          targetRotationY += velocityX * 0.05;
          targetRotationX += velocityY * 0.05;
          
          // Clamp vertical rotation
          const maxRotation = Math.PI / 3; // 60 degrees
          targetRotationX = Math.max(-maxRotation, Math.min(maxRotation, targetRotationX));
          
          // Decay velocity
          velocityX *= 0.95;
          velocityY *= 0.95;
          
          // Stop when velocity is very small
          if (Math.abs(velocityX) < 0.01) velocityX = 0;
          if (Math.abs(velocityY) < 0.01) velocityY = 0;
        }

        // Smooth rotation
        globeRef.current.rotation.x += (targetRotationX - globeRef.current.rotation.x) * 0.1;
        globeRef.current.rotation.y += (targetRotationY - globeRef.current.rotation.y) * 0.1;
      }

      // Animate particles (pulsing effect)
      if (particles) {
        particlesMaterial.opacity = 0.6 + Math.sin(time) * 0.2;
      }

      // Animate glow points
      glowPoints.forEach((pointSet, index) => {
        const pulse = Math.sin(time * 2 + index) * 0.3 + 0.7;
        const startMat = pointSet.start.material as THREE.MeshBasicMaterial;
        const endMat = pointSet.end.material as THREE.MeshBasicMaterial;
        startMat.opacity = pulse;
        endMat.opacity = pulse;
      });

      // Animate arc lines drawing from start to end
      // Randomly activate 1-10 arcs at a time
      const inactiveArcs = arcLines.filter(arc => !arc.isActive && arc.progress === 0);
      const activeArcs = arcLines.filter(arc => arc.isActive);
      
      // If we have fewer than 1-10 active arcs, randomly activate more
      if (activeArcs.length < 10 && inactiveArcs.length > 0 && Math.random() < 0.03) {
        const numToActivate = Math.floor(Math.random() * 10) + 1; // 1-10 arcs
        for (let i = 0; i < Math.min(numToActivate, inactiveArcs.length); i++) {
          const randomIndex = Math.floor(Math.random() * inactiveArcs.length);
          inactiveArcs[randomIndex].isActive = true;
          inactiveArcs.splice(randomIndex, 1);
        }
      }
      
      arcLines.forEach((arcData, index) => {
        if (!arcData.isActive) {
          // Keep arc invisible when not active
          const geometry = arcData.line.geometry as THREE.BufferGeometry;
          geometry.setDrawRange(0, 0);
          const mat = arcData.line.material as THREE.LineBasicMaterial;
          mat.opacity = 0;
          return;
        }
        
        arcData.progress += 0.012; // Speed of drawing
        
        if (arcData.progress > 2.0) {
          arcData.progress = 0;
          arcData.isActive = false; // Deactivate after complete cycle
          return;
        }
        
        const geometry = arcData.line.geometry as THREE.BufferGeometry;
        const mat = arcData.line.material as THREE.LineBasicMaterial;
        
        if (arcData.progress <= 1.0) {
          // Phase 1: Draw from start to end (0 to maxPoints)
          const drawProgress = arcData.progress;
          const pointsToDraw = Math.floor(drawProgress * arcData.maxPoints);
          geometry.setDrawRange(0, pointsToDraw);
          
          // Fade in at the start
          if (arcData.progress < 0.1) {
            mat.opacity = arcData.progress * 6;
          } else {
            mat.opacity = 0.6;
          }
        } else {
          // Phase 2: Shrink from end to start (maxPoints down to 0)
          const shrinkProgress = arcData.progress - 1.0; // 0 to 1
          const startPoint = Math.floor(shrinkProgress * arcData.maxPoints);
          const pointsToDraw = arcData.maxPoints - startPoint;
          geometry.setDrawRange(startPoint, pointsToDraw);
          
          // Keep full opacity while shrinking
          mat.opacity = 0.6;
        }
      });

      renderer.render(scene, camera);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || width;
      const newHeight = containerRef.current?.clientHeight || height;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", handleResize);
      
      // Dispose geometries and materials
      arcLines.forEach(arcData => {
        arcData.line.geometry.dispose();
        (arcData.line.material as THREE.Material).dispose();
      });
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [globeConfig, data]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
