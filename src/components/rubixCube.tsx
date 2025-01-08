import * as THREE from 'three';
import Cube from './cubeLet';
import * as TWEEN from '@tweenjs/tween.js';

export default class RubiksCube{
    cubes:Cube[] = [];
    size: number = 3;
    positions =  [];
    rubiksCubeGroup = new THREE.Group();
    selectedCube:any;
    epsilon:number = 0.5;
    consoleDebug:boolean;
    n1:number;
    n2:number;
    n3:number
    rotating:boolean = false;
    constructor(n1:number=3,n2:number=3,n3:number=3){
      this.n1 = n1;
      this.n2 = n2;
      this.n3 = n3;
      this.initializeRubiksCube()
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
        const n = 1;
        if(this.rotating) return;
        if (event.key === 'w') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(-n, 0, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameX(cube, this.selectedCube)) {
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
            }
          });
        } else if (event.key === 'a') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, -n, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameY(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 's') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(n, 0, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameX(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'd') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, n, 0);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameY(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'q') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, 0, n);
          this.cubes.forEach((cube) => {
            if (this.cubeInSameZ(cube, this.selectedCube))
              this.rotateAroundWorldAxis(cube.cubeGroup, axis);
          });
        } else if (event.key === 'e') {
          this.displayKey(event.key);
          const axis = new THREE.Vector3(0, 0, -n);
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
        this.rotating = true;
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
        tween.onComplete(() => {
          this.rotating = false;
        });
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
      const n1 = this.n1;
      const n2 = this.n2;
      const n3 = this.n3;
      
      let c = 2 + this.epsilon * (n1 - 3);
      console.log(this.epsilon);
      
      for (let i = -n1 + c; i < n1 + (-n1 + c); i++) {
        c = 2 + this.epsilon * (n2 - 3);
      
        for (let j = -n2 + c; j < n2 + (-n2 + c); j++) {
          c = 2 + this.epsilon * (n3 - 3);
      
          for (let k = -n3 + c; k < n3 + (-n3 + c); k++) {
            this.cubes.push(new Cube(i, j, k));
          }
        }
      }
      

    
        this.cubes.forEach((cube) => {
          this.rubiksCubeGroup.add(cube.cubeGroup);
        });
    
        this.selectedCube = this.cubes[0];
      }
    }  
