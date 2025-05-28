import { titleList } from "../utils/common"

const AIntelligence = () => {

  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate bg-[#000000]">
    <div className="flex items-center m-auto w-container mo:w-full md:w-full  mo:flex-col mo:justify-center ">
      <div className="w-[40%] mo:w-full h-[calc(762px)] mo:h-[260px] ">
        <img src="./line-enreach.png" className="object-fill w-full h-full bg-cover mo:hidden" />
        <img src="./mo-line-enreach.jpg" className=" w-full h-full bg-cover lg:hidden " />

      </div>
      <div className="w-[60%]  mo:w-full mo:px-5  h-[600px] mo:h-auto md:mx-[30px] flex  flex-col lg:justify-center md:pl-[10px] lg:items-baseline mo:mt-10">
        <span className=" mo:hidden font-semibold  text-[70px] mo:text-[22px] mo:leading-normal  md:text-[50px] md:leading-[70px] leading-[91.84px]  text-[#FFFFFF]">
          Fueling  <span className="text-[#4281FF] mr-2">
            Edge Apps
          </span>
          <div>
            &
            <span className="text-[#4281FF] ml-4 ">
              AI
            </span>
          </div>

        </span>
        <span className="lg:hidden text-center w-full font-semibold mo:text-[22px] mo:leading-normal  text-[#FFFFFF]">
          Fueling  <span className="text-[#4281FF] mr-2">
            Edge Apps
          </span>
          &
          <span className="text-[#4281FF] ml-2 ">
            AI
          </span>
        </span>
        <div className=" ml-[54px] mo:mx-5 mr-[142px] md:ml-0 mt-5 mb-10">
          <div className="text-[#7C7C7C] font-normal mo:text-center mo:text-[10px] mo:leading-[150%] font-AlbertSans text-2xl leading-7">
            A permissionless network enables diverse AI Apps to thrive. ARO redefines digital experiences by delivering AI Apps from the edge.
            <div className="flex gap-5 mt-5 w-full mo:justify-center ">
              {titleList.map((item, index) => {
                return <div key={`text_${index}`} className="border-[#4281FF] cursor-default border  text-[#FFFFFF]  w-[190px] mo:w-[120px] items-center leading-9  flex justify-center h-[50px] mo:h-[28px]  rounded-3xl  font-AlbertSans p-3 mo:p-0">
                  {item.title}
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default AIntelligence