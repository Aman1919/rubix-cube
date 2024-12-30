import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import  RubiksCube from './components/rubixCube';


function App() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cube, setCube] = useState<RubiksCube | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);

useEffect(()=>{
if(!canvasRef.current)return
const canvas = canvasRef.current;


},[canvasRef]);

return (
<canvas ref={canvasRef}></canvas>

);
}

export default App;