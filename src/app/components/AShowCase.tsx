import { useState } from "react";
import { showCaseList } from "../utils/common"
import Icon from '@/app/images/index'
import useMobileDetect from "../hooks/useMobileDetect";

const AShowCase = () => {

  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);
  const isMobile = useMobileDetect()

  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate bg-[#1C1C1C] py-[137px] mo:py-0 mo:pt-[38px] ">
    <div className="w-container m-auto md:w-full md:px-[30px] mo:w-full mo:px-5">
      <div className="flex justify-center">
        <img src="./title.svg" />
      </div>
      <div className="flex flex-wrap mo:w-full justify-center pt-[50px] mo:pt-6 gap-9 mo:gap-3 w-full cursor-default">
        {showCaseList.map((item, index) => {
          return <div
            key={`tab_${index}`}
            data-aos={isMobile ? "fade-up" : "flip-left"}
            data-aos-duration="1000"
            className="mo:w-full "
          >
            <div
              onMouseOver={(e) => {
                e.isPropagationStopped()
                e.stopPropagation()

                setDealHover({ index, isHover: true });
              }}
              onMouseLeave={(e) => {
                e.isPropagationStopped()
                e.stopPropagation()
                setDealHover({ index, isHover: false });
              }}
              onClick={() => {
                setDealHover({ index, isHover: true });
              }}
              className={`${dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF] bg-[#4281FF]"
                : "text-[#7C7C7C]"
                } rounded-[51px]  bg-[#313131] flex mo:w-full mo:max-w-full  flex-col items-center  justify-center  h-[330px] w-full   max-w-[421px] px-8 py-16`}>
              <div className=" h-40">
                <div className={`${index === 0 && 'mt-[5px]'} h-10 w-10`}>
                  <Icon color={`${dealHover?.isHover && dealHover.index === index
                    ? "#FFFFFF"
                    : " #7C7C7C"
                    }`} name={item.icon} />
                </div>
              </div>
              <div className="  w-[350px] h-[400px] mo:h-[200px] mt-[45px] mo:mt-4 text-center">
                <div style={{ letterSpacing: '-0.45px' }} className={`  text-[30px] mo:text-lg font-semibold leading-7`}>{item.title}</div>
                <div style={{ letterSpacing: '-0.27px' }} className="font-AlbertSans text-center mo:mx-4 mt-4 text-xl mo:text-sm font-normal leading-[22px] ">{item.content}</div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  </div >
}

export default AShowCase