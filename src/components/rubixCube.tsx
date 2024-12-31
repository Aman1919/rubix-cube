import * as THREE from 'three';
import Cube from './cubeLet';
import * as TWEEN from '@tweenjs/tween.js';

export default class RubiksCube{
    cube;
    cubes:Cube[] = [];
    size: number = 3;
    positions =  [];
    rubiksCubeGroup = new THREE.Group();
    selectedCube:any;
    epsilon:number;
    consoleDebug:boolean;
    constructor(){
        this.cube = new THREE.Group();
        this.initializeRubiksCube()
        this.epsilon = 0.5;
        this.consoleDebug = true;

    }

    getText(key:number) {
        return (
          {
            w: 'W: rotate up',
            s: 'S: rotate down',
            a: 'A: rotate left',
            d: 'D: rotate right',
            q: 'Q: rotate face left',
            e: 'E: rotate face right',
          }[key] || ''
        );
      }

      displayKey(key:number) {
        if (this.consoleDebug) {
          console.log(
            `%c ${this.getText(key)} `,
            'background: #fafafa; color: #0a0a0a; font-size: 20px'
          );
        }
      }

      cubeInSameY(c1:Cube, c2:Cube) {
        return (
          c1.cubeGroup.position.y > c2.cubeGroup.position.y - this.epsilon &&
          c1.cubeGroup.position.y < c2.cubeGroup.position.y + this.epsilon
        );
      }
    
      cubeInSameX(c1:Cube, c2:Cube) {
        return (
          c1.cubeGroup.position.x > c2.cubeGroup.position.x - this.epsilon &&
          c1.cubeGroup.position.x < c2.cubeGroup.position.x + this.epsilon
        );
      }
    
      cubeInSameZ(c1:Cube, c2:Cube) {
        return (
          c1.cubeGroup.position.z > c2.cubeGroup.position.z - this.epsilon &&
          c1.cubeGroup.position.z < c2.cubeGroup.position.z + this.epsilon
        );
      }

      onKeyDown(event:any) {
        if (event.key === 'w') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(-1, 0, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameX(cube, this.selectedCube)) {
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
            }
          });
        } else if (event.key === 'a') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, -1, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameY(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 's') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(1, 0, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameX(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'd') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, 1, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameY(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'q') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, 0, 1);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameZ(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'e') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, 0, -1);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameZ(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        }
      }
    



      rotateAroundWorldAxis(cubeGroup:THREE.Group, axis:any) {
        const start = { rotation: 0 };
        const prev = { rotation: 0 };
        const end = { rotation: Math.PI / 2 };
        console.log(this.selectedCube);
    
        const tween = new TWEEN.Tween(start)
          .to(end, 500)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(({ rotation }) => {
            // NOTE: Comment out each block to see different mistakes.
    
            // === 1 ===
            // cubeGroup.position.applyAxisAngle(axis, rotation - prev.rotation);
    
            // === 2 ===
            // cubeGroup.rotateOnWorldAxis(axis, rotation - prev.rotation);
    
            // === 3 ===
            // NOTE: DO NOT rotate the cube on it's own axis.
            // cubeGroup.position.applyAxisAngle(axis, rotation - prev.rotation);
            // cubeGroup.rotateOnAxis(axis, rotation - prev.rotation);
    
            // === 4 ===
            // NOTE: THIS IS CORRECT.
            // NOTE: Move the position of a cube.
            // NOTE: Rotate the cube on the world axis.
            cubeGroup.position.applyAxisAngle(axis, rotation - prev.rotation);
            cubeGroup.rotateOnWorldAxis(axis, rotation - prev.rotation);
    
            // NOTE: Keep track of the previous rotation for tweening.
            prev.rotation = rotation;
          });
    
        tween.start();

        const anim = (time: number) => {
            tween.update(time);
            requestAnimationFrame(anim);
          };
          requestAnimationFrame(anim);
      }


    highlightCubes(cubeToHighlight:any) {
        this.cubes.forEach((cube) => {
          if (cube.cubeMesh.uuid === cubeToHighlight.uuid) {
            this.selectedCube = cube;
            cube.uniforms.opacity.value = 0.5;
          } else {
            cube.uniforms.opacity.value = 1.0;
          }
        });
      }

    initializeRubiksCube() {
        this.cubes = [
          // Front 2x2.
          // new Cube(-1, 1, 1),
          // new Cube(1, 1, 1),
          // new Cube(-1, -1, 1),
          // new Cube(1, -1, 1),
    
          // Back 2x2.
          // new Cube(-1, 1, -1),
          // new Cube(1, 1, -1),
          // new Cube(-1, -1, -1),
          // new Cube(1, -1, -1),
    
          // Front face.
          new Cube(-1, 1, 1),
          new Cube(0, 1, 1),
          new Cube(1, 1, 1),
          new Cube(-1, 0, 1),
          new Cube(0, 0, 1),
          new Cube(1, 0, 1),
          new Cube(-1, -1, 1),
          new Cube(0, -1, 1),
          new Cube(1, -1, 1),
    
          // Middle face.
          new Cube(-1, 1, 0),
          new Cube(0, 1, 0),
          new Cube(1, 1, 0),
          new Cube(-1, 0, 0),
          new Cube(0, 0, 0),
          new Cube(1, 0, 0),
          new Cube(-1, -1, 0),
          new Cube(0, -1, 0),
          new Cube(1, -1, 0),
    
          // Back face.
          new Cube(-1, 1, -1),
          new Cube(0, 1, -1),
          new Cube(1, 1, -1),
          new Cube(-1, 0, -1),
          new Cube(0, 0, -1),
          new Cube(1, 0, -1),
          new Cube(-1, -1, -1),
          new Cube(0, -1, -1),
          new Cube(1, -1, -1),
        ];
    
        this.cubes.forEach((cube) => {
          this.rubiksCubeGroup.add(cube.cubeGroup);
        });
    
        this.selectedCube = this.cubes[0];
      }
    }  
