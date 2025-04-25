import { useState } from "react";
import { fabricList } from "../utils/common";
const AFabric = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);

  return <div className="bg-[#373737] mo:bg-[#1B1B1B] overflow-hidden">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" aos-init aos-animate mo:mt-[71px] mo:text-center  w-container mo:w-full m-auto h-auto md:w-full md:px-[30px] lg:pt-40 lg:pb-80">
      <div className="text-[80px] mo:text-xl mo:flex mo:justify-center mo:gap-1 font-semibold leading-normal text-[#FFFFFF] ">
        <div>
          Resource to App,
        </div>
        <div>
          Aligned
        </div>
      </div>
      <div className=" mo:hidden flex flex-col justify-center w-full gap-10 mt-10 bg-[#373737] ">
        {fabricList.map((item, index) => {
          return <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={`tab_${index}`}
            className={`  aos-init aos-animate flex justify-between tab-item relative transition-all duration-500 ease-in-out  h-[410px] ${dealHover?.isHover && dealHover.index === index
              ? " bg-[#4281FF] w-full active z-[100000]"
              : ""
              }  `}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover(null);
            }}>
            <div className="w-[33%] md:w-[40%]">
              <div className={` mt-7  transition-all duration-500  text-[45px] w-full text-right font-semibold leading-normal ${dealHover?.isHover && dealHover.index === index && 'text-[#ffffff]'}  ${dealHover?.isHover && dealHover.index === index
                ? "text-[#BEBEBE]  hoverItem  translate-x-5"
                : "text-[#787878]"
                }`}>
                {item.title}

              </div>
              <div className={` font-AlbertSans text-[20px]  transition-all duration-500  font-medium pt-6 pl-[81px] md:pl-[30px] 
               ${dealHover?.isHover && dealHover.index === index
                  ? "text-[#FFFFFF] block  hoverItem  translate-x-5"
                  : "hidden "
                }`}>
                {item.content}
              </div>


            </div>
            <div className=" mt-20 md:mt-40  w-[67%] md:w-[60%]">
              <img className={`transition-transform duration-500 relative ${dealHover?.isHover && dealHover.index === index
                ? "scale-110"
                : "scale-100"
                }`} src={dealHover?.isHover ? (dealHover?.index === index ? item.icon : item.default) : item.icon} />
            </div>
          </div>
        })}
      </div>
      <div className="lg:hidden w-full mb-10 pb-20 px-5  flex flex-col gap-10 mo:mt-6  mo:gap-[100px] ">
        {fabricList.map((item, index) => (
          <div data-aos="fade-up"
            data-aos-duration="1000" key={`slider_${index}`} className="w-full h-[350px] bg-[#373737] rounded-[30px]">
            <div className="p-5">
              <div className="text-[#4281FF]  text-base font-semibold leading-normal">
                {item.title}
              </div>
              <div className="font-AlbertSans text-[10px] mt-3 font-medium leading-normal">
                {item.content}
              </div>
            </div>
            <div className=" flex justify-center ">
              <img src={item.moIcon} className="h-auto object-cover w-full " />
            </div>
          </div>


        ))}
      </div>
    </div>

  </div>

}

export default AFabric