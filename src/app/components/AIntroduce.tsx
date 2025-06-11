import { FiAlertCircle } from "react-icons/fi";

const AIntroduce = () => {
  return (
    <div className="   w-container m-auto flex px-[170px] mo:px-5 mo:pt-[3.125rem] pt-20  md:px-[60px] md:w-full  mo:w-full  flex-col">
      <div data-aos="fade-up"
        data-aos-duration="1000"
        className="aos-init aos-animate text-center font-Ubuntu font-medium text-[2.75rem] text-black pb-16 mo:text-[1.75rem]">
        Run an ARO Node in 3 Steps
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  aos-init aos-animate flex gap-5 w-full mo:w-full mo:flex-wrap"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce w-full  h-[34.375rem] mo:h-auto px-5 pt-[30px] pb-10 "
        >
          <span className="font-Ubuntu font-medium text-2xl text-black">
            Plug it.
          </span>
          <div className="mt-7 flex flex-col gap-5">
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="./AROPod.png" width={90} height={62} />
              </div>
              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className=" font-medium text-base leading-4 text-black">
                  ARO Pod
                </div>
                <div className="text-xs  text-[#000000B2]">
                  Dedicated plug-and-play device. Optimized for high uptime and
                  rewards.
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="./AROLite.png" width={90} height={62} />
              </div>
              <div className="flex gap-[.375rem] flex-col w-[60%]">

                <div className="flex gap-2 mo:gap-[.125rem] items-start ">
                  <span className=" font-medium text-base leading-4 text-black">
                    ARO Lite
                  </span>
                  <img src="./commingSoon.svg" />
                </div>
                <div className="text-xs  text-[#000000B2]">
                  Lightweight browser extension. Join with minimal cost and effort.
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="../AROClient.png" width={90} height={62} />
              </div>
              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className="flex gap-2 mo:gap-[.125rem] items-start ">
                  <span className=" font-medium text-base leading-4 text-black">
                    ARO Client
                  </span>
                </div>
                <div className="text-xs  text-[#000000B2]">
                  Install on your own device to unlock more capabilities.
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="./AROLink.png " width={90} height={62} />
              </div>

              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className=" font-medium text-base leading-4 text-black">
                  ARO Link
                </div>
                <div className="text-xs  text-[#000000B2]">
                  WiFi router with built-in ARO node. The choice for business scenarios.
                </div>
              </div>
            </div>
            <div className=" flex gap-[.375rem] items-baseline">
              <FiAlertCircle className="text-[.6875rem]" />
              <span className="text-[12px] text-[#909090]">
                Hardware images shown are for reference only. Final design and
                specs may vary.
              </span>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate   tab-Introduce w-full h-[34.375rem] mo:h-auto  pt-[30px] px-6"
        >
          <span className="font-Ubuntu font-medium text-2xl text-black">
            Install it.
          </span>
          <div className=" mt-[50px] mo:mt-[1.5625rem]  w-full flex justify-center">
            <img
              src="../install.png"
              className=" object-cover"
              width={251}
              height={256}
            />
          </div>
          <div className=" text-xs leading-5 text-[#000000B2] mt-10 mo:mb-10 ">
            Contribute your idle bandwidth as an ARO Edge Node.
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce w-full h-[34.375rem] mo:h-auto  pt-[30px] px-6 pb-6 "
        >
          <div className="font-Ubuntu font-medium text-2xl text-black ">
            Start Earning.
          </div>
          <div>
            <img
              src="./startEarning.svg"
              className="absolute right-0 top-5"
              alt="startEarning"
            />
          </div>
          <div className="mt-40 flex items-center gap-5">
            <img src="./rewards.svg" />
            <div className="flex flex-col gap-[6px]">
              <div className="font-medium text-base text-black">
                Earn $ARO Rewards
              </div>
              <div className="text-[#000000B2] text-xs">
                Stack Jades during Testnet, convert them to $ARO tokens
                at mainnet launch.
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-5 mt-[30px] smd:mt-5">
            <img src="./refer.svg" />
            <div className="flex flex-col gap-[6px]">
              <div className="text-[#000000B2] text-xs">
                Refer your friend and earn extra 15% commission.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIntroduce;
