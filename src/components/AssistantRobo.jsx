import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";


const RoboModel = ({ positions }) => {
  const [mixer, setMixer] = useState(null);
  const roboRef = useRef();

  const gltf = useLoader(GLTFLoader, "/models/flying_robo.glb");

  useEffect(() => {
    if (gltf.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(gltf.scene);
      mixer.clipAction(gltf.animations[0]).play();
      setMixer(mixer);
    }
  }, [gltf]);

  useFrame((_, delta) => {
    if (mixer) mixer.update(delta);
  });

  const modelMove = (sectionId) => {
    const targetPos = positions.find((pos) => pos.id === sectionId);
    if (targetPos && roboRef.current) {
      gsap.to(roboRef.current.position, { ...targetPos.position, duration: 3, ease: "power1.out" });
      gsap.to(roboRef.current.rotation, { ...targetPos.rotation, duration: 3, ease: "power1.out" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentSectionId;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) currentSectionId = section.id;
      });
      modelMove(currentSectionId);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <primitive ref={roboRef} object={gltf.scene} />;
};

export default RoboModel;
