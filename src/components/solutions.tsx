import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { solutions } from "../config/solutions";
import { Animation } from "./Animation";

export function Solutions() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [scrollRange, setScrollRange] = useState([0, 0]);
    const [state, setState] = useState(0)

    useEffect(() => {
        if (ref.current) {
            const start = ref.current.offsetTop;
            const end = start + ref.current.getBoundingClientRect().height;
            setScrollRange([start, end]);
        }
    }, []);





    const p = useTransform(scrollY, scrollRange, [0, 1])
    // const scrollProgress = useTransform(scrollY, scrollRange, [40, -560 * 3 - 72 * 4]);

    useEffect(() => {
        p.on('change', v => {
            if (v >= 0.25 && v < 0.5) {
                setState(1)
            } else if (v >= 0.5 && v < 0.75) {
                setState(2)
            } else if (v >= 0.75) {
                setState(3)
            } else if (v < 0.25) {
                setState(0)
            }
        })
    }, [setState])



    const leftPage = () => {
        const index = state === 3 ? 2 : state
        const Icon = solutions[index]?.icon;

        return (


            <section className="flex flex-col w-[calc(100%-230px)] sm:w-full gap-4 p-4 solutions__item lg:p-6 shrink-0">
                <div ref={ref}>
                    <div
                        className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                        style={{ border: "1px solid rgba(243, 243, 243, 0.1)" }}
                    >
                        <Icon size={40} />
                    </div>
                    <h3 className="text-xl lg:text-3xl">{solutions[index]?.title}</h3>
                    <p className="text-sm lg:text-base text-white/50">
                        {solutions[index]?.description}
                    </p>
                </div>

            </section>
        );
    }



    return <div className="solutions sm:h-[3000px]" ref={ref}>
        <section className="sticky h-screen pt-16 solutions__section top-16 lg:top-0 lg:pt-32 2xl:pt-60">
            <div className="container">
                <h2 className="section-title" onClick={() => { }}>The Open Edge</h2>
            </div>

            <div className="container flex flex-col w-full gap-8 lg:flex-row">
                <div className="w-full mt-8 lg:w-1/2 lg:mt-24 ">
                    <div className="relative overflow-x-hidden flex before:content-[''] before:absolute before:right-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r sm:before:bg-none before:from-transparent before:to-[rgba(13,13,13,1)] before:z-20">
                        {leftPage()}
                    </div>

                    <div className="flex gap-4 mt-8 sm:gap-20 sm:justify-center">
                        <div onClick={() => { window.scrollTo({ top: window.scrollY - 3800, behavior: "smooth" }) }} className="z-50 flex items-center cursor-pointer justify-center w-12 h-12 border rounded-full border-white/10 text-white/50 hover:bg-[#4281FF]">
                            <IconChevronLeft />
                        </div>

                        <div onClick={() => { window.scrollTo({ top: window.scrollY + 3800, behavior: "smooth" }) }} className="z-50 flex items-center cursor-pointer justify-center w-12 h-12 border rounded-full border-white/10 text-white/50 hover:bg-[#4281FF]">
                            <IconChevronRight />
                        </div>
                    </div>
                </div>

                <Animation state={state} />
            </div>
        </section >
    </div >
}