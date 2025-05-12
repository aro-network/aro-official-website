import { FiAlertCircle } from "react-icons/fi";

const AIntroduce = () => {
  return (
    <div className="   w-container m-auto flex px-[170px] mo:px-5 mo:pt-[3.125rem] pt-20 md:px-[40px] md:w-full  mo:w-full  flex-col">
      <div className=" text-center font-Ubuntu font-medium text-[2.75rem] text-black pb-16 mo:text-[1.75rem]">
        Run an EnReach Node in 3 Steps
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  aos-init aos-animate flex gap-5 w-full mo:w-full mo:flex-wrap"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce w-full  h-[31.875rem] mo:h-auto px-5 pt-[30px] pb-10 "
        >
          <span className="font-Ubuntu font-medium text-2xl text-black">
            Plug it.
          </span>
          <div className="text-base leading-5 text-[#000000B2] pt-[10px]">
            Hardware or Software Client, your choice.
          </div>
          <div className="mt-7 flex flex-col gap-5">
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="./enreachBox.png" width={90} height={62} />
              </div>
              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className=" font-medium text-base leading-4 text-black">
                  Berry Box
                </div>
                <div className="text-xs  text-[#000000B2]">
                  Dedicated plug-and-play device. Optimized for high uptime and
                  rewards.
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="../enreachNode.svg" width={90} height={62} />
              </div>
              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className="flex gap-2 mo:gap-[.125rem] items-start ">
                  <span className=" font-medium text-base leading-4 text-black">
                    Software Node
                  </span>
                  <img src="./commingSoon.svg" />
                </div>
                <div className="text-xs  text-[#000000B2]">
                  Install on your own device. Simple, flexible, and easy to
                  start.
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <div className="w-[30%]">
                <img src="./enreachRouter.svg " width={90} height={62} />
              </div>

              <div className="flex gap-[.375rem] flex-col w-[60%]">
                <div className=" font-medium text-base leading-4 text-black">
                  Berry Router
                </div>
                <div className="text-xs  text-[#000000B2]">
                  WiFi router with built-in EnReach node. Earn while you browse.
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
          className="  aos-init aos-animate   tab-Introduce w-full h-[31.875rem] mo:h-auto  pt-[30px] px-6"
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
          <div className=" text-xs leading-5 text-[#000000B2] mt-5 mo:mb-10 ">
            Contribute your idle bandwidth as an Enreach Edge Node.
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce w-full h-[31.875rem] mo:h-auto  pt-[30px] px-6 pb-6 "
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
                Earn $REACH Rewards
              </div>
              <div className="text-[#000000B2] text-xs">
                Stack Berry points during Testnet, convert them to $REACH tokens
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
