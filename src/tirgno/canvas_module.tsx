export default class canvas_module{
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D
        constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
                this.canvas = canvas;
                this.context = context;
        }
        
        Clear() {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        
        clear(x:number,y:number,w:number,h:number) {
                this.context.clearRect(x, y,w,h);
        }
        
       DrawImg(imgsrc: string, x: number, y: number, width: number, height: number) {
                const img = new Image();
                img.src = imgsrc;
               img.onload = () => {
                       this.context.drawImage(img, x, y, width, height);
                       console.log(img);
                }
                
                img.onerror = (e)=>console.log("error: ",e);
                
        }
        
        DrawLine(x1: number, y1: number, x2: number, y2: number) {
                this.context.beginPath();
                this.context.moveTo(x1, y1);
                this.context.lineTo(x2, y2);
                this.context.stroke();
                this.context.closePath();
        }
 
        DrawArc(x:number,y:number,r:number,angle:number,end:number) {
                this.context.beginPath();
                this.context.arc(x, y, r, angle, end)
                this.context.stroke();
                this.context.closePath();
        }
        
        DrawText(x: number, y: number, s: string) {
                this.context.beginPath();
                this.context.font = "15px sans-serif"
                this.context.fillText(s, x, y);
                this.context.closePath();
        }

       sleep() {
    return new Promise(resolve => setTimeout(resolve, 100));
}
        
}