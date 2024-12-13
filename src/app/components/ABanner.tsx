
'use client'
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SocialButtons } from "./social-buttons";
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




  return <div className=" overflow-hidden mo:w-full  ">
    <div className="w-container m-auto items-center flex lg:pl-[105px] md:w-full md:pl-0  mb-[-120px] mo:w-full   ">
      <div className="   flex items-center  w-full h-[83vh] mo:h-[65vh]  relative">
        <div className="  md:w-full overflow-hidden mo:w-full mo:text-center mo:mb-[100px]">
          <div className='mo:hidden text-[70px] md:text-[55px] text-nowrap  abcgintoText font-semibold md:px-[30px] text-[#FFFFFF] md:lead-[71px]  leading-[91px] relative z-[100000]'><div>The Genesis of Open Edge,</div> for the AI Era.</div>
          <div className='lg:hidden text-2xl    abcgintoText  font-medium   text-[#FFFFFF] leading-normal relative z-[1000]'><div>The Genesis of Open Edge, </div> for the AI Era.</div>

          <div className="text-[32px]  mo:text-xs md:text-[28px] lg:text-nowrap  py-3 mo:px-[77px]  leading-[38px] font-semibold md:px-[30px] asText text-[#7C7C7C] relative z-[99999]">Unleashing Intelligence with a Globally-Connected Edge Cloud.</div>
          <div className=" pt-5 flex mo:mt-[50px]  items-center gap-10 mo:gap-[15px] md:px-[30px] mo:flex-col-reverse relative z-[99999]">
            <a href={'https://docs.enreach.network'} target="_blank" className="bg-[#4281FF]   text-[#FFFFFF] w-[229px] mo:w-[178px] items-center text-2xl mo:text-base mo:font-medium font-semibold leading-9  flex justify-center h-[50px] mo:h-[38px] rounded-3xl ipsText p-3">Learn More</a>
            <SocialButtons />
          </div>
        </div>
      </div>
      <div className=" w-full  mo:absolute mo:flex mo:justify-center">
        <div id="chartdiv" className=" relative right-80  mo:left-0 mo:w-[500px] mo:h-[500px] mo:pb-0  pb-20  bottom-[70px] "></div>
      </div>
    </div>


  </div>

}


export default ABanner