import React, { useState } from "react";
import "./LandingPage.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import { SliderData } from "../ImageSlider/SliderData";

// CUSTOM COMPONENTS

function LandingPage() {
  return (
    <>
      <div className="text-6xl font-bold text-center text-orange-400">
        <p>Reggie Miller Light</p>
      </div>
      <div className="text-xl font-bold text-center text-orange-400">
        <p className="hover:text-white">Love of all things The Razor</p>
      </div>
      <div className="grid h-screen place-items-center -mt-14">
        <ImageSlider slides={SliderData} />
      </div>
    </>
  );
}

export default LandingPage;
