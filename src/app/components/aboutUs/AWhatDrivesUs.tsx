const AWhatDrivesUs = () => {

  return <div data-aos="fade-up"
    data-aos-duration="1500"
    className=" w-container m-auto md:w-full mt-[138px] ">
    <div className="ml-[98px] md:ml-[50px]">
      <img src="./whatDrivesUs.svg" />
      <div className="abcgintoText font-medium text-[50px] leading-normal mt-20">
        <div>
          Accelerating Innovation with
        </div>
        <div className="text-[#4281FF]">
          Edge-First Infrastructure.
        </div>
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className=" mt-[118px] flex items-center w-full gap-[177px] md:gap-[100px] md:pb-10">
        <div className="text-2xl font-normal asText leading-normal w-[40%] flex flex-col gap-10">
          <div>
            The cloud is too “far” to deliver the real-time responsiveness needed for today’s digital experiences demand. EnReach is leading the shift from centralized clouds to edge-first networks, unlocking real-time capabilities and efficiency for AI and next-gen applications.
          </div>
          <div>
            Our edge cloud transforms fragmented resources into a seamless, scalable system, ensuring the future of innovation happens where it’s needed most—right at the edge.
          </div>
        </div>
        <div className="w-[60%] relative top-3">
          <img src="./edge.gif" className="bg-cover " />
        </div>

      </div>
    </div>

  </div>

}

export default AWhatDrivesUs