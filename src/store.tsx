import { atom } from "recoil";

const BuildingAtom = atom({
        key: "BuildingAtom",
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

const CrossAtom = atom({
        key: "CrossAtom",
        default: false
})
const ClickMeAtom = atom({
        key: "ClickMeAtom",
        default:false
})

export {ArrowAtom,ResetAtom,CrossAtom,BuildingAtom,ClickMeAtom}