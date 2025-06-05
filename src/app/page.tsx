'use client'

import { useEffect } from "react"
import ABanner from "./components/ABanner"
import AFooter from "./components/AFooter"
import AHeader from "./components/AHeader"
import AIntroduce from "./components/AIntroduce"
import AJoinWaitlist from "./components/AJoinWaitlist"
import "aos/dist/aos.css";
import Aos from "aos"

import AAboutEnReach from "./components/AAboutEnreach"
import AEarly from "./components/AEarly"
import AFAQ from "./components/AFAQ"
import ARoadMap from "./components/ARoadMap"
import ATopTips from "./components/ATopTips"

export default function Home() {

  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <div className=" h-screen">
    <ATopTips />

    <div className=" bg-[url(/banner-bg.png)] mo:bg-top bg-cover  z-[100000] lg:relative  w-full h-screen">
      <AHeader />
      <ABanner />
      <AAboutEnReach />
      <AIntroduce />
      <AEarly />
      <AJoinWaitlist />
      <AFAQ />
      <ARoadMap />
      <AFooter />
    </div>

  </div>
}