import {
  Html,
  OrbitControls,
  Preload,
  ScrollControls,
  SpotLight,
} from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
import { Earth1 } from "./Earth1";
import { Solar } from "./Solar";
import { DirectionalLight, PointLight } from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import useSound from "use-sound";
import buttonSound from "/src/start.wav";
import CanvasLoader from "./CanvasLoader";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Experience = () => {
  const [play1] = useSound(buttonSound, { volume: 0.5 });
  const handlClick = () => {
    play1();
  };
  const adjustPlanetForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-0.7, -0.5, 0.3];
    let rotation = [0, -9.5, 0];
    if (window.innerWidth < 640) {
      screenScale = [2.0, 2.0, 2.0];
    } else {
      screenScale = [3.3, 3.3, 3.3];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustPlanetForScreenSize();
  return (
    <>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <hemisphereLight
          skyColor="#06090A"
          groundColor="#000000"
          intensity={4}
        />
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={0} damping={0.25}>
          
          <Solar
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        
          <Overlay />
        </ScrollControls>

        
      </Canvas>
      <div className="mb-[-45%] mt-[-50%] sm:mt-[-20%] md:mt-[-30%] lg:mt-[-10%] xl:mt-[-15%]"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 4 }}
    className="absolute z-10">
    <NavLink to="/home" className="bg-white EtGbtn rounded-lg py-1 px-5 sm:py-2 sm:px-7 hover:bg-slate-600 hover:text-white border-gray-300 border" onClick={handlClick}>
      እንጀምር
    </NavLink>
  </motion.div>
</div>
    </>
  );
};
