import React, { useRef, useLayoutEffect, Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "./RubikAnimation.css";
import rubik from "../images/rubik.png";
import { TextureLoader } from "three";

function RubikCube() {
  const mesh = useRef();
  const [state, toggle] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  const rubikMaterial = useLoader(TextureLoader, rubik);
  return (
    <>
      <mesh
        position={[5, 7, -15]}
        ref={mesh}
        scale={state ? 1.15 : 1}
        onPointerOver={(event) => toggle(true)}
        onPointerOut={(event) => toggle(false)}
      >
        <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
        <meshStandardMaterial
          attach="material"
          transparent={false}
          map={rubikMaterial}
        />
      </mesh>
    </>
  );
}
function Triangle() {
  return (
    <>
      <mesh position={[-5, 10, -10]} rotation={[Math.PI / 4, -4.7, 28]}>
        <circleBufferGeometry attach="geometry" args={[15, 3]} />
        <meshStandardMaterial attach="material" color={0xe0ba74} />
      </mesh>
    </>
  );
}

function Line({ start, end }) {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={0xeeeef1} />
    </line>
  );
}
function AnimationCanvas() {
  const triangleOutline = [
    {
      start: [0, 23, -15],
      finish: [0, 0, 0],
    },
    {
      start: [0, 23, -15],
      finish: [0, 0, -30],
    },
    {
      start: [0, 0, 0],
      finish: [0, 0, -30],
    },
  ];
  return (
    <Canvas colourManagement camera={{ position: [50, 0, 0], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 20, 10]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottm={-30}
        />
        <RubikCube />
        {triangleOutline.map((line, index) => {
          return <Line key={index} start={line.start} end={line.finish} />;
        })}
        <Triangle />
      </Suspense>
    </Canvas>
  );
}

export default function RubikAnimation() {
  return (
    <div className="RubikAnimation">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
