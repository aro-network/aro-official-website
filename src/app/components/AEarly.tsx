const AEarly = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="  aos-init aos-animate   w-container m-auto flex px-[170px] mo:px-5 pt-[6.25rem]   md:px-[60px] md:w-full  mo:w-full  flex-col"
    >
      <div className="w-full  absolute ng:hidden flex justify-end  mt-10 translate-x-[-40px] ">
        <img
          src="../spots.png"
          width={118}
          height={118}
          className=" object-contain relative top-[-6.25rem] w-[7.375rem] h-[7.375rem] "
        />
      </div>
      <div className=" bg-[#1C73FF0F] rounded-[2.5rem] py-6 px-11 mo:px-5">
        <div className="flex">
          <div className=" font-Ubuntu text-[2.75rem] mo:text-[1.75rem] font-medium mo:w-full text-[#1C73FF] ">
            You’re Early
          </div>
        </div>
        <div className="flex gap-[4.875rem]  mo:h-full w-full justify-between">
          <div>
            <div className="text-black text-base font-bold leading-6 pt-[.625rem]">
              Only 100 spots available for our first{" "}
              <button
                onClick={() =>
                  window.open("https://docs.enreach.network/campaigns/pioneer")
                }
                className=" underline underline-offset-1 relative z-[100000] "
              >
                Pioneers cohort
              </button>{" "}
              .
            </div>
            <div className="text-[#000000] text-base pt-5">
              <div>As a Pioneer, you’ll get:</div>
              <div className="flex">
                <div>
                  {"\u00A0"}•{"\u00A0"}
                </div>
                <div>
                  Early access to Edge Nodes hardware and exclusive rewards.
                </div>
              </div>
              <div className="flex">
                <div>
                  {"\u00A0"}•{"\u00A0"}
                </div>
                Become a co-creator of ARO and get rewarded for your
                contributions.
              </div>
            </div>
            <div className="text-[#1C73FF] pt-5 text-base">
              Be more than a user.
            </div>
            <div className="text-[#1C73FF] text-base">
              Help build the new open internet.
            </div>

            {/* <div className="text-[#1C73FF] text-base underline underline-offset-1 mt-5">
            Learn more about Pioneer Program
          </div> */}
          </div>
        </div>
      </div>
      <div className=" flex mo:hidden relative w-full  ">
        <img
          src="../spots.png"
          className=" absolute  w-[16.375rem] h-[16.375rem] right-0 top-[-230px] mr-10 "
        />
      </div>
    </div>
  );
};

export default AEarly;
