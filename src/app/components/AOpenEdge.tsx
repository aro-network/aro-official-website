import { useState } from "react";
import Icon from "../images"
import { openEdgeList } from "../utils/common"


const AOpenEdge = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);


  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className="overflow-hidden aos-init aos-animate">
    <div className="relative h-auto py-20 m-auto overflow-hidden w-container md:w-full ">

      <div className="flex flex-col gap-[72px] content md:px-[30px] md:ml-0 ml-[121px] " >
        {openEdgeList.map((item, index) => {
          return <div key={`edge_${index}`} className={`flex ${!!index ? 'items-center gap-[40px] smd:gap-10 ' : 'items-end'}`}
            onMouseOver={() => {
              setDealHover({ index, isHover: true });
            }}
            onMouseLeave={() => {
              setDealHover({ index, isHover: false });
            }}>
            <div className={` ${!!index && 'rounded-[50px] bg-[#373737] px-[132px] smd:px-[151px]  flex h-[295px]  '}  items-center justify-center`}>
              {!!index &&
                <div className="w-[257px] h-[212px] relative" >
                  <img src={item.gif} width={257} height={212} />
                  <div className={` absolute  translate-x-[100px] ${index === 3 ? ' translate-y-[-176px]' : ' translate-y-[-150px]'} `}>
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


            <div className={`flex flex-col  ${!!index && dealHover?.isHover && dealHover.index === index
              ? "text-[#FFFFFF]"
              : "text-[#8A8A8A]"
              }`}>
              <div className={` ${!index ? 'text-[70px] text-[#fff] text-left flex justify-start' : 'text-[25px] '}  font-medium leading-normal abcgintoText`}>{item.title}</div>
              <div className={`abcgintoText text-[40px] md:text-[24px] font-medium leading-normal ${!!index && dealHover?.isHover && dealHover.index === index
                ? "text-[#4281FF]"
                : "text-[#8A8A8A]"
                }`}>{item.subTitle}</div>
              <div className="asText text-[22px] font-semibold leading-normal">{item.content}</div>
            </div>
          </div>
        })}

        {/*   */}
        <div className={`w-[1px] h-[40px] border-dashed border overflow-hidden p-0  translate-x-[520px] translate-y-[-37px]   mx-10 absolute  smd:translate-x-[568px] `}></div>
        <div className={`w-[1px] h-[940px] border-dashed border  overflow-hidden p-0  translate-x-[520px] translate-y-[120px]   mx-10 absolute  smd:translate-x-[568px]  `}></div>
        {/*         
        // <div className={`w-[1px] h-[90px] border-dashed border overflow-hidden p-0   mx-10 relative left-[520px] smd:left-[568px] top-[-1370px]  `}></div>
        // <div className={`w-[1px] h-[940px] border-dashed border  overflow-hidden p-0  mx-10 relative left-[520px] smd:left-[568px] top-[-1320px]  `}></div> */}
      </div>
    </div>


  </div>


}

export default AOpenEdge