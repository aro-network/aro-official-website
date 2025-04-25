
'use client'
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";

const ABanner = () => {

  const initMap = async () => {
    am5.addLicense("AM5M-7163-0147-1745-7749");
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoOrthographic(),
        panX: "rotateX",
        panY: "rotateY",
        wheelX: "none",
        wheelY: "none",
      })
    );

    chart.set("zoomLevel", 1);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_continentsLow.default,
      })
    );

    const graticuleSeries = chart.series.unshift(
      am5map.GraticuleSeries.new(root, { step: 20 })
    );

    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color('#FFFFFF'),
      strokeOpacity: 0.1
    });


    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      fill: am5.color('#2E2E2E'),
      stroke: am5.color('#2E2E2E'),
      strokeWidth: 1.5,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color('#4281ff'),

    });

    chart.animate({
      key: "rotationX",
      to: 360,
      duration: 30000,
      loops: Infinity,
    });
  }

  useEffect(() => {
    initMap()
  }, [])




  return <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate  mo:w-full h-full mo:h-auto" >
    <div className="w-container m-auto flex pl-[100px]  mo:pl-0 mo:flex-col md:w-full md:pl-[3.125rem] mo:mb-0  mo:w-full  h-full  ">

      <div className="   flex  w-full h-full gap-5   pt-[25vh] mo:pt-20 mo:flex-col  ">
        <div className="  md:w-full  mo:w-full mo:text-center relative mo:top-0  py-5">
          <div className=' text-[66px] mo:text-[1.75rem] md:text-[45px] text-nowrap  mo:px-0  font-medium md:px-[30px] text-[#000000] md:lead-[71px] mo:leading-none  leading-[91px] relative z-[9999] font-Ubuntu'><div>   The New Edge of AI</div> </div>
          <div className="text-[28px]  mo:text-xs md:text-[20px] lg:text-nowrap  py-6  mo:py-[.875rem] mo:px-0  leading-[38px] font-semibold md:px-[30px] font-AlbertSans text-[#000000B2] relative z-[9999]">
            Share Your Idle Internet, Earn Rewards,<br />Build a Smarter Web, Together.
          </div>
          <div className=" pt-[3.125rem] mo:pt-0 flex mo:mt-5  items-center gap-10 mo:gap-[15px] md:px-[30px] mo:flex-col-reverse ">
            <button
              onClick={() => {
                document!.getElementById('target-section')!.scrollIntoView({
                  behavior: 'smooth'
                })
              }} className="bg-[#4281FF] text-white ml-[6px] w-[229px] mo:w-[178px] items-center text-2xl mo:text-base mo:font-medium font-semibold leading-9  flex justify-center h-[56px] mo:h-[42px]  rounded-[22.5rem] btn font-AlbertSans p-3">Join Waitlist</button>
          </div>
        </div>
        <div className="w-full h-full   mo:pt-[3.8125rem] top-[-20vh] relative flex items-start mo:top-0 z-[-10000000] ">
          <img alt='earth' src="./newEarth.svg" className="w-full h-full mo:hidden " />
          <img alt='earth' src="./mo-earth.svg" className="w-full h-full ng:hidden " />
        </div>
      </div>


    </div>
  </div>

}


export default ABanner        