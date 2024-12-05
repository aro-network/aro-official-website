const ABanner = () => {
  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate w-container m-auto md:w-full">
    <div className="flex justify-between w-full items-center ">
      <div className="bg-[#1B1B1B] p-20 md:p-0  w-[50%] md:h-[700px]">
        <img src="ai.gif" className="" />
      </div>
      <div className="w-[50%]">
        <div className="h-[700px] md:mx-[30px] flex  flex-col justify-center md:pl-[10px] items-baseline  gap-[40px] md:gap-5">
          <img src="./whyWeExist.svg" className="" />
          <span className=" font-medium text-[50px] md:text-[30px] leading-normal   abcgintoText text-[#7C7C7C]">
            Pioneering
            <div className="flex items-center w-full gap-3">
              the
              <span className="text-[#4281FF] ">
                Edge Cloud
              </span>
              for
            </div>
            the <span className="text-[#FFF]"> AI Era.</span>

          </span>
          <div className=" ml-[54px] md:ml-0 mt-5">
            <div className="text-[#7C7C7C] font-normal asText text-[22px] leading-normal">
              <div className=" mb-5">
                EnReach bridges the gap between centralized cloud systems and the needs of next-generation applications. As AI reshapes industries, we bring the cloud closer to users, enabling instant responses, seamless interactions, and scalable performance.
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