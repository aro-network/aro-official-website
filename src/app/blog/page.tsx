'use client'
import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import AHeader from "../components/AHeader"
import AFooter from "../components/AFooter"
import { FiArrowUp } from "react-icons/fi"
import { convertDate } from "../utils/common"
import Skeleton from "../components/ASkeleton"
import axios from "axios"
import { useRouter } from "next/navigation"

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [articleList, setArticleList] = useState<ArticleInfo.Post[]>([]);
  const [loaded, setLoaded] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [allTags, setAllTags] = useState<ArticleInfo.Category[]>()
  const r = useRouter()
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 100,
    },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })


  const fetchImg = async () => {
    const url = `https://shop.aro.network/wp-json/wp/v2/posts?per_page=8&page=${1}&_embed`;
    await fetch(url)
      .then(response => response.json())
      .then((res: ArticleInfo.Post[]) => {
        console.log('fetchImg', res);
        const newArr = res.map((item) => {
          const embedded = item._embedded;
          if (embedded && "wp:featuredmedia" in embedded) {
            const imageUrl = embedded["wp:featuredmedia"][0].source_url;
            return { ...item, imageUrl };
          } else {
            return { ...item };
          }
        });
        setArticleList(newArr);
        console.log('newadsadas', newArr);
      }).finally(() => {
        setIsFetching(false)
      })

  };

  useEffect(() => {
    fetchImg()
    getAllTags()
  }, [])

  const getAllTags = async () => {
    const res = await axios('https://shop.aro.network/wp-json/wp/v2/tags')
    console.log('resssss', res);
    setAllTags(res.data)

  }



  const getCurrentArticleTags = (data: ArticleInfo.Post) => {
    const tags = data.tags;
    const terms = data._embedded["wp:term"].flat();

    return terms
      .filter(term => tags.includes(term.id))
      .map(term => { return { name: term.name, id: term.id } });
  }


  return (
    <>

      <div className=" bg-[url(/banner-bg.png)] mo:bg-top bg-cover  z-[100000] lg:relative  w-full h-screen bf">
        <AHeader />
        <div className=" w-container px-[5.125rem] mo:px-[1.0625rem]  pt-[5.0625rem] mo:pt-11 m-auto md:w-full mo:w-full">
          <div className="text-[4.0625rem] font-medium mo:text-[2.5rem] text-black font-Ubuntu">Blog</div>
          {!isFetching ?
            <div className="navigation-wrapper bg-[#FFFFFF] rounded-[3.0625rem] mt-[3.125rem]  shadow-xl shadow-[#E6E6E6E5]">
              <div ref={sliderRef} className="keen-slider w-full rounded-[3.0625rem]">
                {articleList.map((item) => {
                  const data = getCurrentArticleTags(item)
                  return <div key={item.title.rendered} className="keen-slider__slide rounded-[3.0625rem]  text-left number-slide1 flex gap-[1.875rem] p-5 mo:flex-col ">

                    <img onClick={() => r.push(`/info?postId=${item.id}`)} src={item.imageUrl} className=" cursor-pointer mo:w-full  h-full mo:max-h-[14.375rem] mo:min-h-[14.375rem]   w-[50%] rounded-3xl  shadow-box " alt='wp' />


                    <div className="flex justify-between flex-col pt-5 pb-[.625rem]  h-full ">

                      <div onClick={() => r.push(`/info?postId=${item.id}`)} title={item.title.rendered} className="text-[2.0625rem] font-Ubuntu cursor-pointer mo:text-[1.625rem]  font-semibold text-black text-left line-clamp-2 pb-5  text-ellipsis"> {item.title.rendered}</div>

                      <div className="flex flex-col gap-10 text-left mt-5   h-full justify-between ">
                        <div className="flex mt-5 gap-[.625rem] flex-wrap ">
                          {data.map((tab) => {
                            return <button
                              onClick={() => {
                                r.push(`tags?id=${tab.id}`)
                              }} key={tab.id}
                              className="bg-[#4281FF] hover:bg-[#0F57E9] text-base w-auto flex gap-1 py-1 px-[.625rem] text-white rounded-[1.25rem]">{tab.name}</button>
                          })}
                        </div>
                        <div className="text-[#8A8A8A] text-base texe-left">{convertDate(item.date)}</div>
                      </div>
                    </div>


                  </div>

                })}
              </div>
            </div>
            :
            <Skeleton className="h-[31.25rem] w-full rounded-3xl mt-[3.125rem]" />

          }
          <div className="mo:py-[3.125rem] mt-[3.125rem]">
            {!isFetching && articleList.length > 1 && loaded && instanceRef.current && (
              <div className="dots ">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
          </div>
          <div className=" grid grid-cols-[repeat(auto-fill,minmax(24.75rem,1fr))] mo:grid-cols-[repeat(auto-fill,minmax(100%,1fr))]  justify-between gap-5 mt-[5rem] mo:mt-0  ">
            {!isFetching ? articleList.map((item) => {
              const data = getCurrentArticleTags(item)

              return <div key={item.title.rendered} className="navigation-wrapper flex rounded-[3.0625rem] gap-4  justify-center p-5 flex-col items-center">
                <img onClick={() => r.push(`/info?postId=${item.id}`)} src={item.imageUrl} className=" cursor-pointer w-full h-[15.625rem] rounded-3xl " alt='wp' />
                <div className="flex justify-between flex-col pt-5 pb-[.625rem]  h-full ">
                  <div onClick={() => r.push(`/info?postId=${item.id}`)} title={item.title.rendered} className="text-[1.75rem] font-Ubuntu cursor-pointer mo:text-[1.625rem]  font-semibold text-black text-left line-clamp-2 pb-5  text-ellipsis"> {item.title.rendered}</div>
                  <div className="flex flex-col gap-10 text-left   h-full justify-between ">
                    <div className="flex mt-5 gap-[.625rem] flex-wrap ">
                      {data.map((tab) => {
                        return <button
                          onClick={() => {
                            r.push(`tags?id=${tab.id}`)
                          }} key={tab.id}
                          className="bg-[#4281FF] hover:bg-[#0F57E9] text-base w-auto flex gap-1 py-1 px-[.625rem] text-white rounded-[1.25rem]">{tab.name}</button>
                      })}
                    </div>
                    <div className="text-[#8A8A8A] text-base texe-left">{convertDate(item.date)}</div>
                  </div>
                </div>
              </div>
            })
              :
              <Skeleton className="h-[25rem] w-full rounded-[3.0625rem] " />
            }

          </div>
          <div className="w-full text-center pt-[3.75rem] pb-[5rem] ">
            {/* <button className="py-[.8125rem] px-[2.0625rem]  bg-[#4281FF] rounded-[2.0625rem] text-white">View All Blogs</button> */}
          </div>

          {!isFetching && articleList.length &&
            <>
              <div className="rounded-[3.0625rem] bg-white shadow-box px-[3.125rem] mo:px-5 py-[3.125rem] mo:mb-0">
                <div className="text-center text-black text-[2.5rem] mo:text-[1.625rem] font-semibold font-Ubuntu">Search by Tag</div>
                <div className="flex mt-5 mo:mt-10 gap-[.625rem] flex-wrap ">

                  {allTags && allTags.map((tab) => {
                    return <button onClick={() => {
                      r.push(`tags?id=${tab.id}`)
                    }} key={tab.id} className="bg-[#4281FF] hover:bg-[#0F57E9] text-base w-auto flex gap-1 py-1 px-[.8125rem] text-white rounded-[1.25rem]">{tab.name}</button>
                  })}

                </div>

              </div>

              <button onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
              } className=" mo:mt-[4.1875rem] mt-20 mb-10 mo:mb-12 rounded-[1.5625rem] float-right shadow-box border w-[3.125rem] h-[3.125rem] flex items-center justify-center ">
                <FiArrowUp className="w-6" />
              </button>
            </>
          }

        </div>



        <AFooter />
      </div>
    </>

  )
}


export default Blog
