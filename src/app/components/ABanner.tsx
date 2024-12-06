
'use client'
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SocialButtons } from "./social-buttons";
import CountUp from "react-countup";
import * as Tooltip from '@radix-ui/react-tooltip';


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

    const response = await fetch(
      "https://cdn.amcharts.com/lib/5/geodata/json/worldLow.json"
    );
    const geoJSON = await response.json();

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: geoJSON,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      fill: am5.color('#2E2E2E'),
      stroke: am5.color('#2E2E2E'),
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



  return <div className="">

    <div className="w-container md:w-full md:px-[30px] m-auto flex justify-end ">
      <div className="w-[500px] pt-10" id="chartdiv"></div>
    </div>

    <div className="w-container m-auto items-center flex pl-[105px] md:w-full md:pl-0  ">
      <div className="  relative z-[100000] bottom-[600px] md:w-full">
        <div className='text-[70px] md:text-[62px] text-nowrap  abcgintoText font-medium md:px-[30px] text-[#FFFFFF]  leading-[91px] relative z-[100000]'><div>The Genesis of Open Edge,</div> for the AI Era.</div>
        <div className="text-[32px] md:text-[28px] pt-2  leading-[38px] font-semibold md:px-[30px] asText text-[#7C7C7C]">Unleashing Intelligence with a Globally-Connected Edge Cloud.</div>
        <div className=" pt-5 flex  items-center gap-10 md:px-[30px]">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="bg-[#4281FF]   text-[#FFFFFF] w-[229px] items-center text-2xl font-semibold leading-9  flex justify-center h-[50px] rounded-3xl ipsText p-3">Learn More</button>
              </Tooltip.Trigger>
              <Tooltip.Content align='center' sideOffset={8} className='select-none rounded-lg bg-gray-900 px-[15px] py-2.5 text-[15px] leading-none text-white'>
                <p>Coming Soon</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <SocialButtons />

        </div>
      </div>
    </div>

    <div data-aos="fade-up"
      data-aos-duration="1000"
      className=" aos-init aos-animate bg-[#0C0C0C] text-[#FFFFFF]">
      <div className="w-container m-auto py-[60px] md:w-full ">
        <div className="mx-[80px] md:mx-[30px] abcgintoText flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-[55px] md:text-[50px] font-medium leading-[72px]">
              <CountUp start={0} end={1000000} duration={3} />
            </span>
            <span className="text-xl font-medium leading-6 asText">Unlimited Edge Scalability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[55px] md:text-[50px]  font-medium leading-[72px]">
              {`<`}{<CountUp start={100} end={1} duration={3} />}{`%`}
            </span>
            <span className="text-xl font-medium leading-6 asText">Stuttering Rate </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[55px] md:text-[50px]  font-medium leading-[72px]">
              {`<`}{<CountUp start={100} end={60} duration={3} />}{`%`}
            </span>
            <span className="text-xl font-medium leading-6 asText">Save on Traffic </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[55px] md:text-[50px]  font-medium leading-[72px]">
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