import { Canvas } from "@react-three/fiber"
import { Environment, ScrollControls } from "@react-three/drei"
import "./style.css"
import MacContanier from "./MacContanier"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const App = () => {

  const notify = () => toast("This are demo buttons 🤡!");

  return (
    <div className="w-full h-full bg-black">
      <nav className="pt-6 bg-black md-[d-none] w-full h-20 justify-center items-center text-center">
        {["iPhone", "iPad", "Macbook", "Watch", "TV", "Music", "Support","products","Macbook", "Streams"].map((e)=>(
          <a key={e.length} href="#" className="text-white text-sm mx-4 font-[300]" onClick={notify}>{e}</a>
        ))}
      </nav>
      <div className="flex flex-col items-center">
        <h3 className="text-white text-center masked text-6xl tracking-tighter font-[600] glow">Macbook M3 Pro.</h3>
        <h2 className="text-white text-center text-xl glow font-[500]">Oh so pro!.</h2>
        <p className="text-white text-center w-2/6 opacity-85 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero laudantium libero dolorem harum illo at fuga!</p>
      </div>
      <Canvas camera={{fov:20,position:[0,-10,120]}} className="top-[-15%]">
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr"]} />
        <ScrollControls>
          <MacContanier />
        </ScrollControls>
      </Canvas>
      <ToastContainer />
    </div>
  )
}

export default App