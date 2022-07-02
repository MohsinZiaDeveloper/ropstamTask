import React from "react";
import ImageViewer from "../subComponents/ImageViewer";

const MeetTeam = () => {
  return (
    <div
      id="meetTeam"
      className="flex justify-center   mt-[-3rem]   py-20 backdrop-blur-xl bg-cover text-white  h-auto overflow-hidden  bg-no-repeat  bg-[url('assets/Roadmap.png')]"
    >
      <div className="container flex flex-col">
        <div className="flex w-full pb-10 justify-center">
          <h3 className="text-3xl font-bold ">Meet Our Founding Team</h3>
        </div>
        <div className="w-full flex flex-col items-center lg:flex lg:flex-row mt-5 lg:mt-10 px-4 lg:px-[12rem]">
          <div className="w-full lg:w-1/4 px-20 lg:px-0">
            <ImageViewer src="Team1" className="" />
          </div>
          <div className="w-3/4  pt-10 lg:pt-0 grid px-10  lg:px-20 items-center flex-col">
            <div className="">
              <div className="flex ">
                <p className="text-sm leading-6 font-light opacity-70">
                  10+ years of experience in the hospitality/entertainment
                  industry The latest venture is currently in Ycombinator’s
                  Winter ‘22 Class BA in Finance, loves to stay fit, travel, &
                  live life to the fullest.
                </p>
              </div>
              <div className="flex mt-5 gap-3 justify-center lg:justify-start ">
                <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
                <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:flex lg:flex-row  mt-10 px-4 lg:px-[12rem]">
          <div className="w-3/4  grid px-10 lg:px-20 items-center flex-col order-1 lg:order-0">
            <div className="">
              <div className="flex ">
                <p className="text-sm leading-6 pr-0 mt-5 lg:mt-0 lg:pr-44 font-light  opacity-70">
                  Hospitality Tech Founder + Crypto/Web3 Investor Holder of
                  BAYC, MAYC, Meebits, & more Avid golfer
                </p>
              </div>
              <div className="flex mt-5 gap-3  justify-center lg:justify-start ">
                <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
                <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-full  px-20 lg:px-0 order-0 lg:order-1">
            <ImageViewer src="Team2" className="" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:flex lg:flex-row  mt-10 px-4 lg:px-[12rem]">
          <div className="w-full lg:w-1/4 px-20 lg:px-0">
            <ImageViewer src="Team3" className="" />
          </div>
          <div className="w-full lg:w-3/4   grid px-10 lg:px-20 items-center flex-col">
            <div className="">
              <div className="flex justify-center lg:justify-left ">
                <p className="text-sm leading-6 pr-0 lg:pr-44 mt-5 lg:mt-0 text-center lg:text-left font-light opacity-70">
                  https://www.artstation.com/vaxopipia
                  https://www.artstation.com/dazdud
                  https://www.artstation.com/bachibacho
                </p>
              </div>
              <div className="flex mt-5 gap-3 justify-center lg:justify-start ">
                <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
                <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
