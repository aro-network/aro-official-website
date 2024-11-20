import clsx from "clsx";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { architecture } from "../config/architecture";

export function Architecture() {
    const { scrollY } = useScroll();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState([0, 0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const start = ref.current.offsetTop;
            const end = start + ref.current.getBoundingClientRect().height;
            setScrollRange([start, end]);
        }
    }, [])

    const scrollProgress = useTransform(scrollY, scrollRange, [0, 1]);

    useEffect(() => {
        scrollProgress.on('change', v => {
            if (v > 1 / 3 && v < 2 / 3) {
                setCurrentIndex(1)
            } else if (v > 2 / 3 && v < 3 / 3) {
                setCurrentIndex(2)
            } else {
                setCurrentIndex(0)
            }
        })
    }, [])

    return <div ref={ref} className="container relative lg:pb-72 h-[8000px] sm:h-[4000px]" >
        <section className="sticky flex flex-col h-screen top-24 2xl:top-60">
            <h2 className="section-title">The Open-Layered Fabric</h2>

            <div className="flex flex-col gap-32 lg:flex-row">
                <div className="flex justify-between mt-16 lg:flex-col lg:gap-8 2xl:gap-16 lg:justify-start">
                    {
                        architecture.map(({ title, description, icon }, index) => {
                            const Icon = icon

                            return (
                                <div
                                    style={{
                                        opacity: currentIndex === index ? 1 : 0.5,
                                        transform: `scale(${currentIndex === index ? 1.1 : 1})`,
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                    className={clsx("architecture__item border p-4", currentIndex === index ? 'bg-black/20 border-white/10 rounded-3xl' : 'border-transparent')} key={index}>
                                    <div className="flex flex-col items-center gap-1 lg:flex-row">
                                        <Icon />
                                        <h3 className="text-xs text-center lg:text-left lg:text-2xl">{title}</h3>
                                    </div>
                                    <p className="hidden mt-4 opacity-50 lg:block">{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative w-screen max-w-full min-h-full lg:mt-24 lg:m-0">
                    <div className="z-10 h-4 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > -1 ? 80 : 0}px)`, opacity: currentIndex > -1 ? 1 : 0, transition: 'all 0.4s' }} src="/resource.png" className="" />
                    </div>
                    <div className="relative z-20 h-4 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 0 ? 0 : -80}px)`, opacity: currentIndex > 0 ? 1 : 0, transition: 'all 0.4s' }} src="/orchestration.png" className="" />
                    </div>
                    <div className="relative z-30 h-4 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 1 ? -80 : -160}px)`, opacity: currentIndex > 1 ? 1 : 0, transition: 'all 0.4s' }} src="/application.png" className="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
}