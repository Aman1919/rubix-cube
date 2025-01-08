import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
export default class SceneInit {
    scene: THREE.Scene = new THREE.Scene();
    camera:any;
    renderer:any;
    stats:any;
    controls:any;
    fov = 75;
    uniforms:any;
    clock= new THREE.Clock();
    constructor(canvas:HTMLCanvasElement){
    
        this.InitScene(canvas);
    }


    InitScene(canvas:HTMLCanvasElement){
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
          );
          this.camera.position.z = 5;
          this.camera.position.y = 5;
          this.camera.position.x = 5;
      
        ;
          this.uniforms = {
            u_time: { type: 'f', value: 1.0 },
            colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
            colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
          };

        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
          });
          this.renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
          this.stats = new Stats();
          this.controls = new OrbitControls(this.camera, this.renderer.domElement);
          document.body.appendChild(this.stats.dom);
          let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          ambientLight.castShadow = true;
          this.scene.add(ambientLight);
      
          // spot light which is illuminating the chart directly
          let spotLight = new THREE.SpotLight(0xffffff, 1);
          spotLight.castShadow = true;
          spotLight.position.set(0, 64, 32);
          this.scene.add(spotLight);
          // if window resizes
          this.render()
          window.addEventListener('resize', () => this.onWindowResize(), false);
    }

   clearScene(){
    this.scene.clear();
        this.renderer.dispose();
   }


    onWindowResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

   animate(){
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
   }

    render(){
        this.uniforms.u_time.value += this.clock.getDelta();
        this.renderer.render( this.scene, this.camera );
    }
}