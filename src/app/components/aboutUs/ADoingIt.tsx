import { doingItList } from "@/app/utils/common"
import { useState } from "react";

const ADoingIt = () => {

  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);

  return <div className=" bg-[#1B1B1B]">
    <div data-aos="fade-up"
      data-aos-duration="1000"
      className="m-auto aos-init aos-animate w-container md:w-full mo:w-full mo:px-5">
      <div className="flex justify-center pt-[121px] mo:pt-[58px] flex-col items-center">
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <img src="./enReachNetwork.svg" />
        </div>

        <div data-aos="fade-up"
          data-aos-duration="1000" className=" pt-[74px]">
          <img src="./flower.svg" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" text-[60px] mo:text-xl pt-5 font-bold leading-normal  ">
          {`How We're Doing It?`}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" text-[30px] mo:text-xs pt-5 mo:pt-4 font-medium  leading-normal text-center w-full px-[270px] mo:px-0">
          At ARO, we blend openness and innovation to transform edge computing into a seamless and accessible foundation for the AI era.
        </div>

        <div className="flex flex-col px-[45px] mo:px-0 gap-4 mt-[69px] mo:mt-[43px] bg-[#1C1C1C] pb-[112px] mo:pb-[60px]">
          {doingItList.map((item, index) => {
            return <div
              key={`List_${index}`}
              onMouseOver={() => {
                setDealHover({ index, isHover: true });
              }}
              onMouseLeave={() => {
                setDealHover({ index, isHover: false });
              }}
              onClick={() => {
                setDealHover({ index, isHover: true });
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              className={` aos-init aos-animate ${dealHover?.isHover && dealHover.index === index
                && "bg-[#4281FF]"
                }  w-full rounded-[49px] mo:rounded-[30px] bg-[#313131] flex mo:flex-col justify-between items-end gap-[100px] mo:gap-[47px] px-[86px] mo:px-6 md:px-[66px] py-[69px] mo:py-8 md:py-[30px]`}>
              <div className={`${dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF]  hoverItem  translate-x-5 mo:translate-x-0"
                : "text-[#8A8A8A]"
                } text-[50px] mo:text-xl md:text-[35px] mo:w-full  font-semibold leading-normal w-[56%]`}>
                {item.title}
              </div>
              <div className={`${dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF]  hoverItem  translate-x-5  mo:translate-x-0"
                : "text-[#8A8A8A]"
                } text-[22px] mo:text-xs font-medium font-AlbertSans leading-normal mo:w-full w-[44%]`}>
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