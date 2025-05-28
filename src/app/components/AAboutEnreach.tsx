const AAboutEnReach = () => {
  return (
    <div className="   flex-col h-auto  w-container m-auto flex  px-[170px] mb-5 mo:px-5 mo:pt-[3.125rem] md:px-[60px] md:w-full  mo:w-full ">
      <div className="text-center text-black text-[2.75rem] font-medium mo:text-[1.75rem] mo:pt-5 ">
        <span>ARO Network</span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" aos-init aos-animate flex gap-5 mo:flex-col  pt-16"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce py-10 pl-[1.875rem] flex mo:flex-col justify-between mo:px-5 "
        >
          <div>
            <span className="font-medium text-2xl font-Ubuntu text-black ">
              What Is ARO?
            </span>
            <div className=" text-[#000000CC] pt-5 mo:text-[13px] ">
              ARO is building a decentralized, intelligent edge cloud for
              real-time content and AI delivery. Backed by a team with $140M+ in
              annual revenue and 1.5M+ edge nodes deployed.
            </div>
            <div className=" text-[#000000CC] pt-5 mr-5 mo:pr-0  mo:text-[13px]">
              We’re not pitching a future — we’re scaling a proven foundation.
            </div>
            <div className="text-[#000000CC] mo:text-[13px] ">Now open to the crowd.</div>
          </div>
          <div className="w-full  flex justify-end items-end mo:justify-center pr-5 mo:pt-[1.875rem] ">
            <img src="../enreach-AI.svg" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  aos-init aos-animate  tab-Introduce w-full  py-10 px-5"
        >
          <span className="font-medium text-2xl font-Ubuntu text-black">
            Why It Matters
          </span>
          <div className="flex flex-col mt-5  mo:text-[13px] ">
            <div>
              <div className=" text-[#000000CC]">
                <div>• $154.7B market for Edge Cloud by 2030</div>
                <div className="pt-1">• $66.4B market for Edge AI by 2030</div>
              </div>
              <div className="text-xs">
                (Grand View Research, Gartner, Sky Quest)
              </div>
            </div>
            <div className="flex pt-5 flex-col w-full text-black">
              <span>Backed by a proven team:</span>
              <div className="flex justify-between mo:flex-col gap-10 pt-2">
                <div className="flex flex-col w-full gap-2 ">
                  <span>• 1.5M+ nodes deployed</span>
                  <span>• $140M+ in annual revenue</span>
                  <span>• Real enterprise demand secured</span>
                </div>
                <div className=" flex justify-end items-end mo:justify-center ">
                  <img src="../up.svg" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AAboutEnReach;
