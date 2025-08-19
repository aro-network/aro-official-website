'use client'
import React from "react";
import { cn } from "@/app/utils/cn";
import TitleText from "./ATitleText";
import LinerGridentBorder from "./LinerGridentBorder";
import AosAnimItem from "./AosAnimItem";


function MBtn({ type = '1', className, onClick, content, contentClassName, ref }: { type?: '1' | '2' | "3", className?: string, onClick?: () => void, content?: React.ReactNode, contentClassName?: string, ref?: React.Ref<HTMLDivElement> }) {
  return <div className={cn('cursor-pointer text-sm select-none rounded-full w-fit transition-all bg-no-repeat hover:animate-bg-in', {
    'text-[#A6A7AD] hover:bg-btn hover:text-[#11111C]': type == '1',
    'bg-btn text-[#11111C] hover:bg-btnHover borderLinerGridentL2 border': type == '2',
    "bg-white/10 text-white text-left text-base h-[48px] flex items-center": type == '3',
  }, className)} onClick={onClick} ref={ref as any}>
    <div className={cn("select-none w-fit rounded-full transition-all", {
      'px-2 py-1': type == '1',
      'px-9 py-3.5  hover:bg-btn hover:bg-clip-text hover:text-transparent transition-all bg-no-repeat hover:animate-bg-in': type == '2',
      "px-6": type == '3',
    }, contentClassName)}>
      {content}
    </div>
  </div>
}

