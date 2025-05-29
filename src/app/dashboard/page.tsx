'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  function isMobileDevice() {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  useEffect(() => {
    const mobile = isMobileDevice();
    setIsMobile(mobile);

    if (!mobile) {
      window.location.href = "https://devnet-dashboard.aro.network/";
    }
  }, []);

  if (!isMobile) {
    return null;
  }


  return <div className=" bg-[url(/banner-bg.png)]  mo:bg-top bg-cover  z-[100000] lg:relative  w-full h-full">
    <div className="flex justify-center w-full pt-[4.75rem] mo:pt-5 flex-col items-center">
      <Image alt="" width={211} height={46} src="../enreach-logo.svg" className="w-[13.1875rem] h-[2.375rem] mo:w-[140px] mo:h-[1.4375rem]" />
      <div className="font-medium text-xl text-black mt-5 mo:mt-[.375rem]">ARO Companion</div>
      <div className="text-[#000000B2] text-sm my-6 ">
        Follow instructions to install the ARO Companion for <br />
        ARO Dashboard -- your all-in-one entry to<br />
        manage your ARO Account and Edge Nodes.
      </div>
      <div className="  w-[90%] ">
        <img alt="earth" src="../earth.png" className=" " />
      </div>
      <div className=" absolute bottom-0  mo:w-full   rounded-3xl p-10 bg-gray-100 ">
        <div className="  text-black  relative  w-full  flex justify-center  flex-col  text-left gap-5 " >
          <div>
            1. Open browser settings
          </div>
          <div >
            {`2. Select "Add to Home Screen"`}
          </div>
        </div>

      </div>

    </div>

  </div>



}

export default Dashboard