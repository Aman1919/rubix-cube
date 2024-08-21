import Building from "./building";
import canvas_module from "./canvas_module";
export default class CameraAngleIndicator{
        width: number; height: number; x1: number; y1: number; clicked = false; angle = 0; 
        cameramanhand = { x: 0, y: 0, width: 0, height: 0 };
        building: Building;
        camera = { x: 0, y: 100, width: 300, height: 200 };
        constructor(cameramanhand: { x: number; y: number; width: number; height: number },angle:number,width:number,height:number,x1:number,y1:number,building:Building) { 
        
                this.width = width;
                this.height = height;
                this.x1 = x1;
                this.y1 = y1;
                this.angle = angle;
                this.building = building;
                this.cameramanhand = cameramanhand;
        }
        
        setAngle(angle: number) {
                this.angle = angle;
        }
        
        Capture(canvas_module: canvas_module) {
                const { x1, y1 } = this;
                const { x, y, } = this.cameramanhand;
                const x2 = this.building.x;
                const m=(y1-y)/(x1-x);
              const  y2=m*(x2-x1)+y1-5;
                
                if (this.building.y <= y2+50 && this.building.y + 80>y2) canvas_module.DrawObjectImage('captureperson', this.camera.x + 14, this.camera.y + 70, 161, 118);
                else if(this.building.y > y2+50)canvas_module.DrawObjectImage('sky', this.camera.x + 14, this.camera.y + 70, 161, 118,x,y);
                else  canvas_module.DrawObjectImage('capturebuilding', this.camera.x + 14, this.camera.y + 70, 161, 118);
        }
        
        
        
        
        
         DrawCamera(canvas_module: canvas_module) {
                 const x = (canvas_module.canvas.width / 2) - 200
                 this.camera.x = x;
                canvas_module.DrawObjectImage('camera', x, 100, 300, 200);
        }

        DrawPointer(canvas_module: canvas_module, angle: number) {
                const { x1, y1 } = this; 
                const {x,y,height} = this.cameramanhand;
                if (!angle) angle = this.angle;
                const h = height/3;
                canvas_module.DrawObjectImage('pointer', x1 -25, y1-23, 50, 50);
                canvas_module.DrawLine(x, y + h, x1, y1);//triangle hypotense line
                
                canvas_module.DrawLine(x, y + h,x1, y+h);//triangle base line
                
                canvas_module.DrawText(
                        x + 35,
                        y + h - 6,
                        Math.floor(angle * (180 / Math.PI)).toString()
                );
                canvas_module.DrawArc(
                        x,
                        y + h,
                        35,
                         -angle ,
                        0
                );
                
                this.DrawDistanceLine(canvas_module);
                this.DrawCamera(canvas_module);
                this.DisplayBtns();
                
        }
       
        DisplayBtns() {
        const cross = document.getElementById("cross");
                        const clickme = document.getElementById("clickme");
                        if (cross && clickme) {
                                cross.style.display = "block";
                                clickme.style.display = "block";
                        }
        }
        
        DrawDistanceLine(canvas_module: canvas_module) {
                const b = this.building;
                const a2 = this.cameramanhand;
                const perpendecular = Math.abs(Math.floor(b.y - a2.y));
                const base = Math.abs(Math.floor(b.x - a2.x));
                let x = b.x - 20, y = a2.y + 50, x1 = b.x - 20, y1 = b.y + 50;
                
                canvas_module.DrawLine(x,y,x1,y1, "#5708FF", 4, [10, 10]);//perpendecular
                canvas_module.DrawText(x - 70, perpendecular / 2 + y1, perpendecular.toString() +" cm", "#5708FF")
                
                x = a2.x + 30; y = a2.y + a2.height + 40; x1 = b.x - 10; y1 = a2.y  + a2.height + 40;
                canvas_module.DrawLine(x, y, x1, y1,"#FAFF08",4,[10,10]);//base
                canvas_module.DrawText(x+base/2-20,y1+20,base.toString() + " cm","#FAFF08")

        }

        
        
}