const Badge = ({ className, children, ...props }: { className?: string; children: React.ReactNode;[key: string]: any }) => {
  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Button = ({ className, children, ...props }: { className?: string; children: React.ReactNode;[key: string]: any }) => {
  return (
    <button className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${className}`} {...props}>
      {children}
    </button>
  );
};



const CardContent = ({ className, children, ...props }: { className?: string; children: React.ReactNode;[key: string]: any }) => {
  return (
    <div className={`p-5 pt-5 ${className}`} {...props}>
      {children}
    </div>
  );
};

const NodeSelectionSection = () => {
  // const [extensionInfo, setExtensionInfo] = useState<{ "version"?: string, "downloadUrl"?: string }>({ version: '', downloadUrl: '' })
  // const router = useRouter();

  const handleOrderClick = (url: string) => {
    if (!url) return
    window.open(url)
  };


  // const fetchExtensionInfo = async () => {
  //   fetch('https://preview-api.aro.network/api/common/liteNode/lastest')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log('aasdasdas', res?.data!);

  //       setExtensionInfo(res?.data?.version! || '0.0.1')
  //     })
  // }

  // useEffect(() => {
  //   fetchExtensionInfo()
  // }, [])


  const nodeOptions = [
    {
      id: "aro-pod",
      title: "ARO Pod",
      image: "/aro-pod.png",
      buttonText: "Order ARO Pod",
      description: [
        "• A plug-and-play device that runs 24/7 with low energy use.",
        "• Best for household runners.",
      ],
      metrics: [
        "Cost: $",
        "Rewards: ⭐⭐⭐",
        "User-friendly: ⭐⭐⭐"
      ],
      comingSoon: false,
      docs: "https://docs.aro.network/user-guides/device-setup",
      url: 'https://shop.aro.network',
      gradient:
        "p-5 box-border bg-[linear-gradient(0deg,rgb(255,255,255,0.06),rgb(255,255,255,0.06))," +
        "linear-gradient(124.57deg,rgb(0,255,13,0.5)_-10.04%,rgb(115,115,115,0)_38.35%)] " +
        "backdrop-blur-[12px] rounded-3xl flex-none order-0"
    },
    {
      id: "aro-link",
      title: "ARO Link",
      image: "/aro-link.png",
      buttonText: "Order ARO Link",
      description: [
        "• A Wi-Fi router with a built-in ARO node.",
        "• Ideal for business use.",
      ],
      docs: "https://docs.aro.network/user-guides/device-setup",
      metrics: [
        "Cost: $$",
        "Rewards: ⭐⭐⭐",
        "User-friendly: ⭐⭐⭐"
      ],
      url: '',
      comingSoon: true,
      gradient:
        "text-left flex flex-col justify-between smd:justify-start " +
        "bg-[linear-gradient(0deg,rgb(255,255,255,0.06),rgb(255,255,255,0.06)),linear-gradient(281.06deg,rgb(0,255,13,0.5)_-9.12%,rgb(115,115,115,0)_39.24%)] backdrop-blur-[12px] rounded-3xl flex-none order-3"
    },

    {
      id: "aro-client",
      title: "ARO Client",
      image: "/aro-client.png",
      buttonText: "Download .ISO",
      description: [
        "• A software image for your server or PC.",
        "• Perfect for pro users with strong internet.",
      ],
      metrics: [
        "Cost: your device",
        "Rewards: Flexible",
        "User-friendly: ⭐"
      ],
      docs: " https://docs.aro.network/user-guides/software-setup",

      comingSoon: false,
      url: "https://download.aro.network/images/aro-client-latest.iso",
      gradient:
        "bg-[linear-gradient(0deg,rgb(255,255,255,0.06),rgb(255,255,255,0.06)),linear-gradient(124.57deg,rgb(0,255,13,0.5)_-10.04%,rgb(115,115,115,0)_38.35%)] backdrop-blur-[12px] rounded-3xl flex-none order-0"
    },
    {
      id: "aro-lite",
      title: "ARO Lite",
      image: "/aro-lite.png",
      buttonText: `Download Extension`,
      description: [
        "• A lightweight browser extension.",
        "• Runs with zero cost and minimal effort.",
      ],
      metrics: [
        "Cost: 0",
        "Rewards: ⭐",
        "User-friendly: ⭐⭐⭐"
      ],
      docs: "https://docs.aro.network/user-guides/aro-lite/",

      comingSoon: false,
      url: "https://chromewebstore.google.com/detail/aro-lite/dehgjeidddkjakjgnmpccdkkjdchiifh?hl=en-US&utm_source=ext_sidebar",
      gradient:
        "bg-[linear-gradient(0deg,rgb(255,255,255,0.06),rgb(255,255,255,0.06)),linear-gradient(124.57deg,rgb(0,255,13,0.5)_-10.04%,rgb(115,115,115,0)_38.35%)] backdrop-blur-[12px] rounded-3xl flex-none order-0"
    },

  ];


  const maxWidthClassName = 'max-w-[1140px] w-full mx-auto px-4 mo:px-5';

  return (
    <div className={cn("flex flex-col items-center overflow-hidden", maxWidthClassName)}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(27.5rem,1fr))] mo:grid-cols-1 w-full gap-5 mo:gap-4">
        {nodeOptions.map((node, index) => (
          <LinerGridentBorder
            key={node.id}
            type={`${index == 3 ? '7' : '1'}`}
            data-aos="fade-top"
            data-aos-duration="1000"
            className="aos-init aos-animate rounded-3xl"
          // className="flex w-full max-w-[544px] h-auto max-h-[216px] items-center gap-[30px] mo:gap-4 p-5 mo:p-4 mo:flex-col mo:text-center rounded-3xl border-2 border-solid border-transparent backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] relative overflow-hidden"
          // style={{
          //   background: `padding - box linear - gradient(0deg, rgba(255, 255, 255, 0.06) 0 %, rgba(255, 255, 255, 0.06) 100 %), border - box ${ node.gradient } `,
          //   backgroundClip: 'padding-box, border-box',
          // }}
          >
            <CardContent className="p-5 mo:p-4 flex items-center gap-[30px] mo:flex-col mo:gap-4 w-full  h-full mo:h-auto">
              <div className="inline-flex flex-col justify-between mo:items-center gap-4 relative flex-[0_0_auto] mo:w-full  h-full">
                <div className=" w-full h-[130px]  rounded-lg mo:h-[130px]  p-5 ">
                  <div
                    className="bg-center bg-no-repeat bg-contain relative h-full"
                    style={{ backgroundImage: `url(${node.image})` }}
                    aria-label={`${node.title} image`}
                  />
                </div>

                <Button
                  onClick={() => node.comingSoon ? null : handleOrderClick(node.url)}
                  className={`flex w-[196px] ${node.comingSoon ? '!cursor-not-allowed' : 'cursor-default'} mo:w-full h-[30px] mo:h-[36px] items-center justify-center gap-2.5 px-9 mo:px-6 py-0 mo:py-1 rounded-3xl shadow-[0px_4px_4px_#00000040,inset_-1px_-1px_5.8px_#8b8b8b3b] bg-[linear-gradient(90deg,rgba(113,255,108,1)_0%,rgba(193,249,103,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(113,255,108,0.9)_0%,rgba(193,249,103,0.9)_100%)] cursor-pointer`}>
                  <span className="relative w-fit [font-family:'Albert_Sans',Helvetica] font-medium text-[#11111c] text-xs mo:text-sm tracking-[0] leading-[normal] whitespace-nowrap mo:text-center">
                    {node.buttonText}
                  </span>
                </Button>
              </div>

              <div className="flex flex-col w-[265px] mo:w-full items-start gap-2.5 mo:gap-4 relative  h-full justify-between">
                <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <h3 className="w-fit mt-[-1.00px] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap relative [font-family:'Poppins',Helvetica]">
                      {node.title}
                    </h3>

                    {node.comingSoon && (
                      <Badge className="inline-flex items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] bg-[#02b421] rounded">
                        <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] tracking-[0.08px] leading-[8px] whitespace-nowrap">
                          Coming Soon
                        </span>
                      </Badge>
                    )}
                  </div>

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[19.5px]">
                    {node.description.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < node.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="relative w-fit self-start [font-family:'Poppins',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[19.5px]">
                  {node.metrics[0]}
                  <br />
                  {node.metrics[1]}
                  <br />
                  {node.metrics[2]}
                </div>
                <button onClick={() => window.open(node.docs, '_blank')} className="text-[#568AFF] text-xs underline underline-offset-1">User Guide</button>

              </div>
            </CardContent>
          </LinerGridentBorder>
        ))}
      </div>
    </div>
  );
};

