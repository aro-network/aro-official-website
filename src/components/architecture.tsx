import clsx from "clsx";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { architecture } from "../config/architecture";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Architecture() {
    const { scrollY } = useScroll();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState([0, 0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const start = ref.current.offsetTop;
            const end = start + ref.current.getBoundingClientRect().height;
            setScrollRange([start - 1000, end - 1000]);
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


    const settings = {
        dots: true,
        slidesPerRow: 1,
        arrows: false,
    };


    return <div ref={ref} className="container relative lg:pb-72 h-[3000px] sm:h-full" >
        <section className="sticky flex flex-col h-screen top-24 2xl:top-40 mo:hidden">
            <h2 className="section-title">The Open-Layered Fabric</h2>
            <div className="flex flex-col h-full gap-[70px] mt-10 lg:flex-row">
                <div className="flex justify-between lg:flex-col lg:gap-8 2xl:gap-16 lg:justify-start">
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
                                    onClick={() => setCurrentIndex(index)}
                                    className={clsx(" architecture__item border p-3 cursor-pointer", currentIndex === index ? 'bg-black/20 border-white/10 rounded-3xl' : 'border-transparent')} key={index}>
                                    <div className="flex flex-col items-center gap-1 lg:flex-row">
                                        <Icon />
                                        <h3 className="text-xs text-center lg:text-left lg:text-[22px]">{title}</h3>
                                    </div>
                                    <p className="hidden mt-4 opacity-50 lg:block">{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative w-screen max-w-full min-h-full ">
                    <div className="z-10 h-4 max-w-full">
                        <img className={'bg-cover object-cover'} style={{ transform: `translateY(${currentIndex > -1 ? 80 : 0}px)`, opacity: currentIndex > -1 ? 1 : 0, transition: 'all 0.4s' }} src="/application.png" />
                    </div>
                    <div className="relative z-20 h-4 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 0 ? 0 : -80}px)`, opacity: currentIndex > 0 ? 1 : 0, transition: 'all 0.4s' }} src="/orchestration.png" className="" />
                    </div>
                    <div className="relative z-30 h-4 max-w-full">
                        <img style={{ transform: `translateY(${currentIndex > 1 ? -80 : -160}px)`, opacity: currentIndex > 1 ? 1 : 0, transition: 'all 0.4s' }} src="/resource.png" className="" />
                    </div>
                </div>
            </div>
        </section>

        <div className=" 2xl:top-40 ng:hidden">
            <h2 className="section-title">The Open-Layered Fabric</h2>
            <div className="flex flex-col gap-16 mt-10 lg:flex-row">
                <Slider {...settings} className="">
                    {
                        architecture.map(({ title, description, icon }, index) => {
                            const Icon = icon
                            return (
                                <div>
                                    <div
                                        className=' p-4   h-[232px]' key={index}>
                                        <div className="flex items-center gap-1 lg:flex-row">
                                            <Icon />
                                            <h3 className="text-xl text-center ">{title}</h3>
                                        </div>
                                        <p className="mt-4 opacity-50 lg:block">{description}</p>
                                    </div>
                                    <img className={'bg-cover object-cover'} src="/application.png" />

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    </div>
}