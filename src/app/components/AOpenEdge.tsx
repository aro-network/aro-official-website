import { useState } from "react";
import Icon from "../images"
import { openEdgeList } from "../utils/common"


const AOpenEdge = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);

  return <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className="overflow-hidden aos-init aos-animate">
    <div className=" mo:hidden relative h-auto py-[120px]  mo:mt-[-200px] mo:py-0 m-auto  overflow-hidden w-container md:w-full ">
      <div className="flex flex-col gap-[72px] content md:px-[30px] md:ml-0 ml-[100px]" >
        {openEdgeList.map((item, index) => {
          return <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={`edge_${index}`}
            className={`flex ${!!index ? 'items-center gap-[40px] smd:gap-10 ' : 'items-end'}`}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover({ index, isHover: false });
            }}>
            <div
              className={` ${!!index && 'rounded-[50px] bg-[#373737] px-[132px] smd:px-[151px]  flex h-[295px]  '} items-center justify-center`}>
              {!!index &&
                <div className="w-[257px] smd:w-[calc(18vh)]  h-[212px] relative" >
                  <img src={item.gif} width={257} height={212} />
                  <div className={` absolute  translate-x-[100px] smd:translate-x-[80px] ${index === 3 ? ' translate-y-[-176px] smd:translate-y-[-170px] ' : ' translate-y-[-150px] smd:translate-y-[-140px] '} `}>
                    <Icon name={item.icon} seColor={`${dealHover?.isHover && dealHover.index === index
                      ? "#144097"
                      : " #D9D9D9"
                      }`}
                      color={`${dealHover?.isHover && dealHover.index === index
                        ? "#4281FF"
                        : " #D9D9D9"
                        }`} />
                  </div>
                </div>
              }
            </div>
            {!!index && <div className="w-auto relative right-[10px] smd:right-0 z-50 ">
              <div className="border rounded-[100%] border-[#E8E8E8] w-5 h-5  px-0 py-0">
                <div className={`border  rounded-[100%] ${dealHover?.isHover && dealHover.index === index
                  ? "bg-[#4281FF]"
                  : "bg-[#8A8A8A]"
                  } w-full h-full px-1 py-1`}>
                </div>
              </div>
            </div>
            }
            <div
              className={`flex flex-col  ${!!index && dealHover?.isHover && dealHover.index === index
                ? "text-[#FFFFFF]"
                : "text-[#8A8A8A]"
                }`}>
              <div className={` ${!index ? 'text-[80px] text-[#fff] text-left flex justify-start' : 'text-[35px] smd:text-[25px] '}   font-semibold leading-normal `}>{item.title}</div>
              <div className={` text-[40px] smd:text-[30px] font-semibold leading-normal ${!!index && dealHover?.isHover && dealHover.index === index
                ? "text-[#4281FF]"
                : "text-[#8A8A8A]"
                }`}>{item.subTitle}</div>
              <div className={`font-AlbertSans text-[22px] leading-normal ${!!index && dealHover?.isHover && dealHover.index === index
                ? "font-semibold"
                : "font-normal "
                }`}>{item.content}</div>
            </div>
          </div>
        })}
        <div className={`w-[1px] h-[120px] border-dashed border overflow-hidden p-0 z-[-10000]  translate-x-[520px] translate-y-[-120px] mx-10 absolute smd:translate-x-[544px] `}></div>
        <div className={`w-[1px] h-[940px] border-dashed border  overflow-hidden p-0 z-[-10000] translate-x-[520px] translate-y-[120px] mx-10 absolute smd:translate-x-[544px]  `}></div>
      </div>
    </div>
    <div className=" bg-[#1B1B1B] lg:hidden px-[20px] pt-[34px]">
      <div className={`w-[1px] h-[20px] border-dashed border overflow-hidden  ml-[14px] translate-y-[-30px] absolute`}></div>
      <div className={`w-[1px] h-[730px] border-dashed border overflow-hidden  ml-[14px] translate-y-[45px] absolute`}></div>
      {openEdgeList.map((item, index) => {
        return <div data-aos="fade-up"
          data-aos-duration="1000" key={`edge_${index}`}>
          <div className={`${index && 'hidden'}  text-[22px] font-semibold leading-normal text-[#FFF]`}>
            {item.title}
          </div>
          {!!index && <div className="w-auto relative right-[-5px] top-5 z-50 ">
            <div className="border rounded-[100%] border-[#E8E8E8] w-5 h-5  px-0 py-0">
              <div className={`border  rounded-[100%] bg-[#4281FF] w-full h-full px-1 py-1`}>
              </div>
            </div>
          </div>
          }
          <div className="pl-[60px] flex gap-[6px] flex-col">
            <div className={`${!index && 'hidden'}  text-xs  font-semibold leading-normal text-[#FFF]`}>
              {item.title}
            </div>
            <div className={` text-base  font-semibold leading-normal text-[#4281FF]`}>
              {item.subTitle}
            </div>
            <div className="font-AlbertSans text-[10px] font-semibold leading-normal text-[#FFF]">
              {item.content}
            </div>
          </div>
          <div className="pl-[60px] mt-[14px]">
            {!!index &&
              <div className="w-full h-[212px] relative bg-[#373737] rounded-[30px] m-auto flex justify-center px-[60px] py-5 " >
                <img src={item.gif} className="w-[258px] h-[140px] mo:w-[280px] mo:h-[170px]" />
                <div className={` absolute   translate-x-[0px] ${index === 3 ? ' translate-y-[30px]' : ' translate-y-[50px]'} `}>
                  <Icon name={item.icon} width={index === 3 ? '50' : '30'} height={index === 3 ? '100' : '80'} seColor={"#144097"}
                    color={`#4281FF`} />
                </div>
              </div>
            }
          </div>
        </div>
      })}
    </div>
  </div>
}

export default AOpenEdge