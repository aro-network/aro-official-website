import { doingItList } from "@/app/utils/common"
import { useState } from "react";

const ADoingIt = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);



  return <div className=" bg-[#1B1B1B]">
    <div data-aos="fade-up"
      data-aos-duration="1000"
      className="m-auto aos-init aos-animate w-container md:w-full">
      <div className="flex justify-center pt-[121px] flex-col items-center">
        <div >
          <img src="./enReachNetwork.svg" />

        </div>
        <div className=" pt-[74px]">
          <img src="./flower.svg" />
        </div>
        <div className=" text-[55px] pt-5 font-medium leading-normal abcgintoText ">
          {`How We're Doing It?`}
        </div>
        <div className=" text-[30px] pt-5 font-medium leading-normal text-center w-full px-[270px]">
          At EnReach, we blend openness and innovation to transform edge computing into a seamless and accessible foundation for the AI era.
        </div>

        <div className="flex flex-col px-[45px] gap-4 mt-[69px] bg-[#1C1C1C] pb-[112px]">
          {doingItList.map((item, index) => {
            return <div
              key={`List_${index}`}
              onMouseOver={() => {
                setDealHover({ index, isHover: true });
              }}
              onMouseLeave={() => {
                setDealHover({ index, isHover: false });
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              className={` aos-init aos-animate ${dealHover?.isHover && dealHover.index === index
                && "bg-[#4281FF]"
                }  w-full rounded-[49px] bg-[#313131] flex justify-between items-end gap-[100px] px-[86px] md:px-[66px] py-[69px] md:py-[30px]`}>
              <div className={`${dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF]"
                : "text-[#8A8A8A]"
                } text-[45px] md:text-[35px] abcgintoText font-medium leading-normal w-[56%]`}>
                {item.title}
              </div>
              <div className={`${dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF]"
                : "text-[#8A8A8A]"
                } text-[22px] font-medium asText leading-normal w-[44%]`}>
                {item.contnet}
              </div>

            </div>

          })}
        </div>
      </div>
    </div>
  </div>

}

export default ADoingIt