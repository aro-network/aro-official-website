const AAboutEnReach = () => {


  return <div
    className="   flex-col h-auto  w-container m-auto flex px-[170px] mb-5 mo:px-5 mo:pt-[3.125rem] md:px-[40px] md:w-full  mo:w-full ">
    <div className="text-center text-black text-[2.75rem] font-medium mo:text-[1.75rem] "><span>EnReach Network</span></div>
    <div data-aos="fade-up"
      data-aos-duration="1000" className=" aos-init aos-animate flex gap-5 mo:flex-col mo:pt-[1.875rem] pt-16 ">
      <div data-aos="fade-up"
        data-aos-duration="1000"
        className="  aos-init aos-animate  tab-Introduce py-10 pl-[1.875rem] flex mo:flex-col justify-between mo:pr-[1.875rem] ">
        <div>
          <span className="font-medium text-2xl font-Ubuntu text-black ">What Is EnReach?</span>
          <div className=" text-[#000000CC] pt-5 ">
            EnReach is building a decentralized, intelligent edge cloud for real-time content and AI delivery. Backed by a team with $200M+ in annual revenue and 1.5M+ edge nodes deployed.
          </div>
          <div className=" text-[#000000CC] pt-5 mr-5 ">
            We’re not pitching a future — we’re scaling a proven foundation.
          </div>
          <div className="text-[#000000CC] ">
            Now open to the crowd.

          </div>
        </div>
        <div className="w-full  flex justify-end items-end mo:justify-center mo:pt-[1.875rem] ">
          <img src="../enreach-AI.svg" />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  aos-init aos-animate  tab-Introduce w-full  py-10 px-[1.875rem]">
        <span className="font-medium text-2xl font-Ubuntu text-black">Why It Matters</span>
        <div className="flex flex-col mt-5 ">
          <div>
            <span className="text-[#000000CC]">
              $154.7B market for Edge Cloud & P2P CDN by 2030
              $66.4B market for Edge AI by 2030
            </span>
            <div className="text-xs" >
              (Grand View Research, Gartner, Sky Quest)
            </div>
          </div>
          <div className="flex pt-5 flex-col w-full">
            <span>
              Backed by a proven team:
            </span>
            <div className="flex justify-between mo:flex-col gap-10 pt-2">
              <div className="flex flex-col w-full gap-2 ">
                <span>
                  • 1.5M+ nodes deployed
                </span>
                <span>
                  • $200M+ in annual revenue
                </span>
                <span>
                  • Real enterprise demand secured
                </span>

              </div>
              <div className=" flex justify-end items-end mo:justify-center ">
                <img src="../up.svg" />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>


}

export default AAboutEnReach