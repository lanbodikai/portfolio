"use client";

import { useEffect, useRef } from "react";
import type { BufferAttribute } from "three";

export default function CursorBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const init = async () => {
      const THREE = await import("three");
      if (cancelled) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 8;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setClearAlpha(0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const count = 84;
      const positions = new Float32Array(count * 3);
      const basePositions = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {
        const row = Math.floor(i / 12);
        const col = i % 12;
        const x = (col - 5.5) * 0.78;
        const y = (row - 3) * 0.72;
        const z = Math.sin(i * 0.74) * 0.18;
        positions.set([x, y, z], i * 3);
        basePositions.set([x, y, z], i * 3);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: new THREE.Color("#7aa7ff"),
        size: 0.035,
        transparent: true,
        opacity: 0.38,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color("#8eb6ff"),
        transparent: true,
        opacity: 0.2,
      });
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array((count - 1) * 2 * 3);
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      const cursor = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };

      const onPointerMove = (event: PointerEvent) => {
        target.x = (event.clientX / window.innerWidth) * 2 - 1;
        target.y = -((event.clientY / window.innerHeight) * 2 - 1);
      };

      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", resize);
      resize();

      let frame = 0;
      const animate = () => {
        frame = window.requestAnimationFrame(animate);
        const time = performance.now() * 0.001;
        cursor.x += (target.x - cursor.x) * 0.06;
        cursor.y += (target.y - cursor.y) * 0.06;

        const positionAttr = geometry.getAttribute("position") as BufferAttribute;
        const lineAttr = lineGeometry.getAttribute("position") as BufferAttribute;

        for (let i = 0; i < count; i += 1) {
          const index = i * 3;
          const bx = basePositions[index];
          const by = basePositions[index + 1];
          const distance = Math.hypot(bx / 5 - cursor.x, by / 3 - cursor.y);
          const pull = Math.max(0, 1 - distance) * 0.2;

          positions[index] = bx + cursor.x * pull + Math.sin(time + i) * 0.015;
          positions[index + 1] = by + cursor.y * pull + Math.cos(time * 0.8 + i) * 0.015;
          positions[index + 2] = basePositions[index + 2] + Math.sin(time + i * 0.4) * 0.08;
        }

        positionAttr.needsUpdate = true;

        for (let i = 0; i < count - 1; i += 1) {
          const source = i * 3;
          const lineIndex = i * 6;
          linePositions.set(
            [
              positions[source],
              positions[source + 1],
              positions[source + 2],
              positions[source + 3],
              positions[source + 4],
              positions[source + 5],
            ],
            lineIndex,
          );
        }

        lineAttr.needsUpdate = true;
        points.rotation.x = cursor.y * 0.08;
        points.rotation.y = cursor.x * 0.12;
        lines.rotation.copy(points.rotation);

        renderer.render(scene, camera);
      };

      animate();

      cleanup = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", resize);
        geometry.dispose();
        lineGeometry.dispose();
        material.dispose();
        lineMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    init();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-90"
    />
  );
}
