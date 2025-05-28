const AWhatDrivesUs = () => {

  return <div data-aos="fade-up"
    data-aos-duration="1500"
    className=" w-container m-auto md:w-full mo:w-full mt-[138px] mo:pb-[56px] mo:mt-[90px] mo:px-5 ">
    <div className="ml-[98px] mo:ml-0 md:ml-[50px]">
      <img src="./whatDrivesUs.svg" className="mo:h-[24px]" />
      <div className=" font-semibold text-[65px] mo:text-xl leading-normal mt-[100px] mo:mt-[10px]">
        <div>
          Accelerating Innovation with
        </div>
        <div >
          <span className="text-[#4281FF]">
            Edge-First Infrastructure
          </span>
          <span>.</span>
        </div>
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className=" mt-[118px] mo:mt-6 flex items-center w-full gap-[177px] md:gap-[100px] md:pb-10">
        <div className="text-2xl mo:text-xs font-normal font-AlbertSans leading-normal w-[40%] mo:w-full flex flex-col gap-10 mo:gap-5">
          <div>
            The cloud is too “far” to deliver the real-time responsiveness needed for today’s digital experiences demand. ARO is leading the shift from centralized clouds to edge-first networks, unlocking real-time capabilities and efficiency for AI and next-gen applications.
          </div>
          <div>
            Our edge cloud transforms fragmented resources into a seamless, scalable system, ensuring the future of innovation happens where it’s needed most—right at the edge.
          </div>
        </div>
        <div className="w-[60%] mo:hidden relative top-3">
          <img src="./edge.gif" className="bg-cover " />
        </div>
      </div>
    </div>
  </div>

}

export default AWhatDrivesUs