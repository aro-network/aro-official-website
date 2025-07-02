'use client'
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


  return <div className=" bg-[url(/appBg.png)] bg-cover object-contain bg-no-repeat  h-screen ">
    <div className="flex justify-center w-full pt-[4.75rem] mo:pt-5 flex-col items-center">
      <img src="./aro-logo-light.svg" className="mt-[11.8125rem] " />
      <div className="font-medium text-xl text-white mt-5 mo:mt-3">Mobile App</div>
      <div className="text-white text-center text-sm my-6 ">
        Follow instructions to install the Mobile App <br /> for ARO Dashboard -- your all-in-one <br /> entry to manage your ARO Account and <br />ARO Nodes.
      </div>

      <img src="./install-guide.png" className="px-4" />
      {/* <div className=" absolute bottom-0  mo:w-full   rounded-3xl p-10 bg-gray-100 "> */}

      {/* <div className="  text-black  relative  w-full  flex justify-center  flex-col  text-left gap-5 " >
          <div>
            1. Open browser settings
          </div>
          <div >
            {`2. Select "Add to Home Screen"`}
          </div>
        </div> */}

      {/* </div> */}

    </div>

  </div>



}

export default Dashboard