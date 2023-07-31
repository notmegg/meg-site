"use client";
import Link from "next/link";
import logo from "../public/stuff/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import { MdOutlineClose, MdOutlineEmail } from "react-icons/md";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-800">
      <div className="w-full h-full mx-auto py-1 flex items-center justify-between px-7">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className=""
          >
            <Image src={logo} className=" w-16 h-8"></Image>
          </motion.div>
        </Link>

        <div className="">
          <ul className="hidden mdl:inline-flex gap-7 text-sm font-light">
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
            <Link href="/stuff/resume_web.pdf" target="_blank" download>
              <motion.button
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className="px-4 py-2 rounded-md text-orange2 text-sm border border-orange2 hover:bg-orange3 hover:bg-opacity-10 duration-300 cursor-pointer"
              >
                RESUME
              </motion.button>
            </Link>
          </ul>
          {/* Hamburger icon */}
          <div
            onClick={handleNav}
            className="mdl:hidden text-2xl text-orange1 cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      {/* Hamburger menu */}
      <div
        className={
          nav
            ? "mdl:hidden fixed right-0 top-0 w-full h-screen bg-slate-700/60"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[80%] sm:w-[70%] md:w-[45%] h-screen bg-slate-800 p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 ease-in p-10 duration-500"
          }
        >
          <div className="flex justify-between w-full items-center">
            <Image src={logo} width={85} height={30} />
            <div
              onClick={handleNav}
              className=" text-orange2 text-2xl cursor-pointer"
            >
              <MdOutlineClose />
            </div>
          </div>
          <div className="w-full border-b border-orange2/40 my-10">
            <p className="w-full py-4 text-orange3/50 text-center">
              Fueled by Choccy Milk :D
            </p>
          </div>
          <div>
            <ul className="flex flex-col items-center text-orange-200 ">
              <Link href={"/"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-8 text-base hover:text-orange2"
                >
                  HOME
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-8 text-base hover:text-orange2"
                >
                  SKILLS
                </li>
              </Link>
              <Link href={"/#projects"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-8 pb-12 text-base hover:text-orange2"
                >
                  PROJECTS
                </li>
              </Link>
              <Link href="" target="_blank">
                <button className="px-4 py-2 rounded-md text-orange2 text-sm border border-orange2 hover:bg-orange3 hover:bg-opacity-10 duration-300 cursor-pointer">
                  RESUME
                </button>
              </Link>
            </ul>
            <div className="pt-20">
              <div className="flex text-xl justify-around items-center text-orange3">
                <Link
                  className="hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="mailto:meghanaps.contact@gmail.com"
                  target="_blank"
                >
                  <MdOutlineEmail />
                </Link>
                <Link
                  className=" hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="https://www.linkedin.com/in/meghapshetty/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </Link>
                <Link
                  className=" hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="https://github.com/notmegg"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
