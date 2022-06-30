import React from "react";
import Footer from "../Components/Footer";
import ClubHouse777 from "../Components/megaComponents/ClubHouse777";
import FrequentlyAskQ from "../Components/megaComponents/FrequentlyAskQ";
import MeetTeam from "../Components/megaComponents/MeetTeam";
import Passes777 from "../Components/megaComponents/Passes777";
import Roadmap from "../Components/megaComponents/Roadmap";
import SneakPeak from "../Components/megaComponents/SneakPeak";

const LandingPage = () => {
  return (
    <div>
      <ClubHouse777 />
      <Passes777 />
      <SneakPeak />
      <Roadmap />
      <MeetTeam />
      <FrequentlyAskQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
