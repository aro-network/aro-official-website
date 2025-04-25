'use client'
import Slider from "react-slick";
import AHeader from "../components/AHeader"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ABlog = () => {
  const settings = {
    dots: true,
    slidesPerRow: 1,
    arrows: false,
  };

  const data = [
    { title: ' NVIDIA TEE GPU H200 Delivers High Performance for Decentrazlied AI' },
    { title: ' NVIDIA TEE GPU H200 Delivers High Performance for Decentrazlied AI2' },
  ]

  // const list = [
  //   { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
  //   { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
  //   { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
  //   { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },

  // ]


  return <div>
    <AHeader />
    <div className="  w-container m-auto flex px-[82px] mo:px-5 mo:pt-[3.125rem] md:px-[30px] md:w-full  mo:w-full flex-col ">
      <div className="font-Ubuntu text-[4.0625rem] pt-20 font-medium text-black">
        Blog
      </div>

      <div className=" mt-10 mb-20 mo:w-full  mx-auto w-container md:w-full md:px-[30px] mo:px-[30px]">
        <Slider {...settings} className="w-full">
          {data.map((item, i) => {
            return <div key={`slider_${i}`} className="w-[62.5rem]">
              <div
                key={`slider${i}`}
                className=" bg-white flex gap-5 items-center w-full"
              >
                <img src="./defaultImg.svg" className="w-[50%]" />
                <span>
                  {item.title}
                </span>
              </div>
            </div>

          })
          }
        </Slider>
      </div>
      {/* <div className="flex justify-between w-full gap-5 mo:flex-wrap">
        {list.map((item) => {
          return <div className="rounded-[1.25rem] bg-white border-[#E6E6E6E5] border p-5">
            <img src="./defaultImg.svg" />
            <span className="text-[#000000] font-semibold text-[1.75rem]">{item.title}</span>
            <div className="flex gap-[.625rem] ">
              {item.tab.map((tab, i) => {
                return <div key={'tab' + i} className="bg-[#4281FF] flex-nowrap rounded-[1.25rem] text-base flex items-center text-white w-full h-[1.5625rem] py-[.1875rem] px-[.9375rem]">{tab}</div>
              })}

            </div>
          </div>

        })}

      </div> */}
    </div>
  </div>


}

export default ABlog