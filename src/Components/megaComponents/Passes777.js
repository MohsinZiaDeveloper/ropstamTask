import React from "react";
import ImageViewer from "../subComponents/ImageViewer";

const Passes777 = () => {
  return (
    <div
      id="passes777"
      className="flex justify-center lg:flex lg:flex-row py-4 lg:py-20 bg-cover   h-auto overflow-hidden  bg-no-repeat  bg-[url('assets/passes777bgImage.png')]"
    >
      <div className="container flex flex-col lg:flex lg:flex-row ">
        <div className="flex w-full lg:w-1/2 items-center px-4 lg:pr-10 lg:pl-0  justify-end ">
          <div className="relative h-[16rem] w-[26rem] ">
            <ImageViewer src="passes777" className="" />
            <ImageViewer
              src="playbutton"
              className="h-16 w-16 absolute left-[12rem] top-[6rem]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-white flex flex-col items-center  p-8  lg:pl-10 lg:pr-32 lg:items-start">
          <h3 className="text-3xl font-bold">The 777 Club</h3>
          <p className="text-xs font-light text-center lg:text-left mt-4 leading-6 opacity-70">
            We are the 777Club, a global collective of like-minded individuals
            with a DeFi lifestyle who appreciate access to the finest things in
            life. We have a lot planned. The wildest events, real-world benefits
            like none-other, a metaverse social club, connections to new
            business opportunities, and a ton more.
          </p>
          <p className="text-xs font-light mt-5 text-center lg:text-left leading-6 opacity-70">
            Our NFT collection is a launchpad to the best things in life and we
            want to give you the chance to share it with us. Getting in early on
            the 777Club will give you more benefits, more utility, and more
            opportunities to enhance your lifestyle.
          </p>
          <button className=" mt-10 w-fit text-white text-xs font-bold bg-gradient-to-r py-3 px-8 rounded-full from-pinkColor to-blueColor ">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Passes777;
