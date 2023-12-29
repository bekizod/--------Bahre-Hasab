/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 solar.glb 
Author: Alberto Benítez (https://sketchfab.com/albertobenitezbrand)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/solar-system-custom-c4d55b801842497c9900c7dbcea1727c
Title: Solar System Custom
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Solar(props) {
  const { nodes, materials } = useGLTF("/models/solar.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.031}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[2.596, 11.899, 44.307]}
            rotation={[-1.674, 0.096, 0]}
            scale={0.148}
          >
            <mesh
              geometry={nodes.Circle004_neptune_rings_0.geometry}
              material={materials.neptune_rings}
              position={[-0.315, 0.007, 0]}
              rotation={[1.42, 0.639, 0.09]}
              scale={0.548}
            />
            <mesh
              geometry={nodes.Sphere011_pluto_0.geometry}
              material={materials.pluto_0}
              position={[-0.001, -0.001, 0.203]}
              rotation={[1.42, 0.639, 0.09]}
              scale={0.343}
              
            />
          </group>
          <group
            position={[-5.726, 11.542, 32.014]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              position={[0.106, 0.075, 0.003]}
              rotation={[-0.24, -0.235, -0.019]}
              scale={0.148}
            >
              <mesh
                geometry={nodes.Sphere005_saturno_0.geometry}
                material={materials.saturno}
                position={[-0.107, -0.024, -0.002]}
                rotation={[0.151, -0.098, 0.015]}
                scale={0.299}
              />
            </group>
            <mesh
              geometry={nodes.Tube001__0.geometry}
              material={materials.Circle005__0}
              position={[-0.008, -0.008, -0.061]}
              rotation={[-0.175, 0.175, 0]}
            />
          </group>
          <group
            position={[-0.481, 11.092, 11.799]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mercurio_mercurio_0.geometry}
              material={materials.mercurio}
              position={[0, 0, -0.001]}
              rotation={[-0.07, 0, 0]}
              scale={0.036}
            />
          </group>
          <group
            position={[-5.72, 10.812, 12.118]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Sphere006_venus_0.geometry}
              material={materials.venus}
              rotation={[0.036, 0, 0]}
              scale={0.046}
            />
          </group>
          <mesh
            geometry={nodes.Sphere001_tierra_0.geometry}
            material={materials.tierra}
            position={[1.714, 10.903, 16.004]}
            rotation={[-1.279, 0.235, -1.326]}
            scale={0.051}
          />
          <mesh
            geometry={nodes.Sphere002_luna_0.geometry}
            material={materials.luna}
            position={[0.112, 12.251, 16.301]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.014}
          />
          <mesh
            geometry={nodes["Sphere003_14_-_Default_0"].geometry}
            material={materials["14_-_Default"]}
            position={[0.68, 11.821, 20.94]}
            rotation={[-1.648, 0, 0]}
            scale={0.046}
          />
          <mesh
            geometry={nodes.Sphere009_uranus_0.geometry}
            material={materials.uranus}
            position={[5.275, 12.984, 37.476]}
            rotation={[-1.643, -0.08, -0.006]}
            scale={0.051}
          />
          <mesh
            geometry={nodes.Sphere010_pluto_0.geometry}
            material={materials.pluto}
            position={[6.969, 14.273, 46.569]}
            rotation={[-1.702, -0.096, -0.013]}
            scale={0.026}
          />
          <mesh
            geometry={nodes.Sphere012_jupiter_0.geometry}
            material={materials.material_0}
            position={[4.571, 12.152, 25.818]}
            rotation={[-1.733, 0.078, 0.387]}
            scale={0.068}
          />
          <mesh
            geometry={nodes.Circle005__0.geometry}
            material={materials.Circle005__0}
            position={[-0.581, 10.576, 2.784]}
            rotation={[-1.641, 0, 0]}
            scale={[0.218, 0.277, 0.225]}
          />
          <mesh
            geometry={nodes.Circle006__0.geometry}
            material={materials.Circle005__0}
            position={[-0.779, 11.059, 2.778]}
            rotation={[-1.535, 0, 0]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle007__0.geometry}
            material={materials.Circle005__0}
            position={[-0.779, 10.893, 2.526]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle008__0.geometry}
            material={materials.Circle005__0}
            position={[-0.977, 10.177, 2.562]}
            rotation={[-1.648, 0, 0]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle009__0.geometry}
            material={materials.Circle005__0}
            position={[-0.978, 9.776, 2.359]}
            rotation={[-1.684, 0.077, 0.009]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle010__0.geometry}
            material={materials.Circle005__0}
            position={[-0.826, 9.218, 2.368]}
            rotation={[-1.659, -0.08, -0.007]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle011__0.geometry}
            material={materials.Circle005__0}
            position={[-0.941, 9.369, 2.217]}
            rotation={[-1.643, -0.08, -0.006]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle012__0.geometry}
            material={materials.Circle005__0}
            position={[-1.076, 7.896, 2.306]}
            rotation={[-1.674, 0.096, 0]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Circle013__0.geometry}
            material={materials.Circle005__0}
            position={[-0.734, 7.612, 2.52]}
            rotation={[-1.702, -0.096, -0.013]}
            scale={[0.189, 0.24, 0.195]}
          />
          <mesh
            geometry={nodes.Sphere008_neptune_rings_0.geometry}
            material={materials.neptune_rings}
            position={[-0.539, 11.03, 0.527]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
            scale={0.204}
          />
          <mesh
            geometry={nodes.Circle014__0.geometry}
            material={materials.Circle005__0}
            position={[-0.779, 10.893, 34.094]}
            rotation={[-1.501, -0.429, -0.081]}
            scale={[0.349, 0.746, 0.195]}
          />
          <mesh
            geometry={nodes.asteroides__0.geometry}
            material={materials.Circle005__0}
            position={[-17.149, 12.114, 8.764]}
            rotation={[-1.674, 1.134, -1.727]}
            scale={[-1, 1, 1]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/solar.glb");