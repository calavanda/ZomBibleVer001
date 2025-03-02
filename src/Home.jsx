import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";


const Home = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Roadmap />
      <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Home;