"use client";

import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

type Props = {
  speed?: number;
  distort?: number;
  scale?: number;
};

const DEFAULT_COLOR = "#FF4B1F";

export function DistortedBlob({ speed = 1.6, distort = 0.42, scale = 1.5 }: Props) {
  const mesh = useRef<Mesh>(null!);
  const [color, setColor] = useState<string>(DEFAULT_COLOR);

  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();
    if (value) setColor(value);
  }, []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.35 + pointer.y * 0.4;
    mesh.current.rotation.y = t * 0.18 + pointer.x * 0.6;
    mesh.current.position.x = pointer.x * 0.3;
    mesh.current.position.y = pointer.y * 0.2;
  });

  return (
    <mesh ref={mesh} scale={scale}>
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        roughness={0.25}
        metalness={0.15}
      />
    </mesh>
  );
}
