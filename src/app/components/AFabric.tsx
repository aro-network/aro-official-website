import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const AFabric = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const fabricList = [
    {
      title: "Application Layer",
      icon: "./application.svg",
      // icon: <div>
      //   <img src="./application.svg" />
      // </div>,
      // default: <div>
      //   <img src="./default-application.svg" />
      // </div>,
      moIcon: './mo-applicaiton.svg',
      content:
        "Provide developer SDKs and user interfaces that expose the network’s capabilities, allowing for easy development, deployment, management, and scaling of edge applications and AI solutions.",
    },
    {
      title: "Orchestration layer",
      icon: "./open.svg",
      default: "./default-open.svg",
      // icon: <div>
      //   <img src="./open.svg" />
      // </div>,
      // default: <div>
      //   <img src="./default-open.svg" />
      // </div>,
      moIcon: './mo-orchestration.svg',
      content:
        "Coordinate network consensus, data, computation flows, and task management across nodes to meet the dynamic demands of edge computing, data transmission & processing with high precision and reliability.",
    },
    {
      title: "Resource Layer",
      icon: "./resource.svg",
      default: " default-resource.svg",
      // icon: <div>
      //   <img src="./resource.svg" />
      // </div>,
      // default: <div>
      //   <img src="./default-resource.svg" />
      // </div>,
      moIcon: './mo-resource.svg',
      content:
        "Standardize, virtualize, and containerize heterogeneous node resources to create a scalable, flexible digital infrastructure that can be verified, quantified, and optimized for efficient utilization.",
    },
  ];

  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);


  return <div className="bg-[#373737] mo:bg-[#1B1B1B] overflow-hidden">
    <div
      // data-aos="fade-up"
      //   data-aos-duration="1000"
      className=" aos-init aos-animate mo:mt-[71px] mo:text-center  w-container mo:w-full m-auto h-auto  md:w-full md:px-[30px] lg:pt-40 lg:pb-80">
      <div className="text-[80px] mo:text-xl mo:flex mo:justify-center font-semibold leading-normal text-[#FFFFFF] abcgintoText">
        <div>
          The Open-Layered
        </div>
        <div>
          Fabric
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
              <div className={`abcgintoText mt-7  transition-all duration-500  text-[45px] w-full text-right font-semibold leading-normal ${dealHover?.isHover && dealHover.index === index && 'text-[#ffffff]'}  ${dealHover?.isHover && dealHover.index === index
                ? "text-[#BEBEBE]  hoverItem"
                : "text-[#787878]"
                }`}>
                {item.title}

              </div>

              {dealHover?.isHover && dealHover.index === index &&
                <div className=" text-[20px] font-medium pt-6 pl-[81px] md:pl-[30px] leading-tight text-[#FFFFFF] asText">
                  {item.content}
                </div>
              }

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
      <div className="lg:hidden w-full mb-10 pb-10 px-5 overflow-auto flex flex-col gap-10">
        {fabricList.map((item, index) => (
          <div key={`slider_${index}`} className="w-full h-[350px] bg-[#373737] rounded-[30px]">
            <div className="p-5">
              <div className="text-[#4281FF] abcgintoText text-base font-semibold leading-normal">
                {item.title}
              </div>
              <div className="asText text-[10px] mt-3 font-medium leading-normal">
                {item.content}
              </div>
            </div>
            <div className=" ">
              <img src={item.moIcon} className="h-auto object-cover w-full" />
            </div>
          </div>


        ))}
      </div>
    </div>

  </div>

}

export default AFabric