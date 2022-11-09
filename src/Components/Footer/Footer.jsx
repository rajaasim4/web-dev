import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer>
      <div className="w-10/12 mx-auto flex justify-evenly  lg:w-11/12 flex-wrap">
        <div className="w-[300px] mb-3 flex flex-col">
          <h2 className="text-2xl font-semibold  mb-5">Web.Dev</h2>
          <p>You’ll find your next home loan valu you prefer.</p>
          <div className="flex mt-5 ">
            <a
              href=""
              className="h-[40px] w-[40px] flex items-center justify-center bg-gray-200 rounded-md mr-3 text-lg"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="h-[40px] w-[40px] flex items-center justify-center bg-gray-200 rounded-md mx-3 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="h-[40px] w-[40px] flex items-center justify-center bg-gray-200 rounded-md mx-3 text-lg"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[300px]">
          <h4 className="text-2xl font-semibold">Resources </h4>
          <a href="" className="my-4">
            Our Agents
          </a>
          <a href="" className="my-4">
            Members Stories
          </a>
          <a href="" className="my-4">
            Video
          </a>
          <a href="" className="my-4">
            Free Trial
          </a>
        </div>
        <div className="flex flex-col w-[300px]">
          <h4 className="text-2xl font-semibold">Company </h4>
          <a href="" className="my-4">
            Partner Ships
          </a>
          <a href="" className="my-4">
            Terms Of Use
          </a>
          <a href="" className="my-4">
            Privacy
          </a>
          <a href="" className="my-4">
            Sitemap
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold">Get In Touch </h4>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="outline-0 border border-gray-400 bg-gray-100 text-black py-4 w-[300px] mt-4 px-3"
          />
          <button className=" border border-gray-500 px-9 rounded-sm py-3 mt-6 ">
            Subsribe
          </button>
        </div>
      </div>
      <p className="text-center mt-5">
        &copy; Copyrights {date}.All rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;
