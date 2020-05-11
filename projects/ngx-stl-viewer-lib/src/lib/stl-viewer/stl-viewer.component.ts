import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as THREE from 'three';
import PerspectiveCamera = THREE.PerspectiveCamera;
import Scene = THREE.Scene;
import WebGLRenderer = THREE.WebGLRenderer;
import { Material } from 'three';

const OrbitControls = require('three-orbit-controls')(THREE);
const STLLoader = require('three-stl-loader')(THREE);
const loader = new STLLoader();

@Component({
  selector: 'stl-viewer',
  templateUrl: './stl-viewer.component.html'
})
export class StlViewerComponent implements OnInit {

  @ViewChild('stlViewerCanvas', { static: true }) myCanvas: ElementRef;

  private scene: Scene = new THREE.Scene();
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  @Input()
  url: string;

  @Input()
  width = (): number => this.myCanvas.nativeElement.clientWidth;

  @Input()
  height = (): number => this.myCanvas.nativeElement.clientHeight;

  controls: any;
  renderProccess = true;

  constructor() { }

  ngOnInit() { }

  init3D(): void {

    this.scene.add(new THREE.AmbientLight(0x999999));
    this.camera = new THREE.PerspectiveCamera();
    this.camera.up.set(0, 0, 1);
    this.camera.position.set(0, -9, 9);
    this.camera.add(new THREE.PointLight(0xffffff, 0.8));
    this.camera.updateProjectionMatrix();

    this.scene.add(this.camera);

    // init grid
    const grid = new THREE.GridHelper(50, 50, 0xffffff, 0x555555);
    grid.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * (Math.PI / 180));
    this.scene.add(grid);

    // renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.myCanvas.nativeElement, antialias: true });
    this.renderer.setClearColor(0x999999);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width(), this.height());

    // scene
    this.scene.background = new THREE.Color(0xFFFFFF);


    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', () => this.renderScene());
    this.controls.target.set(0, 1.2, 2);
    this.controls.update();

    const material = new THREE.MeshPhysicalMaterial({ color: 0x00B57D });

    this.loadModel(material);
  }

  loadModel(matherial: Material) {
    this.renderProccess = true;
    loader.load(this.url, geometry => {
      const mesh = new THREE.Mesh(geometry, matherial);

      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, 0, 0);
      mesh.scale.set(.099, .099, .099);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      this.scene.add(mesh);
      // request animation
      this.renderScene();
      this.renderProccess = false;

      this.camera.lookAt(mesh.geometry.boundingSphere.center);
      this.renderScene();
    });
  }

	/**
 * render the scene and request the window animation frame
 */
  renderScene() {
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }


}
