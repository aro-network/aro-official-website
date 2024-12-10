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
    <AHeader rightClassName={`pt-10`} className={'bg-[#1B1B1B]  pt-10 '} containerClassName={'  !pt-0 '} />
    <ABanner />
    <AWhatDrivesUs />
    <ADoingIt />
    <AFooter className={` !bottom-0 `} />

  </div>

}

export default AboutUs