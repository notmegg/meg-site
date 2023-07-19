"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-800">
      <div className="w-full h-full mx-auto py-1 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="ml-10 text-lg text-orange-500">LOGO</h1>
          </motion.div>
        </Link>
        
        <div className="hidden mdl:inline-flex items-center gap-7 mdl:mr-10">
          <ul className="flex gap-7 text-sm font-light">
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                HOME
              </motion.li>
            </Link>
            <Link
              href="/#skills"
              scroll={true}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                SKILLS
              </motion.li>
            </Link>
            <Link
              href="/#projects"
              scroll={true}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                PROJECTS
              </motion.li>
            </Link>
          </ul>
          <a href="" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="px-4 py-2 rounded-md text-orange2 text-sm border border-orange2 hover:bg-orange3 hover:bg-opacity-10 duration-300 cursor-pointer"
            >
              RESUME
            </motion.button>
          </a>
        </div>
        {/* Hamburger icon */}
        <motion.div
          onClick={handleNav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-orange1 cursor-pointer overflow-hidden group mr-7"
        >
          <span className="w-full h-[2px] bg-orange1 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orange1 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orange1 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
