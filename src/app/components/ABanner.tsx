
'use client'
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SocialButtons } from "./social-buttons";
import CountUp from "react-countup";
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



  return <div className=" lg:overflow-hidden mo:w-full ">

    <div className="w-container md:w-full mo:mx-[30px]  md:px-[30px] m-auto lg:flex justify-end ">
      <div className="w-[500px] mo:w-[200px]   pt-10 " id="chartdiv"></div>
    </div>

    <div className="w-container m-auto items-center flex lg:pl-[105px] md:w-full md:pl-0  mb-[-120px] mo:w-full  ">
      <div className="  relative z-[100000] bottom-[700px] mo:bottom-[900px] md:w-full overflow-hidden mo:w-full mo:text-center">
        <div className='mo:hidden text-[80px] md:text-[62px] text-nowrap  abcgintoText font-semibold md:px-[30px] text-[#FFFFFF]   leading-[91px] relative z-[100000]'><div>The Genesis of Open Edge,</div> for the AI Era.</div>
        <div className='lg:hidden text-2xl     abcgintoText  font-medium   text-[#FFFFFF] leading-normal relative z-[100000]'><div>The Genesis of Open </div> Edge,for the AI Era.</div>

        <div className="text-[32px]  mo:text-xs md:text-[28px] py-3 mo:px-[77px]  leading-[38px] font-semibold md:px-[30px] asText text-[#7C7C7C]">Unleashing Intelligence with a Globally-Connected Edge Cloud.</div>
        <div className=" pt-5 flex mo:mt-[100px]  items-center gap-10 md:px-[30px] mo:flex-col-reverse">
          <a href={'https://docs.enreach.network'} target="_blank" className="bg-[#4281FF]   text-[#FFFFFF] w-[229px] items-center text-2xl font-semibold leading-9  flex justify-center h-[50px] rounded-3xl ipsText p-3">Learn More</a>
          <SocialButtons />

        </div>
      </div>
    </div>

    <div data-aos="fade-up"
      data-aos-duration="1000"
      className=" aos-init aos-animate  text-[#FFFFFF] bg-[#0C0C0C] relative bottom-[60px]  ">
      <div className="w-container m-auto  py-[60px]  md:w-full ">
        <div className="mx-[80px] md:mx-[30px] abcgintoText flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-[60px] md:text-[50px] font-semibold leading-[72px]">
              <CountUp start={0} end={1000000} duration={3} />+
            </span>
            <span className="text-xl font-medium leading-6 asText">Unlimited Edge Scalability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] md:text-[50px]  font-semibold leading-[72px]">
              {`<`}{<CountUp start={100} end={1} duration={3} />}{`%`}
            </span>
            <span className="text-xl font-medium leading-6 asText">Stuttering Rate </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] md:text-[50px]  font-semibold leading-[72px]">
              {`>`}{<CountUp start={100} end={60} duration={3} />}{`%`}
            </span>
            <span className="text-xl font-medium leading-6 asText">Save on Traffic </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[60px] md:text-[50px]  font-semibold leading-[72px]">
              {`<`}{<CountUp start={100} end={20} duration={3} />}ms

            </span>
            <span className="text-xl font-medium leading-6 asText">Response Time</span>
          </div>

        </div>
      </div>
    </div>
  </div>

}


export default ABanner