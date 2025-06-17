// src/components/BeeModel.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

export default function BeeModel() {
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [bee, setBee] = useState(null);
  const [mixer, setMixer] = useState(null);
  const camera = useRef(new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000));
  const renderer = useRef(new THREE.WebGLRenderer({ alpha: true }));

  // Define the positions and rotations for each section
  const arrPositionModel = [
    { id: 'banner', position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
    { id: 'intro', position: { x: 1, y: -1, z: -5 }, rotation: { x: 0.5, y: -0.5, z: 0 } },
    { id: 'description', position: { x: -1, y: -1, z: -5 }, rotation: { x: 0, y: 0.5, z: 0 } },
    { id: 'contact', position: { x: 0.8, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
  ];

  // Initialize scene and load model
  useEffect(() => {
    const initScene = () => {
      const newScene = new THREE.Scene();
      const newCamera = camera.current;
      newCamera.position.z = 13;

      renderer.current.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.current.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
      newScene.add(ambientLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 1);
      topLight.position.set(500, 500, 500);
      newScene.add(topLight);

      // Load the 3D model
      const loader = new GLTFLoader();
      loader.load('/models/flying_robo.glb', (gltf) => {
        const model = gltf.scene;
        newScene.add(model);
        setBee(model);

        const modelMixer = new THREE.AnimationMixer(model);
        modelMixer.clipAction(gltf.animations[0]).play();
        setMixer(modelMixer);
      });

      setScene(newScene);
    };

    initScene();

    // Clean up on unmount
    return () => {
      renderer.current.dispose();
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.current.render(scene, camera.current);
      if (mixer) mixer.update(0.02);
    };

    if (scene) animate();
  }, [scene, mixer]);

  // Update model position on scroll
  const modelMove = () => {
    if (!bee) return;

    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) currentSection = section.id;
    });

    const activePosition = arrPositionModel.find((val) => val.id === currentSection);
    if (activePosition) {
      const { position, rotation } = activePosition;
      gsap.to(bee.position, { x: position.x, y: position.y, z: position.z, duration: 3, ease: 'power1.out' });
      gsap.to(bee.rotation, { x: rotation.x, y: rotation.y, z: rotation.z, duration: 3, ease: 'power1.out' });
    }
  };

  // Attach scroll and resize events
  useEffect(() => {
    const handleScroll = () => modelMove();
    const handleResize = () => {
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [bee]);

  return <div id="container3D" ref={containerRef} style={{ width: '100%', height: '100vh', position: 'fixed', inset: '0', zIndex: '100', pointerEvents: 'none' }} />;
}
