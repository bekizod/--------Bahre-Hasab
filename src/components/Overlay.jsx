import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import "./Styles.css"
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Overlay = () => {
  return (
    <Scroll html>
      <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5 }}
      class="w-screen justify-center items-center text-center">
      {/* absolute solute z-10 inset-0 flex items-center justify-center  */}
        <h1 className="font-bold mt-[4%] text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-10xl text-shadow-lg text-white ">
          የኢትዮጵያ ቤተክርስቲያን አጿማት አቆጣጠር{" "}
          <span className="text-blue-400">ባህረ ሃሳብ </span>
        </h1>

      
      </motion.div>
    </Scroll>
  );
};

        // <div className="mt-[75%] sm:mt-[60%]  md:mt-[25%] lg:mt-[20%] xl:mt-[20%] 2xl:mt-[25%]">
        // <button to="/home" className="bg-white EtGbtn rounded-lg py-1 px-5 sm:py-2 sm:px-7  hover:bg-slate-600 hover:text-white shadow-white shadow-lg border-gray-300 border">
        //     እንጀምር
        //   </button>