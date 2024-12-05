'use client'
import AHeader from "../components/AHeader"
import ABanner from "../components/aboutUs/ABanner"
import AWhatDrivesUs from "../components/aboutUs/AWhatDrivesUs"
import ADoingIt from "../components/aboutUs/ADoingIt"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";
import AFooter from "../components/AFooter"


const AboutUs = () => {

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



  return <div>
    <AHeader className={'bg-[#1B1B1B] px-10 pt-10'} containerClassName={' !py-0 pt-10 '} />
    <ABanner />
    <AWhatDrivesUs />
    <ADoingIt />
    <AFooter />

  </div>

}

export default AboutUs