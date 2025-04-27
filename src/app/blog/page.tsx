'use client'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import AHeader from "../components/AHeader"
import AFooter from "../components/AFooter"
import { FiArrowUp } from "react-icons/fi"

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })


  const list = [
    { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
    { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
    { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
    { title: 'Deploy AI Agent Without Coding on Phala Cloud', tab: ['Phala Cloud', 'TEE', 'AI', 'Tutorials'], date: '2025-02-10' },
  ]

  return (
    <div>
      <AHeader />
      <div className=" w-container px-[5.125rem] mo:px-[1.0625rem]  pt-[5.0625rem] m-auto md:w-full mo:w-full ">
        <div className="text-[4.0625rem] text-black">Blog</div>
        <div className="navigation-wrapper bg-[#FFFFFF] rounded-[3.0625rem] mt-[3.125rem]  shadow-xl shadow-[#E6E6E6E5]">
          <div ref={sliderRef} className="keen-slider w-full">
            {list.map((item) => {
              return <div key={item.date} className="keen-slider__slide number-slide1 flex gap-[1.875rem] p-5 mo:flex-col ">
                <img src="./defaultImg.svg" className="w-[46rem] mo:w-full" />
                <div className="flex justify-between flex-col pt-5 pb-[30px] mo:pb-0 mo:gap-5">
                  <div className="">
                    <div className="text-[2.5rem] mo:text-[1.625rem] font-semibold text-black"> {item.title}</div>
                    <div className="flex mt-5 gap-[.625rem] flex-wrap ">
                      {item.tab.map((tab) => {
                        return <div key={tab} className="bg-[#4281FF] text-base w-auto flex gap-1 py-1 px-[.8125rem] text-white rounded-[1.25rem]">{tab}</div>
                      })}
                    </div>
                  </div>
                  <div className="text-[#8A8A8A] text-base">1232</div>
                </div>


              </div>

            })}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots mo:py-[3.125rem]">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(24.75rem,1fr))] justify-between gap-5 mt-[5rem] mo:mt-0  ">
          {list.map((item) => {
            return <div key={item.title} className="navigation-wrapper flex rounded-[3.0625rem]  justify-center p-5 flex-col items-center">
              <img src="./defaultImg.svg" className="w-full" />
              <div className="flex justify-between flex-col pt-5 bf">
                <div className="text-[1.75rem] mo:text-[1.625rem] font-semibold text-black"> {item.title}</div>

                <div className="flex flex-col gap-[3.75rem]">
                  <div className="flex mt-5 gap-[.625rem] flex-wrap ">
                    {item.tab.map((tab) => {
                      return <div key={tab} className="bg-[#4281FF] text-base w-auto flex gap-1 py-1 px-[.8125rem] text-white rounded-[1.25rem]">{tab}</div>
                    })}
                  </div>
                  <div className="text-[#8A8A8A] text-base">1232</div>

                </div>
              </div>
            </div>
          })}

        </div>
        <div className="w-full text-center pt-[3.75rem] pb-[5rem] ">
          <button className="py-[.8125rem] px-[2.0625rem]  bg-[#4281FF] rounded-[2.0625rem] text-white">View All Blogs</button>
        </div>

        <div className="rounded-[3.0625rem] bg-white shadow-box px-[3.125rem] mo:px-5 py-[3.125rem] mo:mb-0">
          <div className="text-center texe-[#000000] text-[2.5rem] font-semibold">Search by Tag</div>
          <div className="flex mt-5 mo:mt-10 gap-[.625rem] flex-wrap ">

            {list.map((item) => {
              return item.tab.map((tab) => {
                return <div key={tab} className="bg-[#4281FF] text-base w-auto flex gap-1 py-1 px-[.8125rem] text-white rounded-[1.25rem]">{tab}</div>
              })
            })}

          </div>

        </div>

        <button onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        } className=" mo:mt-[4.1875rem] mt-20 mb-10 mo:mb-12 rounded-[1.5625rem] float-right shadow-box border w-[3.125rem] h-[3.125rem] flex items-center justify-center ">
          <FiArrowUp className="w-6" />
        </button>

      </div>
      <AFooter />
    </div>

  )
}


export default Blog
