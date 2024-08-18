import Building from "./building";
import canvas_module from "./canvas_module";
import pointer from "../assests/pointer.png";
import background from "../assests/background.png"

export default class Movement{
        clickedObject: Building | null = null;
        pointer: null | { x: number, y: number, width: number, height: number } = null;
        cameramanhand = { x: 0, y: 0, width: 0, height: 0 }
        
        constructor(cameraBuilding:Building) {
                this.cameramanhand = cameraBuilding.person ? cameraBuilding.person.hand : this.cameramanhand;
        
        }

        selectClickedBuilding(x:number,y:number,cameraBuilding:Building,BuildingList:Building[]) {
        if (this.collisionCheck(x, y, cameraBuilding)) {
                        console.log(Object.getOwnPropertyDescriptor(this, 'clickedObject'));
                        this.clickedObject = cameraBuilding;
                } else {
                        BuildingList.forEach(b => {
                                if (this.collisionCheck(x, y, b)) {
                                        this.clickedObject = b;
                                }
                        })
                }
                console.log(x,y,this.clickedObject);
        }
        
        selectClickedPointer(x: number, y: number) {
                
        }
        
        moveClickedBuilding(x:number,y:number) {
        if (!this.clickedObject) return;
                this.clickedObject.setPosition(x, y);
                
                console.log(this.clickedObject, x, y, "move");
        }
        
        moveClickedPointer() {
        
        }
        
        onClick(x:number,y:number,canvas_module:canvas_module,BuildingList:Building[]) {
        const a = this.cameramanhand;
                if (x < a.x + a.width && x>=a.x + a.width-10 && y>=a.y && y<a.y+10 && BuildingList.length) {
                        const p = a.height+20;
                        const h = 100;
                        const angle = Math.asin(p / h);
                        this.DrawPointer(canvas_module, angle);
                }

        }

        
        DrawPointer(canvas_module: canvas_module, angle: number) {
                const a = this.cameramanhand;
                this.pointer = { x: a.x + 75, y: a.y - 50, width:50,height:50}
                        canvas_module.DrawLine(a.x, a.y + a.height, a.x + 100, a.y - 30)
                        canvas_module.DrawImg(pointer, a.x + 75, a.y - 50, 50, 50)
                        canvas_module.DrawText(a.x + 35, a.y+a.height-6, (Math.floor(angle*(180/Math.PI))).toString());
                        canvas_module.DrawArc(a.x,a.y+a.height,35,2*Math.PI-angle ,  2*Math.PI)
                        canvas_module.DrawLine(a.x,a.y+a.height,a.x+110,a.y+a.height)
        }        
        
        collisionCheck(x: number, y: number, building: Building) {
                return (x >= building.x && x < building.x + building.width && y >= building.y && y<building.y + building.height);    
        }
}