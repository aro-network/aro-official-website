import { useState } from "react";
import { fabricList } from "../utils/common"

const AFabric = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);


  return <div className="bg-[#373737] overflow-hidden">
    <div data-aos="fade-up"
      data-aos-duration="1000"
      className=" aos-init aos-animate   w-container m-auto h-auto  md:w-full md:px-[30px] pt-40 pb-80">
      <div className="text-[70px] font-medium leading-normal text-[#FFFFFF] abcgintoText">
        <div>
          The Open-Layered
        </div>
        <div>
          Fabric
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-10 mt-10 bg-[#373737]">
        {fabricList.map((item, index) => {
          return <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={`tab_${index}`}
            className={`  aos-init aos-animate flex justify-between tab-item relative transition-all duration-500 ease-in-out  h-[380px] ${dealHover?.isHover && dealHover.index === index
              ? " bg-[#4281FF] w-full active z-[100000]"
              : ""
              }  `}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover(null);
            }}>
            <div className="w-[35%] md:w-[40%]">
              <div className={`abcgintoText mt-7  transition-all duration-500  text-[40px] w-full text-right font-medium leading-normal ${dealHover?.isHover && dealHover.index === index && 'text-[#ffffff]'}  ${dealHover?.isHover && dealHover.index === index
                ? "text-[#BEBEBE]  hoverItem"
                : "text-[#787878]"
                }`}>
                {item.title}

              </div>

              {dealHover?.isHover && dealHover.index === index &&
                <div className=" text-[22px] font-medium pt-6 pl-[81px] md:pl-[30px] leading-normal text-[#FFFFFF] asText">
                  {item.content}
                </div>
              }

            </div>
            <div className=" mt-20 md:mt-40  w-[65%] md:w-[60%]">
              <img className={`transition-transform duration-500 ${dealHover?.isHover && dealHover.index === index
                ? "scale-110"
                : "scale-100"
                }`} src={dealHover?.isHover ? (dealHover?.index === index ? item.icon : item.default) : item.icon} />
            </div>
          </div>
        })}
      </div>
    </div>

  </div>

}

export default AFabric