import Building from "./building";
import canvas_module from "./canvas_module";

import building2 from "../assests/building2.png"
import cameraman from "../assests/cameraman.png"
import greenbuilding from "../assests/greenbuilding.png";
import background from "../assests/background.png"
import Movement from "./movement";

export default class TrignoHeightAndDistance{
        canvas_module: canvas_module
        BuildingList: Building[] = []
        cameraBuilding: Building;  
        canvas: HTMLCanvasElement;
        Movement: Movement;
        constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
                this.canvas_module = new canvas_module(canvas, context);
                this.canvas = canvas;
                 this.canvas_module.DrawImg(background, 0, 0, this.canvas.width, this.canvas.height);
                this.cameraBuilding = new Building(this.canvas.width / 2 - 200, this.canvas.height - 300,greenbuilding , this.canvas_module,cameraman)
        this.Movement = new Movement(this.cameraBuilding);
                
        }
        
        createBuilding() {
             this.BuildingList.push(new Building(this.canvas.width - 400, 300, building2, this.canvas_module,null,300))
        }
        
        redraw() {
                this.canvas_module.DrawImg(background, 0, 0, this.canvas.width, this.canvas.height);
                this.BuildingList.forEach(b => b.drawBuilding(this.canvas_module));
                this.cameraBuilding.drawBuilding(this.canvas_module);
        }
        
        reset() {
                this.BuildingList = [];
                this.cameraBuilding.setPosition(this.canvas.width / 2 - 200, this.canvas.height - 300)
                this.redraw();
        }          
        
        MouseMove(e: React.MouseEvent<HTMLElement>,str:string) {
        
                const rect = this.canvas.getBoundingClientRect();                
                const x = (e.clientX - rect.x);
                const y = (e.clientY - rect.y);
                if (str === 'arrow') {
                        this.Movement.moveClickedBuilding(x, y);
                        this.redraw();
                } else if (str === 'pointer') this.Movement.moveClickedPointer();
        }
        
        
        MouseDown(e: React.MouseEvent<HTMLElement>,str:string) {
                
                if (!this.cameraBuilding) return;
                const rect = this.canvas.getBoundingClientRect();                
                const x = (e.clientX - rect.x);
                const y = (e.clientY - rect.y);
                if (str === 'arrow') this.Movement.selectClickedBuilding(x, y, this.cameraBuilding, this.BuildingList);
                else if (str === 'pointer') this.Movement.selectClickedPointer(x, y);
                                                
        }
        
        MouseUp() {
                this.Movement.clickedObject = null;
                this.Movement.pointer = null;
        }
        
        onclick(e:React.MouseEvent<HTMLElement>) {
                const rect = this.canvas.getBoundingClientRect();                
                const x = (e.clientX - rect.x);
                const y = (e.clientY - rect.y);
                console.log(x, y);
                this.Movement.onClick(x, y, this.canvas_module, this.BuildingList);                
        }
}