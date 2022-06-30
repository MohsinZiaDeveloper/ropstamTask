import React from "react";
import ImageViewer from "../subComponents/ImageViewer";

const MeetTeam = () => {
  return (
    <div className="flex flex-col   mt-[-1rem]  py-20 backdrop-blur-xl bg-cover text-white  h-auto overflow-hidden  bg-no-repeat  bg-[url('assets/Roadmap.png')]">
      <div className="flex w-full pb-10 justify-center">
        <h3 className="text-3xl font-bold ">Meet Our Founding Team</h3>
      </div>
      <div className="w-full flex mt-10 px-[12rem]">
        <div className="w-1/4">
          <ImageViewer src="Team1" className="" />
        </div>
        <div className="w-3/4  grid pl-20 pr-20 items-center flex-col">
          <div className="">
            <div className="flex ">
              <p className="text-sm leading-6 font-medium">
                10+ years of experience in the hospitality/entertainment
                industry The latest venture is currently in Ycombinator’s Winter
                ‘22 Class BA in Finance, loves to stay fit, travel, & live life
                to the fullest.
              </p>
            </div>
            <div className="flex mt-5 gap-3 justify-start ">
              <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
              <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-10 px-[12rem]">
        <div className="w-3/4  grid pl-20 pr-20 items-center flex-col">
          <div className="">
            <div className="flex ">
              <p className="text-sm leading-6 pr-44 font-medium">
                Hospitality Tech Founder + Crypto/Web3 Investor Holder of BAYC,
                MAYC, Meebits, & more Avid golfer
              </p>
            </div>
            <div className="flex mt-5 gap-3 justify-start ">
              <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
              <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <ImageViewer src="Team2" className="" />
        </div>
      </div>

      <div className="w-full flex mt-10 px-[12rem]">
        <div className="w-1/4">
          <ImageViewer src="Team3" className="" />
        </div>
        <div className="w-3/4  grid pl-20 pr-20 items-center flex-col">
          <div className="">
            <div className="flex ">
              <p className="text-sm leading-6 pr-44 font-medium">
                https://www.artstation.com/vaxopipia
                https://www.artstation.com/dazdud
                https://www.artstation.com/bachibacho
              </p>
            </div>
            <div className="flex mt-5 gap-3 justify-start ">
              <ImageViewer src="insta" className="h-10 w-10 rounded-full" />
              <ImageViewer src="twitter" className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