const EarningStepsSection = () => {
  const maxWidthClassName = 'max-w-[1140px] w-full mx-auto px-4 mo:px-5';
  return (
    <div className="flex flex-col items-center gap-11 mo:gap-8">
      <TitleText text="Get Started in 3 Steps" />
      <div className={cn("grid grid-cols-3 gap-11 mo:grid-cols-1 mo:gap-5", maxWidthClassName)}>
        <LinerGridentBorder type="2" className="rounded-3xl">
          <div className="px-6 mo:px-4 pt-5 mo:pt-4 pb-12 mo:pb-8 flex flex-col items-center gap-[30px] mo:gap-5">
            <div className="w-full text-white font-medium text-xl mo:text-lg font-Space_Grotesk">1. Install it</div>
            <img alt="Install it" src="/installnodes.svg" className="w-[190px] h-[220px] mo:w-[140px] mo:h-[160px]" />
          </div>
        </LinerGridentBorder>
        <LinerGridentBorder type="3" className="rounded-3xl">
          <div className="px-6 mo:px-4 pt-5 mo:pt-4 pb-12 mo:pb-8 flex flex-col items-center gap-[30px] mo:gap-5">
            <div className="w-full text-white font-medium text-xl mo:text-lg font-Space_Grotesk">2. Run it</div>
            <img alt="Run it" src="/runit.svg" className="w-[244px] h-[183px] mo:w-[180px] mo:h-[135px] mt-8 mo:mt-4" />
          </div>
        </LinerGridentBorder>
        <LinerGridentBorder type="4" className="rounded-3xl">
          <div className="px-6 mo:px-4 pt-5 mo:pt-4 pb-12 mo:pb-8 flex flex-col items-center gap-[60px] mo:gap-8 justify-between">
            <div className="w-full text-white font-medium text-xl mo:text-lg font-Space_Grotesk">3. Start Earning</div>
            <div className="flex flex-col gap-10 mo:gap-6 px-6 mo:px-4  w-full">
              <div className="text-xs mo:text-xs text-[#969696] flex flex-col gap-2 mo:gap-1">
                <div className="flex items-center gap-2 text-base mo:text-sm font-medium text-white">
                  <img alt="Earn" src="/earn.svg" className="w-[30px] h-[30px] mo:w-[24px] mo:h-[24px]" />
                  Earn $ARO Rewards
                </div>
                Stack Jades during Testnet, convert them to $ARO tokens at mainnet launch.
              </div>
              <div className="text-xs mo:text-xs text-[#969696] flex flex-col gap-2 mo:gap-1">
                <div className="flex  gap-2 text-base mo:text-sm font-medium text-white">
                  <img alt="Earn" src="/friends.svg" className="w-[30px] h-[30px] mo:w-[24px] mo:h-[24px]" />
                  Recommend
                </div>
                Refer your friend and earn extra 15% commission.
              </div>
            </div>
          </div>
        </LinerGridentBorder>
      </div>
    </div>
  );
};
const GetStartedSection = () => {
  const dashboardSignup = "https://dashboard.aro.network/signup";

  return (
    <AosAnimItem className="flex justify-center w-full">
      <MBtn
        type="2"
        onClick={() => window.open(dashboardSignup, '_blank')}
        content="Get Started Now"
        className={cn(' mo:mt-8 font-Space_Grotesk text-lg mo:text-base px-12 ')}
      />
    </AosAnimItem>
  );
};

