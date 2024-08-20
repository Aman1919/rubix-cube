import Building from "./building";
import canvas_module from "./canvas_module";

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
                this.cameraBuilding = new Building(this.canvas.width / 2 - 200, this.canvas.height-400,"greenbuilding" , this.canvas_module)
        this.Movement = new Movement(this.cameraBuilding);
                
        }
        
        createBuilding() {
             this.BuildingList.push(new Building(this.canvas.width - 400, 300, 'purplebuilding1', this.canvas_module,300))
        }
        
        redraw() {
                this.canvas_module.DrawImg(background, 0, 0, this.canvas.width, this.canvas.height);
                this.BuildingList.forEach(b => b.drawBuilding(this.canvas_module));
                this.cameraBuilding.drawBuilding(this.canvas_module);
        }
        
        reset() {
                this.BuildingList = [];
                this.cameraBuilding.setPosition(this.canvas.width / 2 - 200, this.canvas.height - 300)
                this.cross();
                this.redraw();
        }          
        
        cross() {
        const cross = document.getElementById('cross');
                        const clickme = document.getElementById('clickme');
                        if (cross && clickme){
                                cross.style.display = "none";
                                clickme.style.display = "none";
                                
                }          
                this.redraw();
                this.Movement.pointer = { x: 0, y:0, width:0, height: 0,x1:0,y1:0 ,clicked:false,angle:0} ;
        }
        
        clickMe() {
        
        }
        
        
        MouseMove(e: React.MouseEvent<HTMLElement>, str: string) {
        
                const rect = this.canvas.getBoundingClientRect();
                const x = (e.clientX - rect.x);
                const y = (e.clientY - rect.y);
                if (str === 'arrow') {
                        this.Movement.moveClickedBuilding(x, y);
                        this.redraw();
                } else if (str === 'pointer'&&this.Movement.pointer.clicked) {
                        this.redraw();
                        this.Movement.moveClickedPointer(x, y, this.canvas_module, this.BuildingList[0]);
                }
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
                if(this.Movement.pointer.clicked)this.Movement.DrawPointer(this.canvas_module, 0, this.BuildingList[0]);
                console.log(this.Movement.pointer.angle);
                
                this.Movement.clickedObject = null;
                this.Movement.pointer.clicked = false; 
                
        }
        
        onclick(e:React.MouseEvent<HTMLElement>) {
                const rect = this.canvas.getBoundingClientRect();                
                const x = (e.clientX - rect.x);
                const y = (e.clientY - rect.y);
                console.log(x, y);
                this.Movement.onClick(x, y, this.canvas_module, this.BuildingList);                
        }
}