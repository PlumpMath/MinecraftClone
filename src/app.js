//import colors from './colors.js';
import { World, Block } from './world.js';
import THREE from 'three';

let scene;
let camera;
let cube;
let renderer;

document.addEventListener("DOMContentLoaded", () => {
  init();
  render();
});

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(1,1,1);
  let material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);

  let light = new THREE.PointLight(0xffffff);
  light.position.z = 5;
  light.position.y = 5;

  scene.add(light);
  scene.add(cube);

  camera.position.z = 5;
  camera.position.y = 5;
  camera.lookAt(new THREE.Vector3(0,0,0));
}

function render() {
  requestAnimationFrame(render);
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
}
