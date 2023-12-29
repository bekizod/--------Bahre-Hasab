import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import { DirectionalLight } from "three";
import Start from "./components/BahreHasab/Start";
import StarsCanvas from "./components/Stars";
import { NavLink, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <div className="h-screen">
      <Experience />
    </div> */}
      {/* <div className="h-[100vh] ">
        <Start />
      </div> */}
        
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/home" element={<Start />}/>
      </Routes>
    </>
  );
}

export default App;
