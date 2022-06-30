import React from "react";
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

const SneakPeak = () => {
  return (
    <div className="flex justify-center py-0 lg:py-20 bg-cover   h-auto overflow-hidden  bg-no-repeat  bg-[url('assets/sneakPeakBgimage.png')]">
      <div className="container flex flex-col ">
        <div className="w-full text-white flex justify-center">
          <h3 className="text-3xl font-bold">Sneak Peak</h3>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-20 px-5 lg:px-32">
          <div className="w-full lg:w-1/2  p-0 m-0 lg:flex overflow-hidden ">
            <div className="w-full grid grid-cols-3 gap-2 pb-10 px-1">
              {cardList.map((items, index) => {
                return <MonkeyCard data={items} index={index} />;
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-0 m-0 lg:flex overflow-hidden ">
            <div className="w-full grid grid-cols-3 gap-2 pb-10  px-1">
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

export default SneakPeak;
