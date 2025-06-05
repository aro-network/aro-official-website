const AEarly = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="  aos-init aos-animate   w-container m-auto flex px-[170px] mo:px-5 pt-[6.25rem]   md:px-[60px] md:w-full  mo:w-full  flex-col"
    >
      {/* <div className="w-full  absolute ng:hidden flex justify-end  mt-10 translate-x-[-40px] ">
        <img
          src="../spots.png"
          width={118}
          height={118}
          className=" object-contain relative top-[-6.25rem] w-[7.375rem] h-[7.375rem] "
        />
      </div> */}
      <div className=" bg-[#1C73FF0F] rounded-[2.5rem] py-6 px-11 mo:px-5 justify-between flex gap-[7.5rem] mo:gap-0 mo:flex-col">
        <div className="flex flex-col w-[45%] items-center justify-center mo:w-full   mo:items-start" >
          <div className="flex flex-col  h-full  items-center justify-center">
            <div className=" font-Ubuntu  text-left w-full  text-[2.75rem] mo:text-[1.75rem] font-medium mo:w-full text-[#1C73FF] ">
              You’re Early
            </div>
            <div className="text-[#1C73FF] pt-5 text-left text-base  w-full">
              Be more than a user.
            </div>
            <div className="text-[#1C73FF] text-base w-full ">
              Help build the new open internet.
            </div>

          </div>
        </div>
        <div className="flex gap-[4.875rem]  mo:h-full w-full justify-between mo:mt-5">
          <div>
            <div className="text-black text-base font-bold leading-6 pt-[.625rem]">
              We’re inviting early participants to join the {" "}
              <button
                onClick={() =>
                  window.open("https://docs.aro.network/campaigns/pioneer")
                }
                className=" underline underline-offset-1 relative z-[100000] "
              >
                Pioneers Program
              </button>{" "}
              .
            </div>
            <div className="text-[#000000] text-base pt-5">
              <div>As a Pioneer, you’ll:</div>
              <div className="flex">
                <div>
                  {"\u00A0"}•{"\u00A0"}
                </div>
                <div>
                  <div>
                    Get early access to ARO Edge Node :
                  </div>
                  <div className="flex">
                    <div>
                      {"\u00A0"}○{"\u00A0"}
                    </div>
                    ARO Pod & ARO Link (Hardware, limited to Southeast Asia).
                  </div>
                  <div className="flex">
                    <div>
                      {"\u00A0"}○{"\u00A0"}
                    </div>
                    ARO Client (Software).
                  </div>
                  <div className="flex">
                    <div>
                      {"\u00A0"}○{"\u00A0"}
                    </div>
                    ARO Lite (Browser Extension).
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  {"\u00A0"}•{"\u00A0"}
                </div>
                Earn exclusive rewards — including NFTs, Jade Shards, and Discord roles.
              </div>

              <div className="flex">
                <div>
                  {"\u00A0"}•{"\u00A0"}
                </div>
                Gain exclusive access to referral bonus, governance, and early-stage community rounds.
              </div>
            </div>

            {/* <div className="text-[#1C73FF] text-base underline underline-offset-1 mt-5">
            Learn more about Pioneer Program
          </div> */}
          </div>
        </div>
      </div>
      {/* <div className=" flex mo:hidden relative w-full  ">
        <img
          src="../spots.png"
          className=" absolute  w-[16.375rem] h-[16.375rem] right-0 top-[-230px] mr-10 "
        />
      </div> */}
    </div>
  );
};

export default AEarly;
