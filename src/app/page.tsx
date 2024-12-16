'use client'
import AHeader from "./components/AHeader";
import ABanner from "./components/ABanner";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AIntelligence from "./components/AIntelligence";
import AShowCase from "./components/AShowCase";
import AOpenEdge from "./components/AOpenEdge";
import AFabric from "./components/AFabric";
import AFooter from "./components/AFooter";
import CountUp from "react-countup";


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

  return <div className=" lg:overflow-hidden h-auto">
    <AHeader />
    <ABanner />
    <AIntelligence />
    <AOpenEdge />
    <AShowCase />
    <AFabric />
    <AFooter />

  </div>
}