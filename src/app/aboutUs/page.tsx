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
    <AHeader />
    <ABanner />
    <div ata-aos="fade-up"
      data-aos-duration="1000" className=" w-full flex justify-end">
      <div className="w-[50%] lg:hidden absolute translate-y-[-120px]  ">
        <img src="./edge.gif" className="bg-cover " />
      </div>
    </div>
    <AWhatDrivesUs />
    <ADoingIt />
    <AFooter />

  </div>

}

export default AboutUs