/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/banorte.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={1} position={[0,-3,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1.geometry}
          material={materials["Material.001"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body10.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body11.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body14.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body15.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body18.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body19.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2.geometry}
          material={materials["Material.001"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body20.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body21.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body22.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body23.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body3.geometry}
          material={materials["Material.001"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body7.geometry}
          material={materials["Material.003"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body8.geometry}
          material={materials["Material.002"]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body9.geometry}
          material={materials["Material.002"]}
          scale={0.3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/banorte.glb");