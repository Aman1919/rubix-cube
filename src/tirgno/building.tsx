import canvas_module from "./canvas_module";
import Person from "./person";

export default class Building {
        x: number; y: number;
        width: number; height: number;
        imgsrc: string;
        person: Person | null
        constructor(x: number, y: number, imgsrc: string, canvas_module: canvas_module,width = 400) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = 700;
                this.imgsrc = imgsrc
                this.person = (imgsrc==='greenbuilding')?new Person(this.x+this.width -130, this.y+100):null;
               this.drawBuilding(canvas_module)      
        }
        
        drawBuilding(canvas_module:canvas_module) {
                if (this.person) {
                        this.person.drawPerson(canvas_module)
                        // canvas_module.sleep();
                }
                canvas_module.DrawObjectImage(this.imgsrc, this.x, this.y, this.width, this.height);
        }
        setPosition(x:number,y:number) {
                this.x = x;
                this.y = y;
                if (!this.person) return;
                this.person.x = this.x + this.width - 130;
                this.person.y = this.y + 75;
                this.person.hand.x = this.person.x + 27;
                this.person.hand.y = this.person.y - 5;
        }
        
        
}