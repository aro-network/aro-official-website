'use client';
import React, { useEffect, useRef, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import useMobileDetect from '../hooks/useMobileDetect';
import { roadmap } from '../utils/common';


export default function AutoScrollRoadmap() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [roadMapCountHeight, setRoadMapCountHeight] = useState(0);
  const isMobile = useMobileDetect(640)



  const startAutoScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    scrollIntervalRef.current = setInterval(() => {
      container.scrollLeft += scrollDirection;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        setScrollDirection(-1);
      }

      if (container.scrollLeft <= 0) {
        setScrollDirection(1);
      }
    }, 16); // ~60fps
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isMobile) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [scrollDirection]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    stopAutoScroll();
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
    startAutoScroll();
  };

  useEffect(() => {
    const data = document.getElementsByClassName('roadMap')
    setRoadMapCountHeight(data[0].clientHeight)
  }, [isMobile])



  return (
    <div
      className="w-container m-auto flex px-[170px] mo:px-[1.6875rem]  mo:pt-[3.125rem] mo:pb-[3.75rem]  pt-20  md:px-[60px] md:w-full  mo:w-full flex-col "
    >
      <div data-aos="fade-up"
        data-aos-duration="1000"
        className='aos-init aos-animate  mb-[100px] mo:mb-0 mo:mt-4 w-full '>
        <div
          className='font-Ubuntu font-medium mo:text-[1.75rem] text-[2.75rem] text-black mb-14 mo:mb-[1.875rem] text-center'>
          ARO Roadmap: From Launch to Scale
        </div>
        <div className=" flex mo:hidden relative w-full  ">
          <div className='  border-[.0625rem]  w-full absolute top-[55px] border-black z-[-10]'></div>
        </div>
        <div className=" flex xsm:hidden   relative w-full justify-center ">
          <div style={{ height: roadMapCountHeight + 30 + 'px' }} className={`border-[.0625rem]  w-[.0625rem]   absolute  border-black z-[-10000]`}></div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseUp={handleMouseUpOrLeave}
          className={`justify-start roadMap    xsm:overflow-x-auto scrollbar-hide w-full flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}>
          <div className="flex gap-20 mo:gap-5 flex-nowrap w-[350px] sm:flex-col sm:w-full">
            {roadmap.map((item, i) => {
              return (
                <div
                  key={`content_${i}`}
                  className={`   bg-repeat bg-cover mo:flex flex-col sm:w-full xsm:px-5`}>
                  <div className='mt-[34px] flex flex-col items-center sm:w-full'>
                    <div data-date={item.date} className="element flex w-[9.375rem] text-black"> {item.date}</div>
                    <div className="flex  relative h-5 bg-black w-[.0625rem]">
                      <div className='absolute top-[55px] z-[-10]'></div>
                    </div>
                    <div className={`flex  border border-black rounded-lg bg-white  lg:h-[220px] h-[16.875rem] xsm:min-w-[380px] min-w-full xsm:mb-5 w-full flex-col ${item.isCurrent && 'current-shadow-box'}`}>
                      <div className={` px-[.875rem] font-medium rounded-t-md justify-between text-lg w-full h-[3.125rem] flex items-center text-white ${item.color} `}>
                        {item.title}
                        {item.finished && <BsCheckCircle />}
                      </div>
                      <div className={`px-[.375rem]   flex justify-center  mo:rounded-b-md flex-col  h-full`}>
                        {item.items.map((tab) => (
                          <div key={tab} className='text-black leading-7 flex'>
                            <div>{"\u00A0"}•{"\u00A0"}</div>
                            {tab}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
