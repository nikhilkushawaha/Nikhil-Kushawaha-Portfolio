import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function CoolMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/cool_man.glb');
  const { actions } = useAnimations(animations, group);

  // State for controlling position and scale
  const [modelScale, setModelScale] = useState(2);
  const [modelPosition, setModelPosition] = useState([0, -5, 0]);

  useEffect(() => {
    if (actions) {
      // Play "walking" first and make the model bigger
      actions.walking?.reset().fadeIn(0.5).play();
      setModelScale(1.8); // Bigger size when walking
      setModelPosition([0, -7, -2]); // Lower position when walking

      setTimeout(() => {
        actions.walking?.fadeOut(3);
        actions.salute?.reset().fadeIn(0.25).play();
        setModelScale(4); // Normal size when saluting
        setModelPosition([0, -10, 0]); // Normal position

      }, 1000);

      setTimeout(() => {
        actions.salute?.fadeOut(0.5);
        actions.sit?.reset().fadeIn(0.5).play();
        setModelScale(5); // Smaller size when idle
        setModelPosition([0, -7, 0]); // Slightly lifted when idle

      }, 6000);
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} position={modelPosition} scale={modelScale} rotation={[0, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={2}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_178">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Wolf3D_Skin.003']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Wolf3D_Teeth.003']} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Wolf3D_Body.003']} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Wolf3D_Outfit_Bottom.003']} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Wolf3D_Outfit_Footwear.003']} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Wolf3D_Outfit_Top.003']} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Wolf3D_Hair.003']} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Wolf3D_Glasses.003']} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.Object_23.skeleton} />
                  <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.Object_25.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/cool_man.glb');
