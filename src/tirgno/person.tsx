import canvas_module from "./canvas_module";

import cameramanhand from "../assests/cameramanhand.png"

export default class Person{
 x: number; y: number;
        width: number; height: number;
  imgsrc: string;
  hand;
         constructor(x: number, y: number,imgsrc:string) {
                this.x = x;
                this.y = y;
                this.width = 40;
                this.height = 140;
           this.imgsrc = imgsrc
                this.hand = { x: this.x + 27, y: this.y - 5,width:this.width+4,height:this.height/3.5 }
                
        }
        
        drawPerson(canvas_module: canvas_module) {
          canvas_module.DrawImg(this.imgsrc, this.x, this.y, this.width, this.height);
          canvas_module.DrawImg(cameramanhand,this.hand.x,this.hand.y,this.hand.width,this.hand.height)
        }
}