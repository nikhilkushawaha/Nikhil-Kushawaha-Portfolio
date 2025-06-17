// ThreeDModel.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RoboModel from "./AssistantRobo";

const ThreeDModel = () => {
  const positions = [
    { id: "banner", position: { x: 1, y: -0.6, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: "intro", position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
    { id: "description", position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
    { id: "contact", position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
  ];

  return (
    <div className="w-full h-screen" id="container3D" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 100,
      pointerEvents: 'none',
    }}>
      <Canvas style={{ pointerEvents: 'none' }}
      camera={{ position: [0, 0, 13], fov: 10 }}>
        <ambientLight intensity={1.3} />
        <pointLight position={[10, 20, 10]} />
        <directionalLight intensity={1} position={[500, 500, 500]} />
        <RoboModel positions={positions} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
