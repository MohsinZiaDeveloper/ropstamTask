import React from "react";
import ImageViewer from "./subComponents/ImageViewer";

const Footer = () => {
  return (
    <div className="text-white w-full flex justify-center  bg-gradient-to-t px-44 pt-20 pb-10  from-gradientNavyBlue to-black ">
      <div className="container">
        <div className="flex flex-col w-full ">
          <div className="flex justify-center py-10">
            <ImageViewer src="WebsiteLogo" className="h-24 w-24" />
          </div>
          <div className="flex justify-center">
            <p className="text-xs font-light px-36 text-center opacity-70 leading-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetu
            </p>
          </div>
          <div className="flex justify-center mt-5 gap-3">
            <ImageViewer src="facebook" className="h-10 w-10 rounded-full" />
            <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
            <ImageViewer src="youtube" className="h-10 w-10 rounded-full" />
            <ImageViewer src="discord" className="h-10 w-10 rounded-full" />
          </div>
          <div className="border-[0.0rem] border-t mt-10 opacity-40"></div>
          <div className="flex justify-between mt-2">
            <div className="text-[0.7rem] font-light opacity-50 ">
              Copyright © 2022, 777 Club
            </div>
            <div>
              <ul className="flex gap-5 text-[0.7rem] opacity-50 font-light">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
