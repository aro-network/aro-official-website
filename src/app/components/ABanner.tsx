"use client";

const ABanner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" aos-init aos-animate  mo:w-full h-auto mo:h-auto"
    >
      <div className="w-container m-auto flex pl-[100px]   mo:pl-0 mo:flex-col md:w-full mo:mb-0  mo:w-full  h-full  ">
        <div className="   flex  w-full h-full gap-20 mo:gap-10  pt-[20vh] mo:pt-[3.75rem] mo:flex-col  ">
          <div className="  md:w-full  mo:w-full mo:text-center relative mo:top-0 md:top-[-50px] top-[-6.25rem] py-5">
            <div className=" text-[66px] font-extrabold mo:text-[1.75rem] md:text-[50px] text-nowrap  mo:px-0 md:px-[30px] text-[#000000] md:lead-[71px] mo:leading-none leading-[91px] relative z-[9999] font-Ubuntu">
              <div> The New Edge of AI</div>{" "}
            </div>
            <div className="text-[28px] pt-6 md:pt-0 font-extralight   mo:text-xs md:text-[20px] lg:text-nowrap  mo:py-[.875rem] mo:px-0  leading-[38px] md:px-[30px] font-AlbertSans text-[#000000B2] relative z-[9999]">
              Share Your Idle Internet, Earn Rewards,
              <br />
              Build a Smarter Web, Together.
            </div>
            <div className=" pt-[3.125rem] mo:pt-0 flex mo:mt-5   items-center gap-10 mo:gap-[15px] md:px-[30px] mo:flex-col-reverse ">
              <button
                onClick={() => {
                  document!.getElementById("target-section")!.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-[#1C73FF] text-white  items-center text-xl mo:text-base mo:font-medium font-semibold leading-9  flex justify-center  mo:h-[42px]  rounded-[22.5rem] btn font-AlbertSans py-[5px] px-[.9375rem]"
              >
                Join the Pioneers Program
              </button>
            </div>
          </div>
          <div className="w-full ng:h-[43.75rem]  relative flex items-start top-[-6.25rem] mo:top-0 z-[-10000000] ">
            <img alt="earth" src="../earth.png" className=" mo:w-full mo:hidden  " />
            <img alt="earth" src="../mo-earth.png" className=" mo:w-full ng:hidden enreachMoImg " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABanner;
