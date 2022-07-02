import React, { useState } from "react";

const leftfreqQustion = [
  {
    question: "What is the best way to collect NFT?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "Why NFT Trading is so popular?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "How do you trade on Montono easily?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
];
const rightfreqQustion = [
  {
    question: "What is the best way to collect NFT?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "Why NFT Trading is so popular?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "How do you trade on Montono easily?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "What is the best way to collect NFT?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    question: "How do you trade on Montono easily?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
];

const FrequentlyAskQ = () => {
  const [Leftindex, setLeftindex] = useState(0);
  const [rightindex, setRightindex] = useState();
  return (
    <div
      id="mining"
      className="flex justify-center py-20 backdrop-blur-xl bg-cover text-white  h-auto overflow-hidden  bg-no-repeat  bg-[url('assets/frequentAskQuestionBg.png')]"
    >
      <div className="container flex flex-col">
        <div className="flex justify-center w-full ">
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row w-full  gap-4 justify-center px-4 lg:px-[10rem] mt-20">
          <div className="w-full lg:w-1/2 flex flex-col">
            {leftfreqQustion.map((items, index) => {
              return (
                <div className="flex mt-4 flex-col">
                  <div
                    onClick={() => setLeftindex(index)}
                    className="bg-blueColor py-2 px-4 rounded-3xl "
                  >
                    <h3 className="text-sm font-bold">{items.question}</h3>
                  </div>
                  {Leftindex === index && (
                    <div className="bg-trasnparent">
                      <p className="px-5 pr-7 pt-3 text-xs opacity-70 leading-5 font-light">
                        {items.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            {rightfreqQustion.map((items, index) => {
              return (
                <div className="flex mt-[0.85rem] flex-col">
                  <div
                    onClick={() => setRightindex(index)}
                    className="bg-blueColor py-2 px-4 rounded-3xl "
                  >
                    <h3 className="text-sm font-bold">{items.question}</h3>
                  </div>
                  {rightindex === index && (
                    <div className="bg-trasnparent">
                      <p className="px-5 pr-7 py-5 text-xs opacity-70 leading-5 font-light">
                        {items.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQ;
