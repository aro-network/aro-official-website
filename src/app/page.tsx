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
    <div
      className="  text-[#FFFFFF] bg-[#0C0C0C] w-full  ">
      <div className="w-container mo:w-full m-auto py-[60px] mo:py-[30px]  md:w-full  mo:px-[30px] ">

        <div className="mx-[80px] mo:gap-8 md:mx-[30px] abcgintoText flex mo:flex-col justify-between">
          <div className="flex flex-col items-center">
            <span className="text-[60px] mo:text-xl md:text-[50px] font-semibold leading-[72px]">
              <CountUp startOnMount={true} start={0} end={1000000} duration={3} />+
            </span>
            <span className="text-xl mo:text-xs font-medium leading-6 asText">Unlimited Edge Scalability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] mo:text-xl md:text-[50px]  font-semibold leading-[72px]">
              {`<`}{<CountUp start={100} end={1} duration={3} />}{`%`}
            </span>
            <span className="text-xl mo:text-xs font-medium leading-6 asText">Stuttering Rate </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] mo:text-xl md:text-[50px]  font-semibold leading-[72px]">
              {`>`}{<CountUp start={100} end={60} duration={3} />}{`%`}
            </span>
            <span className="text-xl mo:text-xs font-medium leading-6 asText">Save on Traffic </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] mo:text-xl md:text-[50px]  font-semibold leading-[72px]">
              {`<`}{<CountUp start={100} end={20} duration={3} />}ms

            </span>
            <span className="text-xl mo:text-xs font-medium leading-6 asText">Response Time</span>
          </div>

        </div>
      </div>
    </div>
    <AIntelligence />
    <AOpenEdge />
    <AShowCase />
    <AFabric />
    <AFooter />

  </div>
}