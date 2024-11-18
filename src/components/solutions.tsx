import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
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

    const scrollProgress = useTransform(scrollY, scrollRange, [40, -560 * 3 - 72 * 4]);
    const p = useTransform(scrollY, scrollRange, [0, 1])

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

    return <div className="solutions" ref={ref}>
        <section className="sticky h-screen pt-16 solutions__section top-16 lg:top-0 lg:pt-32 2xl:pt-60">
            <div className="container">
                <h2 className="section-title" onClick={() => { }}>The Open Edge</h2>
            </div>

            <div className="container flex flex-col w-full gap-8 lg:flex-row">
                <div className="w-full mt-8 lg:w-1/2 lg:mt-24">
                    <div className="relative overflow-x-hidden flex before:content-[''] before:absolute before:right-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[rgba(13,13,13,1)] before:z-20">
                        <motion.div className="flex gap-24 lg:gap-32" style={{ x: scrollProgress }} >
                            {
                                solutions.map(({ title, description, icon }, index) => {
                                    const Icon = icon

                                    return (
                                        <div className="solutions__item p-4 lg:p-6 flex flex-col gap-4 w-[375px] lg:w-[560px] shrink-0" key={index}>
                                            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(243, 243, 243, 0.1)' }}>
                                                <Icon size={40} className="strƒ" />
                                            </div>
                                            <h3 className="text-xl lg:text-3xl">{title}</h3>
                                            <p className="text-sm lg:text-base text-white/50">{description}</p>
                                        </div>
                                    )
                                })
                            }
                        </motion.div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <div onClick={() => { window.scrollTo({ top: window.scrollY - 1800, behavior: "smooth" }) }} className="z-50 flex items-center justify-center w-12 h-12 border rounded-full border-white/10 text-white/50">
                            <IconChevronLeft />
                        </div>

                        <div onClick={() => { window.scrollTo({ top: window.scrollY + 1800, behavior: "smooth" }) }} className="z-50 flex items-center justify-center w-12 h-12 border rounded-full border-white/10 text-white/50">
                            <IconChevronRight />
                        </div>
                    </div>
                </div>

                <Animation state={state} />
            </div>
        </section>
    </div >
}