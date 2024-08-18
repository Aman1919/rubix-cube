import { atom } from "recoil";

const BuildingAtom = atom({
        key: "BuildingAtom",
        default:false
})


const ZoomInAtom = atom({
        key: "ZoomInAtom",
        default:false
})

const ZoomOutAtom = atom({
        key: "ZoomOutAtom",
        default:false
})


const ResetAtom = atom({
        key: "ResetAtom",
        default:false
})


const ArrowAtom = atom({
        key: "ArrowAtom",
        default:false
})



export {ArrowAtom,ResetAtom,ZoomInAtom,ZoomOutAtom,BuildingAtom}