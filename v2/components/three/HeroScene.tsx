"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { DistortedBlob } from "./DistortedBlob";

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={isMobile ? [1, 1.25] : [1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#FFD8B0" />
      <DistortedBlob
        scale={isMobile ? 1.0 : 1.5}
        speed={isMobile ? 1.2 : 1.6}
        distort={isMobile ? 0.28 : 0.42}
      />
      <Environment preset="warehouse" />
    </Canvas>
  );
}
