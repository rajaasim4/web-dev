import React, { useEffect, useRef, useState } from "react";
import { FaBars, IoCloseSharp } from "react-icons/all";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", StickyNavbar);
    return () => {
      window.removeEventListener("scroll", StickyNavbar);
    };
  }, []);
  const [sticky, setSticky] = useState("");
  const StickyNavbar = () => {
    if (window !== undefined) {
      let Height = window.scrollY;
      console.log(Height);
      Height > 300 ? setSticky("fixed") : setSticky("");
    }
  };
  const [show, setShow] = useState(false);
  const ShowNav = () => {
    setShow(!show);
  };
  const menu = useRef("Main_menu");
  useClickOutsideDetector(menu, () => {
    setShow(false);
  });
  return (
    <nav
      className={`  bg-[#F2F2F2] h-24 w-full flex justify-center duration-150 z-10 ${sticky}`}
    >
      <div className=" w-11/12  h-full flex justify-around items-center">
        <div className="w-40 md:w-3/4">
          <h1 className="text-lg font-semibold cursor-pointer">Web.Dev</h1>
        </div>
        <div
          className={` ${
            show ? "md:w-9/12" : " md:w-0"
          } md:fixed  md:top-0  md:left-0  md:h-full md:bg-[#000]   md:duration-500 md:ease-in lg:text-black md:text-[#fff]  md:overflow-hidden lg:static  w-8/12  lg:bg-[#f2f2f2] md:z-50 `}
          ref={menu}
        >
          <ul className="flex justify-evenly items-center md:flex-col md:h-full flex-row  ">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Testimonials</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <a href="/#">Sign In</a>
            </li>
            <button className="green_btn px-8 h-12 text-[#fff] border-none outline-none bg-[#49AD09] radius-3">
              Sign Up
            </button>
          </ul>
        </div>
        <div className=" md:block hidden ">
          {show ? (
            <IoCloseSharp
              className="cursor-pointer text-2xl"
              onClick={ShowNav}
            />
          ) : (
            <FaBars className="cursor-pointer text-2xl" onClick={ShowNav} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
