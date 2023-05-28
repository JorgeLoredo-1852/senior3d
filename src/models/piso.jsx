/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/piso.glb");
  return (
    <group {...props} dispose={null} scale={13}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        rotation={[0, 0, 0]}
        scale={[1.59, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[0, 0.6, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.59, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/piso.glb");

