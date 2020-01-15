import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'stl-viewer',
  template: `<div #rendererContainer></div>`,
  styleUrls: ['./stl-viewer.component.scss']
})
export class StlViewerComponent implements OnInit {

  @ViewChild('rendererContainer', { static: true }) rendererContainer: ElementRef;

  constructor(private domRenderer: Renderer2) { }

  cube: THREE.Mesh;
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  geometry: THREE.BoxGeometry;

  ngOnInit() {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, material);
    this.scene.add(this.cube);
    this.domRenderer.appendChild(this.rendererContainer.nativeElement, this.renderer.domElement);
    this.camera.position.z = 5;

    this.animate();

  }

  animate = () => {

    requestAnimationFrame(this.animate);

    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

}
