import * as THREE from 'three';
import { vertexShader,fragmentShader } from './shaders';
export default class Cube {
    cubeGroup;
    uniforms;
    cubeMesh;
    lineMesh;
    constructor(x:number,y:number,z:number){
        this.cubeGroup = new THREE.Group();
        this.uniforms = {
            opacity: {
              type: 'f',
              value: 1.0,
            },
          };
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const material = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: this.uniforms,
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader(),
          });
          this.cubeMesh = new THREE.Mesh(geometry, material);
          const lineEdges = new THREE.EdgesGeometry(this.cubeMesh.geometry);
          const lineMaterial = new THREE.LineBasicMaterial({ color: '#000000' });
          this.lineMesh = new THREE.LineSegments(lineEdges, lineMaterial);
      
          this.cubeGroup.add(this.cubeMesh);
          this.cubeGroup.add(this.lineMesh);
          this.cubeGroup.position.x = x;
          this.cubeGroup.position.y = y;
          this.cubeGroup.position.z = z;
    }
}



