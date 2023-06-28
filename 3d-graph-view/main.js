import * as THREE from 'three';
import { LogseqPlugin } from 'logseq-plugin-api';

class ThreeDGraphViewPlugin extends LogseqPlugin {

  constructor() {
    super();
  }

  render() {
    // Create a new scene.
    const scene = new THREE.Scene();

    // Create a camera.
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

    // Create a renderer.
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a geometry.
    const geometry = new THREE.BoxGeometry(100, 100, 100);

    // Create a material.
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    // Create a mesh.
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Update the scene.
    this.onUpdate(scene);

    // Render the scene.
    renderer.render(scene, camera);
  }
}

export default ThreeDGraphViewPlugin;
