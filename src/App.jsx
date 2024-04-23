import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

const App = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: "blue" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {   
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, camera);
    };

    const rotation = { x: 0, y: 0 };
    const targetRotation = { x: Math.PI * 2, y: Math.PI * 2 }; 

    const tween = new TWEEN.Tween(rotation)
  .to(targetRotation, 2000) 
  .onUpdate(() => {
    cube.rotation.x = rotation.x;
    cube.rotation.y = rotation.y;
  })
  .onComplete(() => alert('Animation completed'))
  .start();

    animate();  }, []);

  return null;
};

export default App;