import './App.css';
import  { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import  RubiksCube from './components/rubixCube';
import SceneInit from './components/SceneInit';
import { GUI } from 'dat.gui';

function App() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cubeSize, setCubeSize] = useState({
    n1: 10,
    n2: 10,
    n3: 10,
  });
const [create,setCreate ]= useState(true);
  const handleInputChange = (key:string, value:any) => {
    // Allow only numeric values
        if (!isNaN(value)&&value>=0) {
      setCubeSize((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };


useEffect(()=>{
if(!canvasRef.current||!create)return
const canvas = canvasRef.current;

const InitScene = new SceneInit(canvas);
const rubiksCube = new RubiksCube(cubeSize.n1, cubeSize.n2, cubeSize.n3);
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
setCreate(false);



},[canvasRef,create]);




return (
  <div className='app'>
<div className="form-container">
      <input
        type="text"
        className="form-input"
        placeholder="N1"
        value={cubeSize.n1}
        onChange={(e) => handleInputChange("n1",  Number(e.target.value))}
      />
      <input
        type="text"
        className="form-input"
        placeholder="N2"
        value={cubeSize.n2}
        onChange={(e) => handleInputChange("n2",  Number(e.target.value))}
      />
      <input
        type="text"
        className="form-input"
        placeholder="N3"
        value={cubeSize.n3}
        onChange={(e) => handleInputChange("n3",  Number(e.target.value))}
      />
      <button
        className="form-button"
        onClick={() => {
          setCreate(true);
        }}
      >
        Create
      </button>
    </div>
<canvas ref={canvasRef}></canvas>
  </div>

);
}

export default App;