/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
Title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth1(props) {
  const { nodes, materials } = useGLTF("./models/earth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.9}
      />
    </group>
  );
}

useGLTF.preload("./models/earth.glb");
