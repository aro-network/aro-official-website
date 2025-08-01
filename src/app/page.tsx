'use client'

import Aos from "aos"
import "aos/dist/aos.css"
import React, { AllHTMLAttributes, CSSProperties, ReactHTML, Ref, useEffect, useState } from "react"

import { Accordion, AccordionItem } from "@heroui/accordion"
import { useRouter } from "next/navigation"
import { BsTwitterX } from "react-icons/bs"
import { FaTelegramPlane } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import { FiMinus, FiPlus } from "react-icons/fi"
import { RiAppsFill } from "react-icons/ri"
import { cn } from "./utils/cn"
import AHeader from "./components/AHeader"
import { AShowModal } from "./components/AShowModal"


// const pioneers = 'https://enreach.fillout.com/Pioneers'
const dashboarSignup = 'https://dashboard.aro.network/signup'


const maxWidthClassName = 'max-w-[1140px] px-4 w-full mx-auto'

function MBtn({ type = '1', className, onClick, content, contentClassName, ref }: { type?: '1' | '2' | "3", className?: string, onClick?: () => void, content?: React.ReactNode, contentClassName?: string, ref?: Ref<HTMLDivElement> }) {
  return <div className={cn('cursor-pointer text-sm select-none rounded-full w-fit transition-all bg-no-repeat hover:animate-bg-in', {
    'text-[#A6A7AD] hover:bg-btn hover:text-[#11111C]': type == '1',
    'bg-btn text-[#11111C] hover:bg-btnHover borderLinerGridentL2 border': type == '2',
    "bg-white/10 text-white  text-left text-base h-[48px] flex items-center hover:bg-btnHover border borderLinerGridentL2": type == '3',
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

function AosAnimItem({ className, children, as, anim = true, ...props }: AllHTMLAttributes<HTMLDivElement> & { as?: (keyof ReactHTML), anim?: boolean }) {
  const Component = (as ?? "div") as any
  const animProps = anim ? {
    'data-aos': "fade-up",
    'data-aos-duration': "1000"
  } : {}
  return <Component className={cn({ 'aos-init aos-animate': anim }, className)} {...props} {...animProps} >{children}</Component>
}

function TitleText({ text, style = {}, className }: { text: React.ReactNode, style?: CSSProperties, className?: string }) {
  return <AosAnimItem
    style={{
      zIndex: 2,
      boxSizing: 'border-box',
      backgroundImage: 'linear-gradient(314.89deg, #00E42A 21.13%, #FFFFFF 57.73%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      textShadow: 'none',
      ...style
    }}
    className={cn("text-[52px] h-fit font-bold text-transparent w-fit mt-0 mx-auto mb-[44px] mo:text-[28px] mo:mb-[30px] font-Space_Grotesk", className)}>{text}</AosAnimItem>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LinerGridentTypes = ['0', '1', '2', '3', '4', '5', '6'] as const
type LinerGridentType = (typeof LinerGridentTypes)[number]
const LinerGridentMap: { [k in LinerGridentType]: string } = {
  0: 'linear-gradient(to right, ),linear-gradient(to right, #000, #000),linear-gradient(293.4deg, #44F54D -4.55%, #42474D 24.34%)',
  1: 'linear-gradient(111.63deg, #186224 -32.02%, rgba(115, 115, 115, 0) 71.94%),linear-gradient(to right, #000, #000),linear-gradient(114.04deg, #1FFF2A 8.43%, #192626 48.22%, #1FFF2A 98.57%)',
  2: 'linear-gradient(124.57deg, #176123 -10.04%, rgba(115, 115, 115, 0) 38.35%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #42474D 28.51%)',
  3: 'linear-gradient(10.29deg, #1A5426 -19.77%, rgba(115, 115, 115, 0) 40.41%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #4A5A54 28.51%)',
  4: 'linear-gradient(304.57deg, #1A5026 -15.67%, rgba(115, 115, 115, 0) 32.73%),linear-gradient(to right, #000, #000),linear-gradient(293.4deg, #44F54D -4.55%, #42474D 24.34%)',
  5: 'linear-gradient(to right, #000, #000),linear-gradient(to right, #000, #000),linear-gradient(to right, #2D3239,#2D3239)',
  6: 'linear-gradient(124.57deg, #176123 -1000%, rgba(115, 115, 115, 0) 38.35%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #42474D 28.51%)',
}

function LinerGridentBorder({ className, children, type, anim }: { className?: string, children?: React.ReactNode, type: LinerGridentType, anim?: boolean }) {
  return <AosAnimItem anim={anim} style={{
    backgroundClip: 'padding-box, padding-box, border-box',
    backgroundOrigin: 'padding-box, padding-box, border-box',
    border: '1px solid transparent',
    backgroundImage: LinerGridentMap[type]
  }} className={className}>
    {children}
  </AosAnimItem>
}

// function BlurBgItem({ className, children }: { className?: string, children?: React.ReactNode, }) {
//   return <div style={{
//     background: 'no-repeat center/100% url(/bg_blur.svg)'
//   }} className={className}>{children}</div>
// }


function QuteSymbol({ className }: { className?: string }) {
  return <svg className={className} width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.23291 21.0845V15.2891C0.23291 13.6224 0.54541 11.8895 1.17041 10.0902C1.81435 8.27204 2.68556 6.55802 3.78405 4.94818C4.90147 3.31939 6.15147 1.94628 7.53405 0.828857L12.3068 3.92545C11.1894 5.61105 10.2519 7.37242 9.49427 9.20954C8.75564 11.0277 8.39579 13.0353 8.41473 15.2323V21.0845H0.23291ZM14.6363 21.0845V15.2891C14.6363 13.6224 14.9488 11.8895 15.5738 10.0902C16.2178 8.27204 17.089 6.55802 18.1875 4.94818C19.3049 3.31939 20.5549 1.94628 21.9375 0.828857L26.7102 3.92545C25.5928 5.61105 24.6553 7.37242 23.8977 9.20954C23.159 11.0277 22.7992 13.0353 22.8181 15.2323V21.0845H14.6363Z" fill="#00FF0D" />
  </svg>

}

const roundmaps = [
  { time: '2024', tit: 'Laying the Foundations', active: false, content: <>• GPoW (Geographic Proof of Work) & GPoS (Geographic Proof of Stake)<br />• Peer-HVM (Hardware Virtual Machine)<br />• Peer-DTS (Distributed Task Scheduling)<br />• Peer-Routing (Decentralized Routing Layer)</> },
  { time: '2025 Q2-Q3', tit: 'ARO Previewnet', active: true, content: <>• Activating the Network<br />• Community launch<br />• Hardware Offering</> },
  { time: '2025 Q3-Q4', tit: 'ARO Testnet', active: false, content: <>• Proving our model with real demand<br />• Resource aggregation<br />• Kickstarting on-chain revenue</> },
  { time: '2026', tit: 'ARO Mainnet', active: false, content: <>• Mainnet launch<br />• Node expansion<br />• Customer expansion</> },
  { time: '2027', tit: 'Opening the Network', active: false, content: <>• Use cases expansion<br />• Open platform for edge apps<br />• Open governance</> },
]
function RoundMapItem({ data }: { data: (typeof roundmaps)[number] }) {
  const colorClassName = data.active ? 'text-[#00FF0D]' : 'text-white'
  return <AosAnimItem className="flex flex-col gap-3 w-fit">
    <div className={cn("flex items-center gap-2.5 text-base", colorClassName)}>
      <div className={cn("w-4 h-4 border-[3px] rounded-lg border-solid border-current ")}></div>
      <span>{data.time}</span>
    </div>
    <div className={cn("text-[32px] !leading-normal font-bold mo:text-xl font-Space_Grotesk", colorClassName)}>{data.tit}</div>
    <div className="text-[#969696] text-sm !leading-6 mo:text-xs">{data.content}</div>
  </AosAnimItem>
}
function RoumdMaps() {
  return <div className="flex flex-col gap-11 w-fit ml-auto mr-[240px] z-10 max-w-[420px] mo:max-w-full mo:self-start mo:mx-0">
    {roundmaps.map(item => <RoundMapItem key={item.time} data={item} />)}
  </div>
}

const faqText = [
  {
    title: "How Does ARO Network Operate?",
    content:
      "ARO Network creates an open, decentralized edge cloud where you can share your unused bandwidth and earn real rewards. Enterprise customers buy these resources to deliver faster, smarter, and more affordable content—videos, gaming, AI services—to their users. Your contributions are tracked and rewarded fairly.",
  },
  {
    title: "What Stage Is ARO Network Currently In?",
    content: `
    ARO is currently in the Previewnet phase, which means we are still testing the core infrastructure internally with a small group of early participants. We will soon enter the Testnet phase — this is when more participants will be able to join the network, contribute bandwidth, and start earning Jades, which can later be exchanged for $ARO tokens upon Mainnet launch. It’s still very early, and now is the perfect time to get involved if you want to become an early contributor and help shape the future of the ARO decentralized edge cloud!

`,
  },
  {
    title: "What Are Jades?",
    content: `Before Mainnet is live, your contributions to the ARO Testnet will be tracked and reflected as Jade Shards. You will be rewarded with Jades when you participate and make contributions to the ARO Testnet. In some cases, community contributors may receive NFTs as a recognition of their special efforts. The Jades serve as a key metric to determine your eligibility for future rewards. Upon mainnet launch, you can exchange your Jades for $ARO tokens.
`,
  },
  {
    title: "Does Running ARO Nodes Compromise My Privacy?",
    content: `
  No. ARO Nodes will NEVER collect any personal data from your daily operation. The only resource ARO Network wants from you is your idle bandwidth — and nothing else.
`,
  },
];


const socialLinks = [
  { href: 'https://t.me/ARO_Network', text: 'Telegram', icon: <FaTelegramPlane /> },
  { href: 'https://discord.gg/Rc4BMUjbNB', text: 'Discord', icon: <FaDiscord /> },
  {
    href: 'https://docs.aro.network/', text: 'Docs', icon: <svg width="0.85em" height="0.85em" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_200_54)">
        <path d="M3.30894 23.6078C2.47769 23.1724 2.00269 22.258 2.00269 21.0982V4.13083C2.00071 1.9201 3.90071 0.125 6.24008 0.125H19.1858C21.5232 0.125 23.2471 1.9201 23.2471 4.13083V21.1022C23.2471 22.6717 22.6256 23.3248 22.1447 23.5761C21.6598 23.8295 20.6346 24.1204 19.2175 23.2535L19.1541 23.212L19.1007 23.1684C18.8632 22.9745 18.0399 22.4144 17.4046 22.4144C17.175 22.4144 16.7791 22.6123 16.3596 22.83C15.5184 23.2555 14.3646 23.8433 12.71 23.8433C11.0732 23.8433 10.1628 23.2674 9.49185 22.8458C9.03269 22.5549 8.79914 22.4183 8.46467 22.4183C7.56217 22.4183 6.61217 23.0319 6.34894 23.2417L6.2955 23.2852L6.2381 23.3248C5.62456 23.687 4.99915 23.875 4.41727 23.875C4.03113 23.876 3.65037 23.7844 3.30696 23.6078H3.30894ZM6.37467 5.12438C6.04319 5.12438 5.72528 5.25605 5.49089 5.49045C5.2565 5.72484 5.12482 6.04274 5.12482 6.37422C5.12482 6.7057 5.2565 7.0236 5.49089 7.25799C5.72528 7.49238 6.04319 7.62406 6.37467 7.62406H18.8731C19.2046 7.62406 19.5225 7.49238 19.7569 7.25799C19.9913 7.0236 20.1229 6.7057 20.1229 6.37422C20.1229 6.04274 19.9913 5.72484 19.7569 5.49045C19.5225 5.25605 19.2046 5.12438 18.8731 5.12438H6.37467ZM6.37467 10.1257C6.04319 10.1257 5.72528 10.2574 5.49089 10.4918C5.2565 10.7262 5.12482 11.0441 5.12482 11.3756C5.12482 11.7071 5.2565 12.025 5.49089 12.2593C5.72528 12.4937 6.04319 12.6254 6.37467 12.6254H18.8731C19.2046 12.6254 19.5225 12.4937 19.7569 12.2593C19.9913 12.025 20.1229 11.7071 20.1229 11.3756C20.1229 11.0441 19.9913 10.7262 19.7569 10.4918C19.5225 10.2574 19.2046 10.1257 18.8731 10.1257H6.37467ZM6.37467 15.1231C6.04319 15.1231 5.72528 15.2548 5.49089 15.4892C5.2565 15.7236 5.12482 16.0415 5.12482 16.373C5.12482 16.7044 5.2565 17.0224 5.49089 17.2567C5.72528 17.4911 6.04319 17.6228 6.37467 17.6228H12.6249C12.9564 17.6228 13.2743 17.4911 13.5086 17.2567C13.743 17.0224 13.8747 16.7044 13.8747 16.373C13.8747 16.0415 13.743 15.7236 13.5086 15.4892C13.2743 15.2548 12.9564 15.1231 12.6249 15.1231H6.37467Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_200_54">
          <rect width="23.75" height="23.75" fill="white" transform="translate(0.75 0.125)" />
        </clipPath>
      </defs>
    </svg>
  },
  { href: 'https://x.com/AroNetwork', text: 'Twitter', icon: <BsTwitterX className="text-[0.8em]" /> },
  // { href: 'https://github.com/aro-network', text: 'Github', icon: <IoLogoGithub /> },
  { href: 'https://medium.com/aronetwork', text: 'Blog', icon: <RiAppsFill /> },
  {
    href: 'https://aro.network/AroMediaKit.zip', text: 'MediaKit',
    icon: <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_200_54)">
        <path fill="currentColor" d="M24.4223 3.11592C24.7589 3.11592 25.0817 3.24963 25.3197 3.48764C25.5577 3.72565 25.6914 4.04846 25.6914 4.38506V22.153C25.6914 22.4896 25.5577 22.8124 25.3197 23.0504C25.0817 23.2885 24.7589 23.4222 24.4223 23.4222H1.57773C1.24114 23.4222 0.918326 23.2885 0.680316 23.0504C0.442306 22.8124 0.308594 22.4896 0.308594 22.153V1.84678C0.308594 1.51018 0.442306 1.18737 0.680316 0.94936C0.918326 0.711349 1.24114 0.577637 1.57773 0.577637H10.9871L13.5254 3.11592H18.0766V5.6542H20.6148V3.11592H24.4223ZM20.6148 13.269H18.0766V15.8073H15.5383V19.6147H20.6148V13.269ZM18.0766 10.7308H15.5383V13.269H18.0766V10.7308ZM20.6148 8.19248H18.0766V10.7308H20.6148V8.19248ZM18.0766 5.6542H15.5383V8.19248H18.0766V5.6542Z" />
      </g>
      <defs>
        <clipPath id="clip0_200_54">
          <rect width="23.75" height="23.75" fill="white" transform="translate(0.75 0.125)" />
        </clipPath>
      </defs>

    </svg>
  }




]

const shortSoialLinks = socialLinks.filter(item => ["Telegram", 'Discord', 'Twitter'].includes(item.text))

const sponsorsCount = 4
const sponsorscounts = new Array(sponsorsCount * 3).fill(0)

function Sponsors() {
  return <>
    <div className="overflow-hidden relative w-full h-[50px] mo:h-6" >
      <div className="flex items-center gap-[120px] w-fit h-full animate-x-loop transition-all [--x-loop-time:20s] [--x-loop:-1228px] mo:gap-[27px] mo:[--x-loop:-469.16px] mo:[--x-loop-time:7s]">
        <style>{`
            @keyframes x-loop {
                 100% { transform: translateX(var(--x-loop)); }
            }
        `}</style>
        {sponsorscounts.map((_i, i) => <img key={i} src={`/sponsors/${i % sponsorsCount}.svg`} className="h-full w-auto shrink-0" />)}
      </div>
    </div>
  </>
}


function FAQS() {
  const [opened, setOpened] = useState<number>()
  function RenderTit({ item, index }: { item: (typeof faqText)[number], index: number }) {
    return <LinerGridentBorder anim={false} type={index === opened ? "2" : "5"} className="rounded-lg font-semibold text-[22px] text-left font-Space_Grotesk  text-white mo:text-base"><div className="pl-[30px] pr-[62px] py-4 mo:pl-5 mo:pr-16">{item.title}</div></LinerGridentBorder>
  }
  return <div className={cn(maxWidthClassName, 'relative  pt-[124px]  mo:pt-16')}>
    <TitleText text={"FAQ Highlights"} />
    <Accordion
      data-aos="fade-left"
      data-aos-duration="1000"
      className="aos-init aos-animate flex flex-col gap-10 mx-auto max-w-[840px] w-full mo:gap-[30px]"
      onSelectionChange={(keys) => {
        console.info('keys:', keys, (keys as any).currentKey)
        if ((keys as Set<string>).size) {
          setOpened(parseInt((keys as any).currentKey))
        } else {
          setOpened(undefined)
        }
      }}
      variant="light"
      showDivider={false}>
      {faqText.map((item, index) => {
        return <AccordionItem
          classNames={{ trigger: 'flex justify-between items-center py-0 gap-0', heading: 'my-0', indicator: 'w-0' }}
          key={index}
          HeadingComponent={'div'}
          indicator={({ isOpen }) => (isOpen ? <FiMinus className="text-[#048417] -translate-x-11 mo:-translate-x-9" /> : <FiPlus className="text-[#048417] -translate-x-11 mo:-translate-x-9" />)}
          title={<RenderTit item={item} index={index} />}>
          <div className={cn("text-sm text-[#D3D3D6] pt-5 px-[30px] !leading-normal mo:text-xs mo:px-5")}>{item.content}</div>
        </AccordionItem>
      })}
    </Accordion>
  </div>
}

export default function Home() {

  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-top",
    });
    document.body.style.backgroundColor = 'black'
  }, []);
  const r = useRouter()
  const goTo = (urlpath: string) => {
    if (urlpath === '/blog') {
      r.push(urlpath)
    } else {
      window.open(urlpath, '_blank')
    }
  }

  const [showModal, setShowModal] = useState(true)
  return <div className="">
    <div className="z-[100000] lg:relative  w-full min-h-screen bg-black overflow-hidden">
      {/* Header */}
      <AHeader />

      <div className="mds:pb-[124px] mds:pt-20 mo:pb-16 w-full xsl:h-screen xsl:justify-center flex flex-col gap-[6rem] md:gap-[4rem] bg-[url(/bg_flash.svg)] bg-center bg-no-repeat bg-cover mo:gap-[100px] mo:items-center mo:[background-position-x:75%]">
        <div className=""></div>
        {/* First Frame */}
        <AosAnimItem anim={false} className={cn(maxWidthClassName, "flex flex-col gap-[122px] mo:items-center")}>
          <div className="flex flex-col leading-[1.2] mo:items-center">
            <div
              style={{
                boxSizing: 'border-box',
                background: 'linear-gradient(350deg, #00E42A 21.13%, #FFFFFF 57.73%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textShadow: 'none',
              }}
              className="text-[66px] font-Space_Grotesk font-bold text-transparent w-fit pr-28 flex flex-col mo:pr-0 mo:text-center mo:text-[44px]"
            >
              The Decentralized Edge<br className="mo:hidden" /> Cloud for the AI Era
            </div>
            <div className="font-medium text-[22px] text-[#00FF0D] mt-[30px] mo:mt-8 mo:text-xl">
              Faster. Smarter. Owned by You.
            </div>
            <div className=" text-[#D3D3D6] leading-relaxed mt-2.5 text-sm mo:text-center">Turn your unused internet into rewards by powering<br className="mo:hidden" />the future of decentralized AI and content delivery.</div>
            <MBtn
              type="2"
              onClick={() => goTo(dashboarSignup)}
              className={'mt-5 mo:mt-8 font-Space_Grotesk'}
              content={'Get Started'}
            />
          </div>
        </AosAnimItem>
        {/* Sponsors */}
        <AosAnimItem anim={false} className={cn(" flex flex-col items-center ", maxWidthClassName, "mo:px-0")}>
          <div className="text-white font-medium text-base mo:text-center  w-full mb-6">
            Backed by:
          </div>
          <Sponsors />
        </AosAnimItem>
      </div>
      <TitleText text="ARO Network" />
      <div className={cn("flex flex-col gap-5 pb-[124px] mo:pb-16", maxWidthClassName)}>
        <LinerGridentBorder type="1" className="rounded-3xl">
          <div className="flex items-center gap-[73px] p-10 mo:flex-col mo:px-5">
            <div className="text-white text-[40px] font-bold leading-[1.39] shrink-0 mo:text-[28px] mo:self-start font-Space_Grotesk">What is<br />ARO Network?</div>
            <div className="w-0 flex-1 text-[#D3D3D6] text-sm whitespace-pre-wrap mo:w-full">
              ARO Network is a decentralized edge cloud driving real-time content delivery and next-gen AI workloads. <br className="mo:hidden" />
              Powered by people—not data centers—anyone can share unused bandwidth to create a faster, smarter network and own a piece of it.
            </div>
          </div>
        </LinerGridentBorder>
        <div className="flex gap-5 w-full mo:flex-col">
          <AosAnimItem style={{ backgroundSize: '100% 100%' }} className=" flex-[7] w-0 bg-[url(/bg_card1.webp)] bg-no-repeat min-h-[314px] mo:w-full">
            <div className="flex flex-col gap-10 p-10 justify-between h-full mo:px-5 mo:pr-8">
              <div className="text-white text-[40px] font-bold leading-[1.39] shrink-0 mo:text-[28px] font-Space_Grotesk">Why ARO?</div>
              <div className="text-[#D3D3D6] text-sm">
                • Proven Infra: Built on a 1.5M+ nodes legacy<br />
                • Earn Passively: Turn idle internet into daily rewards<br />
                • Ready for the Future: Power the next wave of smart, edge-driven content and AI with ultra-fast, local processing
              </div>
            </div>
          </AosAnimItem>
          <AosAnimItem style={{ backgroundSize: '100% 100%' }} className=" flex-[4] w-0 -ml-[33px]  bg-[url(/bg_card2.webp)] bg-no-repeat min-h-[314px] h-[314px] flex mo:ml-0 mo:w-full">
            <div className="flex flex-col gap-2 p-10 h-full mt-auto mo:px-5 mo:w-full">
              <div className="text-white text-[23px] font-bold leading-[1.39] shrink-0 mt-auto mo:text-xl font-Space_Grotesk">$154B+ Market Opportunity</div>
              <div className="text-[#D3D3D6] text-sm">Edge computing is growing 39% annually — reaching $154.7B by 2030.</div>
            </div>
          </AosAnimItem>
        </div>
      </div>
      <TitleText text="Get Started in 3 Steps" />
      <div className={cn("grid grid-cols-3 gap-11 mo:grid-cols-1 mo:gap-5", maxWidthClassName)}>
        <LinerGridentBorder type="2" className="rounded-3xl">
          <div className="px-6 pt-5 pb-12 flex flex-col items-center gap-[30px]">
            <div className="w-full text-white font-medium text-xl font-Space_Grotesk">1. Install it</div>
            <img alt="Install it" src="/installnodes.svg" className="w-[190px] h-[220px]" />
          </div>
        </LinerGridentBorder>
        <LinerGridentBorder type="3" className="rounded-3xl">
          <div className="px-6 pt-5 pb-12 flex flex-col items-center gap-[30px]">
            <div className="w-full text-white font-medium text-xl font-Space_Grotesk">2. Run it</div>
            <img alt="Run it" src="/runit.svg" className="w-[244px] h-[183px] mt-8" />
          </div>
        </LinerGridentBorder>
        <LinerGridentBorder type="4" className="rounded-3xl">
          <div className="px-6 pt-5 pb-12 flex flex-col items-center gap-[60px] justify-between">
            <div className="w-full text-white font-medium text-xl font-Space_Grotesk">3. Start Earning</div>
            <div className="flex flex-col gap-10 px-6 items-center">
              <div className="text-xs text-[#969696] flex flex-col gap-2 ">
                <div className="flex items-center gap-2 text-base font-medium text-white">
                  <img alt="Earn" src="/earn.svg" className="w-[30px] h-[30px]" />
                  Earn $ARO Rewards
                </div>
                Stack Jades during Testnet, convert them to $ARO tokens at mainnet launch.
              </div>
              <div className="text-xs text-[#969696] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-base font-medium text-white">
                  <img alt="Earn" src="/friends.svg" className="w-[30px] h-[30px]" />
                  Recommend
                </div>
                Refer your friend and earn extra 15% commission.
              </div>
            </div>
          </div>
        </LinerGridentBorder>
      </div>
      <AosAnimItem className="flex items-center w-full">
        <MBtn
          type="2"
          onClick={() => goTo(dashboarSignup)}
          content="Get Started"
          className={cn('mx-auto mt-[52px] mb-[124px] mo:mb-16 font-Space_Grotesk')} />
      </AosAnimItem>
      <TitleText text="Become a Pioneer Aronaut" className="px-5 text-center !mb-[22px]" />
      <div className={cn(maxWidthClassName, 'text-[#D3D3D6]')}>
        <AosAnimItem className={cn('w-full text-center mo:text-sm')}>
          Only <span className="text-[#00FF0D] font-semibold">1,000 spots</span> — and they’re filling fast. Help shape ARO Network from the ground up and earn exclusive rewards along the way.
        </AosAnimItem>
        <div className="w-full mt-11 flex flex-col mo:gap-5">
          <LinerGridentBorder type="6" className="rounded-3xl w-9/12 overflow-hidden mo:w-full mo:overflow-visible">
            <div className="p-11 flex relative mo:p-5 mo:pt-[133px] mo:pb-8">
              <div className="flex flex-col gap-4 w-0 flex-1 z-10">
                <div className="text-[38px] leading-snug font-bold text-white mo:text-[28px] text-nowrap font-Space_Grotesk">What We Look For</div>
                <div className="text-sm w-full text-nowrap">
                  • Genuine feedback & active engagement<br />
                  • Content support: writing, videos, local advocacy<br />
                  • Belief in a decentralized, open internet
                </div>
                <div className="text-[38px] leading-snug font-bold text-white mt-[30px] mo:text-[28px] font-Space_Grotesk">What You Get</div>
                <div className="text-sm text-wrap">
                  • Priority access to free ARO devices (selected regions)<br />
                  • Early adopter perks & exclusive rewards<br />
                  • Access to private funding rounds before the public
                </div>
                <AosAnimItem className="flex items-center gap-[30px] text-white text-[30px] mt-4 mo:self-center">
                  {shortSoialLinks.map(item => <div key={item.href} onClick={() => open(item.href, '_blank')} className="cursor-pointer hover:text-[#AEFB68]">{item.icon}</div>)}
                </AosAnimItem>
                <AosAnimItem className="w-fit mt-2 mo:self-center">
                  <MBtn
                    type="2"
                    contentClassName="text-nowrap whitespace-nowrap font-Space_Grotesk"
                    onClick={() => goTo(dashboarSignup)}
                    content="Sign Up to Unlock Pioneer Access"
                  />
                </AosAnimItem>
              </div>
              <div className="relative w-0 flex-1 -ml-12 mo:ml-0 mo:absolute mo:top-0 mo:left-0 mo:h-full mo:w-full overflow-hidden">
                <img alt="Bg" src="/bg_card3.svg" className="w-[478px] h-[381px] absolute -bottom-11 -right-11 mo:right-[unset] mo:left-8 mo:bottom-0 rounded-br-3xl" />
              </div>
              <div className="relative w-0 flex-1 -ml-12 mo:ml-0 mo:absolute mo:top-0 mo:left-0 mo:h-full mo:w-full ">
                <div className="text-[72px] leading-[88px] font-Space_Grotesk font-semibold text-[#00FF0D] absolute top-3 mo:left-1/2 mo:right-[none] mo:-translate-x-1/2  mo:w-fit mo:whitespace-nowrap mo:text-[min(14vw,50px)] mo:text-center">
                  You are{' '}<br className="mo:hidden" />
                  Early!
                </div>
              </div>
            </div>
          </LinerGridentBorder>
          <LinerGridentBorder type="4" className="rounded-3xl w-1/2 overflow-hidden self-end -mt-[200px] mo:mt-0 mo:w-full">
            <div className="flex flex-col gap-5 pt-12 pr-[30px] pb-[30px] pl-[68px] relative mo:gap-7">
              <div className="text-white font-bold text-[26px] font-Space_Grotesk">Pioneer Voices</div>
              <div className="flex items-center gap-4 text-sm mo:flex-col">
                <div className="w-fit max-w-[300px]">“ARO made passive income stupid simple. Now I’m part of something bigger.”</div>
                <div className="font-semibold whitespace-nowrap shrink-0 mo:ml-auto">— Fatima, Jakarta</div>
              </div>
              <div className="flex items-center gap-4 text-sm mo:flex-col">
                <div className="w-fit max-w-[300px]">“Helping build from day one while earning? Count me in.”</div>
                <div className="font-semibold whitespace-nowrap shrink-0 mo:ml-auto">— SAI, Bangkok</div>
              </div>
              <QuteSymbol className="absolute left-[32px] top-[42px]" />
              <QuteSymbol className="rotate-180 self-end" />
            </div>
          </LinerGridentBorder>
        </div>
      </div>
      <div className={cn(maxWidthClassName, 'relative pt-[124px] mo:pt-16 mo:pl-[71px]')}>
        <AosAnimItem as="img" alt="BG RoundMap" src="/bg_roundmap.svg" className="w-[514px] h-auto absolute top-0 -right-11 mo:hidden" />
        <AosAnimItem as="img" alt="BG RoundMap" src="/bg_roundmap_mo.svg" className="w-[167px] h-auto absolute top-0 left-0 hidden mo:block" />
        <AosAnimItem as="img" alt="BG RoundMap" src="/bg_roundmap2.svg" className="w-[822px] h-[1130px] absolute -left-[233px] top-[218px] mo:hidden" />
        <TitleText className="ml-0 mt-8 " text={<>ARO Roadmap:<br />From Launch to Scale</>} />
        <RoumdMaps />
      </div>
      <FAQS />
      <AosAnimItem anim={false} className={cn("max-w-[1240px] w-full mx-auto relative mt-[124px] mo:mt-16 mo:pt-12")}>
        <img src="/bg_footer_star.svg" className="w-[calc(100%-56px)] h-auto" />
        <img src="/bg_footer.svg" className="w-full h-auto" />
        <div className="absolute top-0 w-full flex flex-col items-center gap-2.5">
          <div className="text-white font-medium text-[30px] gap-8 flex items-center mo:text-2xl mo:gap-6">
            {socialLinks.map(item => <div key={item.href} onClick={() => open(item.href, '_blank')} className="cursor-pointer hover:text-[#AEFB68]">{item.icon}</div>)}
          </div>
          <div className="text-[#646464] mo:font-medium mo:text-xs">© ARO Network 2025. Powered by the People.</div>
          <div className="mt-3 h-0.5 w-[226px]" style={{
            background: 'linear-gradient(90deg, #090C17 0%, #00E42A 51%, #090C17 100%)'
          }} />
        </div>
      </AosAnimItem>
    </div>
    <AShowModal isOpen={showModal} onClose={() => setShowModal(false)} closeOnOverlayClick={false}>
      <div className="flex items-center justify-center flex-col  w-full mo:mb-10">
        <div
          style={{
            boxSizing: 'border-box',
            background: 'linear-gradient(350deg, #00E42A 21.13%, #FFFFFF 57.73%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            textShadow: 'none',
          }}
          className="text-[44px] mo:text-[30px]  font-Space_Grotesk text-center font-bold text-transparent w-fit  flex flex-col mo:pr-0  "
        >
          ARO Previewnet Is LIVE!
        </div>
        <div className={`text-lg  mo:text-sm mo:w-full leading-normal font-medium text-center mo:flex justify-center  text-[#00FF0D] mt-10 mo:mt-4 mo:mb-2.5 mb-[45px]`}>
          <div className="text-left leading-[190%] mo:leading-[30px]">
            1. Run a Node & Join the Reward Rush<br />
            2. Refer Others for Reward Boost<br />
            3. $30K USDT Bonus for Top Referrers<br />
          </div>
        </div>
        <div className="text-white mo:flex flex-col text-center mo:w-full mo:text-xs ">
          <span>
            Sign Up & Start Earning NOW!
          </span>

        </div>
        <div className="mo:w-full flex gap-5 justify-center ">
          <MBtn
            type="2"
            onClick={() => {
              goTo(dashboarSignup)
              setShowModal(false)

            }
            }
            contentClassName={'mo:text-sm'}

            className={'mt-5 font-Space_Grotesk '}
            content={'Get Started'}
          />

        </div>
        <div className="flex items-center gap-5 mt-5 ">
          <button onClick={() => {
            window.open('https://docs.aro.network/campaigns/previewnet')
          }} className="underline mo:text-xs underline-offset-1 ml-1 mo:ml-0 mo:text-left hover:text-[#00FF0D] text-white ">Learn More</button>

          <button

            onClick={() => {
              setShowModal(false)

            }
            }
            className="underline mo:text-xs underline-offset-1  font-Space_Grotesk hover:text-[#00FF0D] text-white"
          >
            Skip
          </button>
        </div>
      </div>
    </AShowModal>

  </div>
}
