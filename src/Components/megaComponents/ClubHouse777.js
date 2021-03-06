import React from "react";
import Navbar from "../Navbar";
import MonkeyCard from "../subComponents/MonkeyCard";

const cardList = [
  {
    name: "",
    imageUrl: "YellowMonkey",
  },
  {
    name: "",
    imageUrl: "TigerShirt",
  },
  {
    name: "",
    imageUrl: "whiteTiger",
  },
  {
    name: "",
    imageUrl: "whiteTiger",
  },

  {
    name: "",
    imageUrl: "YellowTiger",
  },
  {
    name: "",
    imageUrl: "GreenTiger",
  },
  {
    name: "",
    imageUrl: "Tiger3",
  },
  {
    name: "",
    imageUrl: "TigerShirt",
  },
  {
    name: "",
    imageUrl: "YellowMonkey",
  },
];

const ClubHouse777 = () => {
  return (
    <div className="flex justify-center   h-screen lg:h-auto overflow-hidden  bg-cover bg-no-repeat  bg-[url('assets/headerBackground.png')]">
      <div className="container flex flex-col">
        <Navbar />
        <div className="flex flex-col lg:flex lg:flex-row text-white pb-20 mt-10 px-4 lg:px-28 ">
          <div className="w-full lg:w-1/2 p-0 lg:pr-[10rem]  flex flex-col items-center">
            <div className="flex flex-col  py-10 items-center lg:items-start">
              <h3 className="font-bold leading-10 text-center lg:text-left lg:leading-[3.7rem] text-3xl lg:text-[3rem]">
                777 Clubhouse Founders Collection
              </h3>
              <p className="text-2xl font-light mt-5 opacity-70">
                Elevate your lifestyle
              </p>
              <button className=" mt-10 w-fit text-white text-xs font-bold bg-gradient-to-r py-3 px-8 rounded-full from-pinkColor to-blueColor ">
                CONNECT WALLET
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex overflow-hidden ">
            <div className="w-full grid lg:grid-cols-3 gap-2 pb-10  px-10">
              {cardList.map((items, index) => {
                return <MonkeyCard data={items} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHouse777;
