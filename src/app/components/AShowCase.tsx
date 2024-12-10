import { useState } from "react";
import { showCaseList } from "../utils/common"
import Icon from '@/app/images/index'

const AShowCase = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);


  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate bg-[#1C1C1C] py-[110px] ">
    <div className="w-container m-auto md:w-full md:px-[30px] ">
      <div className="flex justify-center ">
        <img src="./title.svg" />
      </div>
      <div className="flex flex-wrap justify-center pt-[50px] gap-9  w-full cursor-default">
        {showCaseList.map((item, index) => {
          return <div
            key={`tab_${index}`}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover({ index, isHover: false });
            }}

            className={`${dealHover?.isHover && dealHover.index === index
              ? "text-[#FFFFFF]"
              : "text-[#7C7C7C]"
              } rounded-[51px]  bg-[#313131] hover:bg-[#4281FF] flex flex-col items-center justify-center w-full  max-w-[421px] px-8 py-16`}>
            <div ><Icon color={`${dealHover?.isHover && dealHover.index === index
              ? "#FFFFFF"
              : " #7C7C7C"
              }`} name={item.icon} />
            </div>
            <div className="  w-[350px] max-h-[200px] h-full mt-[46px] text-center">
              <div style={{ letterSpacing: '-0.42px' }} className={` abcgintoText text-[28px] font-medium leading-7`}>{item.title}</div>
              <div style={{ letterSpacing: '-0.3px' }} className="asText text-center mt-4 text-xl font-normal leading-[22px] ">{item.content}</div>
            </div>

          </div>
        })}

      </div>

    </div>
  </div>
}

export default AShowCase