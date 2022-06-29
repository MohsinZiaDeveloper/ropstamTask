import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImageViewer from "./subComponents/ImageViewer";

const navLinks = [
  {
    Link: "HOME",
    To: "/#home",
  },
  {
    Link: "ABOUT US",
    To: "/#services",
  },
  {
    Link: "ROAD MAP",
    To: "/#about",
  },
  {
    Link: "TEAM",
    To: "/#resume",
  },
  {
    Link: "WALLET COLLECT",
    To: "/#potfolio",
  },
  {
    Link: "MINTING",
    To: "/#contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [screenDimension, setScreenDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScreenDimension({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" h-[5rem] mt-2 lg:mt-10">
      <div className=" w-full h-[4.5rem] px-20  bg-transparent z-[50] ">
        <div className="md:flex items-center justify-between relative  md:px-10 h-full px-7">
          <div className="font-bold text-2xl cursor-pointer  flex items-center ">
            <ImageViewer
              src="WebsiteLogo"
              onClick={() =>
                screenDimension.width < 1280 ? setOpen(!open) : ""
              }
              className="h-[5rem] w-[5rem]  "
            />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon
              className="text-white"
              name={open ? "close" : "menu"}
            ></ion-icon>
          </div>

          <div
            className={`md:flex md:items-center h-[100vh] rounded-l-sm lg:rounded-none lg:h-auto bg-pinkColor bg-opacity-80   lg:bg-transparent md:pb-0 pb-12 absolute md:static gap-10 md:z-auto  w-full  md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
              open
                ? "right-[-25vw] top-[4.5rem] lg:top-0 "
                : "right-[-175vw] top-[4.5rem] lg:top-0"
            }`}
          >
            <ul className="md:flex md:items-center lg:gap-5 text-md lg:text-xs font-light space-y-6 lg:space-y-0 ">
              {navLinks.map((value) => {
                return (
                  <div>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent rounded-full  group">
                      <span className="w-0 h-0 rounded-full bg-pinkColor absolute top-0 left-0 ease-out duration-500 transition-all  group-hover:w-full group-hover:h-full -z-1"></span>

                      <Link
                        smooth
                        className="w-full py-2 px-4 lg:m-0  focus:bg-blueColor focus:text-white  text-white lg:text-white font-light transition-colors duration-300 ease-in-out group-hover:text-white z-10"
                        to={value.To}
                        onClick={() => setOpen(false)}
                      >
                        {value.Link}
                      </Link>
                    </button>
                  </div>
                );
              })}
            </ul>
            <div className="w-auto">
              <button className=" w-auto text-white text-xs font-bold bg-gradient-to-r py-3 px-8 rounded-full from-pinkColor to-blueColor ">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
