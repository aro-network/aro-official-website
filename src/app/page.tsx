'use client'

import { useEffect } from "react"
import ABanner from "./components/ABanner"
import AFooter from "./components/AFooter"
import AHeader from "./components/AHeader"
import AIntroduce from "./components/AIntroduce"
import AJoinWaitlist from "./components/AJoinWaitlist"
import "aos/dist/aos.css";
import Aos from "aos"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className=" bg-[url(/banner-bg.svg)] mo:bg-top bg-cover  z-[100000] relative  w-full h-screen">
      <AHeader />
      <ABanner />
      <AIntroduce />
      <AJoinWaitlist />
      <AFooter />
    </div>

  </div>
}