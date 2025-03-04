import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Testimonials2 } from "./components/testimonials2";
import { Testimonials3 } from "./components/testimonials3";
import { Team1 } from "./components/Team1";
import { Team2 } from "./components/Team2";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Testimonials2 data={landingPageData.Testimonials2} />
      <Testimonials3 data={landingPageData.Testimonials3} />
      <Team2 data={landingPageData.Team} />   
      <Team1 data={landingPageData.Team2} />   
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
