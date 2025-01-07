import './App.css';
import  { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import  RubiksCube from './components/rubixCube';
import SceneInit from './components/SceneInit';
import { GUI } from 'dat.gui';

function App() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cube, setCube] = useState<RubiksCube | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);

useEffect(()=>{
if(!canvasRef.current)return
const canvas = canvasRef.current;
const InitScene = new SceneInit(canvas);
const rubiksCube = new RubiksCube();
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

InitScene.scene.add(rubiksCube.rubiksCubeGroup);
InitScene.animate();

function onMouseDown(event:any) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, InitScene.camera);
  const objects = raycaster.intersectObjects(rubiksCube.rubiksCubeGroup.children);
  const cubeObjects = objects.filter((c) => {
    return c.object.type === 'Mesh';
  });
  if (cubeObjects.length > 0) {
    rubiksCube.highlightCubes(cubeObjects[0].object);
  }
}

const onKeyDown = (event:any) => {
  if (event.repeat) {
    return;
  }
  rubiksCube.onKeyDown(event);
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('mousedown', onMouseDown);


const gui = new GUI();
const folder = gui.addFolder("Rubik's Cube");
folder.add(rubiksCube, 'epsilon', 0.5, 3.5, 0.5);
folder.add(rubiksCube, 'consoleDebug')
folder.open();


},[canvasRef]);

return (
<canvas ref={canvasRef}></canvas>

);
}

export default App;