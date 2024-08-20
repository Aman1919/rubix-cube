import canvas_module from "./canvas_module";


export default class Person{
 x: number; y: number;
        width: number; height: number;
  imgsrc: string;
  hand;
         constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.width = 30;
                this.height = 110;
           this.imgsrc = 'cameraman'
           this.hand = { x: this.x+25 , y: this.y+5,width:this.width,height:this.height -10}
                
        }
        
       drawPerson(canvas_module: canvas_module) {
              canvas_module.DrawObjectImage('cameramanhand', this.hand.x, this.hand.y, this.hand.width, this.hand.height);
              canvas_module.DrawObjectImage(this.imgsrc, this.x, this.y, this.width, this.height);
        }
}