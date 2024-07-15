import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./scene.gltf");
  const groupRef = useRef();

  // Rotate the model around the x-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the speed of rotation by changing the increment value
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group
        position={[-5.177, -13.679, 0]}
        rotation={[Math.PI / 2, -0.462, Math.PI]}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            geometry={nodes.meshNode_Material_u1_v1_0.geometry}
            material={materials.Material_u1_v1}
          />
          <mesh
            geometry={nodes.meshNode_Material_u2_v1_0.geometry}
            material={materials.Material_u2_v1}
          />
          <mesh
            geometry={nodes.meshNode_Material_u1_v2_0.geometry}
            material={materials.Material_u1_v2}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./scene.gltf");
