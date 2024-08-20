import Objects from "../assests/allobjects.png"


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
        
        DrawClipImg(imgsrc: string,  sx:number, sy:number, sWidth:number, sHeight:number,x: number, y: number, width: number, height: number) {
        const img = new Image();
                img.src = imgsrc;
               img.onload = () => {
                       this.context.drawImage(img,sx,sy,sWidth,sHeight, x, y, width, height);
                       console.log(img);
                }
                img.onerror = (e)=>console.log("error: ",e);       
        }
        
        DrawObjectImage(img:string,x: number, y: number, width: number, height: number) {
        switch (img) {
                case 'greenbuilding':
                        this.DrawClipImg(Objects, 0, 0, 710, 1000, x, y, width, height);
                        break;
                case 'purplebuilding1':
                        this.DrawClipImg(Objects, 715, 0, 400, 1000, x, y, width, height);
                        break;
                case 'pointer':
                        this.DrawClipImg(Objects, 2873, 0, 150, 150, x, y, width, height);
                        break;
                case "cameraman":
                        this.DrawClipImg(Objects, 2725, 0, 85, 300, x, y, width, height);
                        break;
                case 'cameramanhand':
                        this.DrawClipImg(Objects, 2798, 0, 78, 300, x, y, width, height);
                        break;
                case "captureperson":
                        break;
                case "capturebuilding":
                        break;
                case 'camera':
                        this.DrawClipImg(Objects, 2150, 0, 570, 370, x, y, width, height);
                        break;
                default:
                        break;
        }
        }
        
        DrawLine(x1: number, y1: number, x2: number, y2: number,color='black',size = 1,dasharg = [] as number[]) {
                this.context.beginPath();
                this.context.strokeStyle = color;
                this.context.lineWidth = size;
                this.context.setLineDash(dasharg);
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
        
        DrawText(x: number, y: number, s: string,color="black") {
                this.context.beginPath();
                this.context.font = "800 15px sans-serif"
                this.context.fillStyle = color;
                this.context.fillText(s, x, y);
                this.context.closePath();
        }
        

       sleep() {
    return new Promise(resolve => setTimeout(resolve, 100));
}
        
}