interface AGetANodeProps {
  children?: React.ReactNode;
  className?: string;
}

export const AGetANode: React.FC<AGetANodeProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full bg-black relative overflow-hidden ", className)}>
      <div
        className="w-container  flex justify-center m-auto md:w-full mo:w-full  h-full bg-bottom  bg-contain bg-no-repeat bg-[url(/GetANodePicture/bg1.png)]">


        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute w-[1000px] h-[1000px] mo:w-[600px] mo:h-[600px] top-0 left-1/2 transform -translate-x-1/2 bg-[#5cc92e] opacity-50 rounded-[500px] mo:rounded-[300px] blur-[180px] mo:blur-[120px]" />
        </div>

        <div className="relative z-10 pb-20 mo:pb-12 ">
          <div className="pt-[184px] mo:pt-[120px] pb-16 mo:pb-10">
            <div className="flex flex-col items-center gap-6 mo:gap-4 m-auto  px-16 mo:px-6">
              <h1 className="bg-[linear-gradient(353deg,rgba(0,228,42,1)_17%,rgba(255,255,255,1)_59%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-[55px] mo:text-[30px] mo:tracking-[-1.50px] leading-[60.5px] mo:leading-[33px] text-center">
                Pick Your ARO Node
              </h1>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#d3d3d6] text-lg mo:text-sm text-center tracking-[0] leading-[28.8px] mo:leading-[22.4px] max-w-[850px] mo:max-w-[400px] px-4 mo:px-2">
                Explore ARO Network&apos;s diverse nodes—hardware, software, and browser extensions—then choose the perfect ARO Node for you.
              </p>
            </div>
          </div>

          <div className="pb-20 mo:pb-12">
            <NodeSelectionSection />
          </div>

          <div className="pb-20 mo:pb-12">
            <EarningStepsSection />
          </div>

          <div>
            <GetStartedSection />
          </div>

          {children && (
            <div className="relative z-10">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default AGetANode;