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

    return <div ref={ref} className="relative container lg:pb-72" style={{ height: 8000 }}>
        <section className="sticky top-24 2xl:top-60 h-screen flex flex-col">
            <h2 className="section-title">Our Architecture</h2>

            <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex lg:flex-col lg:gap-8 2xl:gap-16 mt-16 justify-between lg:justify-start">
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
                                    <div className="flex items-center gap-1 flex-col lg:flex-row">
                                        <Icon />
                                        <h3 className="text-xs text-center lg:text-left lg:text-2xl">{title}</h3>
                                    </div>
                                    <p className="opacity-50 mt-4 hidden lg:block">{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative w-screen lg:mt-24 min-h-full lg:m-0 max-w-full">
                    <div className="h-4 z-10 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > -1 ? 80 : 0}px)`, opacity: currentIndex > -1 ? 1 : 0, transition: 'all 0.4s' }} src="/resource.png" className="" />
                    </div>
                    <div className="h-4 z-20 relative max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 0 ? 0 : -80}px)`, opacity: currentIndex > 0 ? 1 : 0, transition: 'all 0.4s' }} src="/orchestration.png" className="" />
                    </div>
                    <div className="h-4 z-30 relative max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 1 ? -80 : -160}px)`, opacity: currentIndex > 1 ? 1 : 0, transition: 'all 0.4s' }} src="/application.png" className="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
}