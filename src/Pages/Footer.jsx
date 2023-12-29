/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    //solute z-10 inset-0
    <footer className=" bg-opacity-50 backdrop-blur-lg py-4 w-full 2xl:h-[20vh] ">
    <div className="font-bold text-cyan-200 text-2xl text-center mb-4  border-b">Contact Me</div>
    {/* container w-full flex flex-row  justify-center items-center gap-5  md:gap-7  lg:gap-20 xl:gap-60 */}
      <div className=" w-full justify-center flex gap-5  md:gap-7  lg:gap-20 xl:gap-60">
        <a
          href="https://t.me/Bkzodcancer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 mx-2"
        >
          <FaTelegram size={24} />
        </a>
        <a
          href="https://www.instagram.com/beki303/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600 mx-2"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/bereket-wamanuel-73b9712a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600  mx-2"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:bekizodcancer@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/bekizod"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 mx-2"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <div
        className="text-center text-white mt-6
      "
      >
        <h3>&copy; 2023 Beki. All Rights are Reserved </h3>
      </div>
    </footer>
  );
};

export default Footer;
