import Building from "./building";
import canvas_module from "./canvas_module";

export default class Movement {
        clickedObject: Building | null = null;
        pointer = { x: 0, y: 0, width: 0, height: 0, x1: 0, y1: 0, clicked: false, angle: 0 }; 
        cameramanhand = { x: 0, y: 0, width: 0, height: 0 };
        cameraBuilding: Building;
        constructor(cameraBuilding: Building) {
                this.cameramanhand = cameraBuilding.person
                        ? cameraBuilding.person.hand
                        : this.cameramanhand;
                this.cameraBuilding = cameraBuilding;
        }

        selectClickedBuilding(
                x: number,
                y: number,
                cameraBuilding: Building,
                BuildingList: Building[]
        ) {
                if (this.collisionCheck(x, y, cameraBuilding)) {
                        this.clickedObject = cameraBuilding;
                } else {
                        BuildingList.forEach((b) => {
                                if (this.collisionCheck(x, y, b)) {
                                        this.clickedObject = b;
                                }
                        });
                }
        }

        selectClickedPointer(x2: number, y2: number) {
                if (!this.pointer) return;
                const { x1, y1, width, height } = this.pointer;
                if (x2 >= x1-25 && y2 > y1-25 && x2 < x1 -25+ width && y2 <=y1-25 + height) {
                        this.pointer.clicked = true;
                
                }
        }

        moveClickedBuilding(x: number, y: number) {
                if (!this.clickedObject) return;
                this.clickedObject.setPosition(x, y);

        }

        moveClickedPointer(x2:number,y2:number,canvas_module:canvas_module,building:Building) {
                if (!this.pointer || (this.pointer && !this.pointer.clicked)) return;
                console.log(this.pointer,'1');
                this.pointer.y1 = y2;
                console.log(this.pointer,'1');
                const { x1, x, y, y1 } = this.pointer;
                const b = Math.abs(x1 - x), p = Math.abs(y1 - y);
                const angle = Math.atan(b / p);
                this.pointer.angle = angle;
                this.DrawPointer(canvas_module, angle, building);                
        }

        onClick(
                x: number,
                y: number,
                canvas_module: canvas_module,
                BuildingList: Building[]
        ) {
                const a = this.cameramanhand;
                if (
                        x < a.x + a.width &&
                        x >= a.x + a.width - 15 &&
                        y >= a.y &&
                        y < a.y + 15 &&
                        BuildingList.length
                ) {
                const b=  BuildingList[0]

                const p= Math.abs(Math.floor(b.y - a.y));
                const base = Math.abs(Math.floor(b.x - a.x));
                        const angle = Math.atan(p / base);
                        this.setPointer(angle);
                        this.DrawPointer(canvas_module, angle, b);
                        const cross = document.getElementById("cross");
                        const clickme = document.getElementById("clickme");
                        if (cross && clickme) {
                                cross.style.display = "block";
                                clickme.style.display = "block";
                        }
                }
        }
        
        DrawCamera(canvas_module: canvas_module) {
                const x= (canvas_module.canvas.width/2)-200
                canvas_module.DrawObjectImage('camera', x, 100, 300, 200);
        }

        DrawPointer(canvas_module: canvas_module, angle: number, b: Building) {
                const { x, y, x1, y1 } = this.pointer; 
                if (!angle) angle = this.pointer.angle;
                const height = this.cameramanhand.height/3;
                canvas_module.DrawLine(x, y + height, x1, y1);//triangle hypotense line
                
                canvas_module.DrawLine(x, y + height,x1, y+height);//triangle base line
                canvas_module.DrawObjectImage('pointer', x1 -25, y1-23, 50, 50);
                
                canvas_module.DrawText(
                        x + 35,
                        y + height - 6,
                        Math.floor(angle * (180 / Math.PI)).toString()
                );
                canvas_module.DrawArc(
                        x,
                        y + height,
                        35,
                        2 * Math.PI - angle,
                        2 * Math.PI
                );
                
                this.DrawDistanceLine(canvas_module, b);
                this.DrawCamera(canvas_module);
                
        }
        
        setPointer(angle:number) {
                const {x,y} = this.cameramanhand;
                const perpendecular = Math.tan(angle) * 110;
                this.pointer = { x: x  , y: y , width: 50, height: 50 ,y1:y - perpendecular+36,x1:x+100,clicked:false,angle};
        }
        
        DrawDistanceLine(canvas_module: canvas_module, b: Building) {
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

        collisionCheck(x: number, y: number, building: Building) {
                return (
                        x >= building.x &&
                        x < building.x + building.width &&
                        y >= building.y &&
                        y < building.y + building.height
                );
        }
}
