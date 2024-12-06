import { MouseEvent, useState } from "react";
import { fabricList } from "../utils/common"

const AFabric = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);
  const [clickTab, setClickTab] = useState<{ title: string, index: number | null }>({ title: '', index: null })


  const onCurrentValue = (title: string, index: number, e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setClickTab({ title, index })
  }

  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate  w-container m-auto h-auto  md:w-full md:px-[30px] my-20">
    <div className="text-[70px] font-medium leading-normal text-[#FFFFFF] abcgintoText">
      <div>
        The Open-Layered
      </div>
      <div>
        Fabric
      </div>
    </div>
    <div className="flex flex-col justify-center w-full gap-10 mt-10 ">
      {fabricList.map((item, index) => {
        return <div
          key={`tab_${index}`}

          className={`flex justify-between tab-item ${clickTab.title === item.title
            ? " h-[508px] bg-[#4281FF] w-full active"
            : ""
            }  `}
          onClick={(e) => onCurrentValue(item.title, index, e)}
          onMouseOver={() => {
            setDealHover({ index, isHover: true });
          }}
          onMouseLeave={() => {
            setDealHover({ index, isHover: false });
          }}>
          <div className="w-[35%]">
            <div className={`abcgintoText  text-[40px] w-full text-right font-medium leading-normal ${clickTab.index === index && 'text-[#ffffff]'}  ${dealHover?.isHover && dealHover.index === index
              ? "text-[#BEBEBE]  hoverItem"
              : "text-[#787878]"
              }`}>
              {item.title}

            </div>

            {clickTab.title && clickTab.index === index &&
              <div className=" text-[22px] font-medium pt-6 pl-[81px] md:pl-[30px] leading-normal text-[#FFFFFF] asText">
                {item.content}
              </div>
            }

          </div>
          {clickTab.title && clickTab.index === index &&
            <div className=" mt-20 md:mt-40  w-[65%]">
              <img src={item.icon} />
            </div>
          }
        </div>
      })}
      {!clickTab.title && (
        <div className="w-full flex justify-end relative top-[-300px] z-[-10000]">
          <div className="relative w-[1000px] h-[1000px]">
            <img
              src="./hoverDefaultLayer.svg"
              alt="hover"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${dealHover?.isHover ? "opacity-100" : "opacity-0"
                }`}
            />
            <img
              src="./defaultLayer.svg"
              alt="default"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${dealHover?.isHover ? "opacity-0" : "opacity-100"
                }`}
            />
          </div>
        </div>
      )}

    </div>


  </div>

}

export default AFabric