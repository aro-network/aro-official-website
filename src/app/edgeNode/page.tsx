'use client'
import AFooter from "../components/AFooter"
import AHeader from "../components/AHeader"
import { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
import ATabs, { ATabsRef, FormField } from "../components/ATab";
import { baseUrl } from "../utils/common";
import { toast } from "sonner";


const AEdgeNode = () => {
  const tabsRef = useRef<ATabsRef>(null)

  const initMap = async () => {
    am5.addLicense("AM5M-7163-0147-1745-7749");
    const root = am5.Root.new("bgChart");

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
      fill: am5.color('#151515'),
      stroke: am5.color('#151515'),
      strokeWidth: 1.5,
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


  const fields: FormField[] = [
    { name: "email", maxLength: 50, label: "Your Email", type: "email", validation: { required: "Email is required" } },
    { name: "account", maxLength: 50, label: "If you have an ARO account, please specify:", type: "text" },
    {
      name: "resources",
      label: "What type of resources do you have to run an Edge Node?",
      type: "checkbox",
      allowMultiple: false,
      options: [
        { label: "Idle bandwidth and devices at home", value: "home" },
        { label: "Dedicated servers (on cloud, workstation, etc.)", value: "dedicated" },
        { label: "I don’t currently have any resource", value: "none" },
      ],
    },
    { name: "location", label: "Please specify your location if you have resources available:", type: "text" },
    {
      name: "testnet",
      label: "Are you interested in participating in ARO testnet?",
      type: "checkbox",
      allowMultiple: false,
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
      validation: { required: "Please select an option" },
    },
    { name: "experience", label: "If you have past experiences in similar node operation activities, please specify:", type: "textarea" },
  ];

  let isSubmiting = false
  const handleSubmit = (data: Record<string, string[]>) => {
    if (isSubmiting || !data.email) return
    isSubmiting = true
    data.resources = typeof data.resources === 'boolean' ? [''] : data.resources.filter((item: string) => item)

    fetch(baseUrl + '/suggest/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        suggest: data
      }),
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Submit  successfully！');
        tabsRef.current?.resetAllField()
      })
      .catch(() => {
        toast.error('Submit  failed, please try again later!');
      }).finally(() => {
        isSubmiting = false
      })
  };


  return <div>
    <AHeader />
    <div className=" llg:w-container m-auto llg:px-0 w-full px-[30px] ">
      <div className="mt-[80px] text-[#FFF] text-[60px]   mo:text-[28px] font-bold leading-normal text-center">
        ARO Edge Node
      </div>
      <div className=" mt-[30px]  llg:w-full text-[30px] md:text-2xl font-medium leading-normal llg:px-[160px] w-full  md:text-center mo:text-lg">
        ARO is an Edge Cloud that allows everyone to contribute resources
        from the edge in global regions. Tell us more about your information if
        you are interested in running an ARO Edge Node in the coming mainnet.
      </div>
      <ATabs
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
        ref={tabsRef}
      />
    </div>

    <div className=" w-container m-auto md:w-full">
      <div className=" w-full h-[70vw] left-[50px] mo:translate-y-[-1750px]  mo:left-0  translate-y-[-1900px]   fixed z-[-10000]" id="bgChart" ></div>
    </div>
    <AFooter />


  </div >

}

export default AEdgeNode
