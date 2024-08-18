import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil";
import { ArrowAtom, BuildingAtom, ResetAtom } from "./store";
import TrignoHeightAndDistance from "./tirgno";
export default function Canvas(){
        const canvasRef = useRef<HTMLCanvasElement | null>(null);
        const [buildingBtn,setbuildingBtn] = useRecoilState(BuildingAtom);
        const [ArrowBtn, setArrowBtn] = useRecoilState(ArrowAtom);
        const [reset, setReset] = useRecoilState(ResetAtom);
        const [game, setGame] = useState<TrignoHeightAndDistance | null>(null);
        
        
        useEffect(() => {
                const canvas = canvasRef.current;
                if (!canvas||game) return;
                const context = canvas.getContext('2d');
                if (!context) return;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const g = new TrignoHeightAndDistance(canvas, context);
                setGame(g);  
        },[canvasRef])
        
        useEffect(()=>{
                if (!game) return;
                if (buildingBtn) {
                        game.createBuilding();
                        setbuildingBtn(false);
                }
                if (reset) {
                        game.reset();
                        setReset(false);
                }
                
        }, [buildingBtn, game, reset, setReset, setbuildingBtn])
        
        
        
        return <canvas ref={canvasRef} onClick={(e) => (game?.onclick(e))} onMouseDown={(e) => (game && ArrowBtn) ? game.MouseDown(e, 'arrow') : game?.MouseDown(e,'pointer')}
                onMouseMove={(e) => (game && ArrowBtn) ? game.MouseMove(e,"arrow") : game?.MouseMove(e,'pointer')}
                onMouseUp={() => {
                if (game) {
                        game.MouseUp();
                        setArrowBtn(false);
                }
        }}></canvas>
}