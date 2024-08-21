import Building from "./building";
import canvas_module from "./canvas_module";
import CameraAngleIndicator from "./pointer";

export default class Movement {
        clickedObject: Building | null = null;
        pointer:CameraAngleIndicator | null =  null; 
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

        moveClickedBuilding(x: number, y: number,building:Building[]) {
                if (!this.clickedObject) return;
                if(this.BuildingMoveRestriction(x,y,building))return
                if(this.clickedObject.imgsrc!=='greenbuilding')this.clickedObject.setPosition(this.clickedObject.x,y );
                else this.clickedObject.setPosition(x,this.clickedObject.y );

        }
        
        BuildingMoveRestriction(x: number, y: number, building: Building[]) {
                if (!this.clickedObject) return false
                const w = this.clickedObject.width;
                if (this.clickedObject.imgsrc==='greenbuilding' && (building.some(b=>b.x<=x+w )&&building.length>0)) return true;
                if ( this.clickedObject.imgsrc === 'purplebuilding1' && (y < 100)) return true;
                console.log('no');
                
                return false
        }
        
        
        moveClickedPointer(y2:number,canvas_module:canvas_module) {
                if (!this.pointer || (this.pointer && !this.pointer.clicked)) return;
                const { x } = this.cameramanhand;
                
                const b = this.pointer.building;
                const base = Math.abs(b.x - x);
                let p= Math.tan(this.pointer.angle) * base;
                
                if(y2>this.pointer.y1)p-=1
                else p += 1
                this.pointer.y1 = y2;
                console.log(p);
                const angle = Math.atan(p / base);
                this.pointer.setAngle(angle);
                this.pointer.DrawPointer(canvas_module, angle);                
        }

        onClick(
                x1: number,
                y1: number,
                canvas_module: canvas_module,
                BuildingList: Building[]
        ) {
                const { x, y, width } = this.cameramanhand;
                if (this.pointer) {
                        const { x, y, width, height } = this.pointer.camera;
                        if (x1< x + (3*width/4)+40 &&
                            x1 >= x + (3*width/4) &&
                            y1 >= y+height/2+10 &&
                            y1 < y+height/2+50) {
                                this.pointer.Capture(canvas_module);
                        }
                }
               if (
                        x1 < x + width &&
                        x1 >= x + width - 15 &&
                        y1 >= y &&
                        y1 < y + 15 &&
                        BuildingList.length
                ) {
                const b=  BuildingList[0]

                const p= Math.abs(b.y - y);
                const base = Math.abs(b.x - x);
                const angle = Math.atan(p / base);
                this.setPointer(angle,b);
                if(this.pointer)this.pointer.DrawPointer(canvas_module, angle);                
                        
                }
                
        }
        
        
        setPointer(angle:number,building:Building) {
                const {x,y} = this.cameramanhand;
                const perpendecular = Math.tan(angle) * 110;
                this.pointer = new CameraAngleIndicator(this.cameramanhand,angle,50,50, x + 100, y - perpendecular + 36,building);
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
