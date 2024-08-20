import Canvas from "./canvas"
import BtnList from "./components/btnlist"

import { RecoilRoot} from "recoil"
function App() {

  return (
    <RecoilRoot>
      
      <BtnList></BtnList>
      <Canvas></Canvas>

</RecoilRoot>  
  )
}

export default App
