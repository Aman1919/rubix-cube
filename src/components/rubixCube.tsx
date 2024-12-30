import * as THREE from 'three';


export default class RubiksCube{
    cube;
    constructor(){
        this.cube = new THREE.Group();
        this.init();
    }

    init(){}
}