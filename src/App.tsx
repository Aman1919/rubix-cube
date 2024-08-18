import Canvas from "./canvas"
import BtnList from "./components/btnlist"

import { RecoilRoot } from "recoil"
function App() {
  
  return (
    <RecoilRoot>
      
      <BtnList></BtnList>
      <Canvas></Canvas>
      <button id="cross">X</button>
      <button id="clickme">Click Me</button>
      
</RecoilRoot>  
  )
}

export default App
