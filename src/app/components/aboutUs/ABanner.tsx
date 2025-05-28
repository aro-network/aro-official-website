const ABanner = () => {

  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className="m-auto aos-init aos-animate w-container md:w-full mo:w-full ">
    <div className="flex items-center mo:flex-col justify-between w-full  mo:bg-[#1C1C1C] ">
      <div className="bg-[#1B1B1B] p-20 md:p-0  w-[50%] mo:w-full md:h-[700px] mo:flex mo:justify-end">
        <img src="./AI.svg" className="" />
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className="w-[50%] mo:w-full mo:px-5 mo:pb-[124px]">
        <div className="h-[700px] mo:h-auto md:mx-[30px] flex mo:items-start  flex-col lg:justify-center md:pl-[10px] lg:items-baseline  gap-[40px] mo:gap-[10px] md:gap-5">
          <img src="./whyWeExist.svg" className=" mo:h-[25px] " />
          <span className=" font-semibold text-[65px] mo:text-xl md:text-[30px] leading-normal    text-[#7C7C7C]">
            Pioneering
            <div className="flex items-center w-full gap-3 mo:gap-1">
              the
              <span className="text-[#4281FF] ">
                Edge Cloud
              </span>
              for
            </div>
            the <span className="text-[#FFF]"> AI Era</span>
            <span>.</span>
          </span>
          <div data-aos="fade-up"
            data-aos-duration="1000"
            className=" ml-[54px] mo:ml-0 md:ml-0 mt-5 mo:mt-6">
            <div className="text-[#7C7C7C]  font-normal font-AlbertSans text-[22px] mo:text-xs leading-normal">
              <div className="mb-5 ">
                ARO bridges the gap between centralized cloud systems and the needs of next-generation applications. As AI reshapes industries, we bring the cloud closer to users, enabling instant responses, seamless interactions, and scalable performance.
              </div>
              By creating an globally-connected edge cloud, we empower the AI-driven world with infrastructure designed for speed, flexibility, and accessibility.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}


export default ABanner