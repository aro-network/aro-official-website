'use client'
import { useEffect, useState } from "react"
import AHeader from "../components/AHeader"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { convertDate, getCurrentArticleTags } from "../utils/common"
import { SocialButtons } from "../components/social-buttons"
import AFooter from "../components/AFooter"
import Skeleton from "../components/ASkeleton"
import AScrollToTop from "../components/AScrollToTop"

const socialLinks = [
  { href: 'https://x.com/AroNetwork', name: 'Twitter' },
  { href: 'https://github.com/aro-network', name: 'Github' },
  { href: 'https://discord.gg/Rc4BMUjbNB', name: 'Discord' },
  { href: 'https://t.me/ARO_Network', name: 'Telegram' },
]
type PickType = Pick<ArticleInfo.Post, 'content' | '_embedded' | 'title' | 'date'>
const AInfo = () => {
  const [isFetching, setIsFetching] = useState(true)
  const usp = useSearchParams()
  const postId = usp.get('postId')
  const [selectedPost, setSelectedPost] = useState<PickType>();
  const r = useRouter()
  const fetchPostDetail = async () => {
    try {
      const postRes = await axios.get(
        `https://shop.aro.network/wp-json/wp/v2/posts/${postId}?_embed`
      );
      setSelectedPost(postRes.data);
    } catch (error) {
      console.error("failed", error);
    } finally {
      setIsFetching(false)
    }
  };

  useEffect(() => {
    fetchPostDetail()
  }, [])

  const data = getCurrentArticleTags(selectedPost as ArticleInfo.Post)

  return <>

    <div className=" bg-[url(/banner-bg.png)] mo:bg-top bg-cover  z-[100000] relative  w-full h-screen">
      <AHeader />
      <div className=" w-container px-[16rem] mo:px-[1.0625rem]  pt-[5.0625rem] smd:pt-10  m-auto md:w-full mo:w-full ">
        <div className="bg-[#FFFFFF] flex flex-col  rounded-[1.8125rem] justify-center  shadow-box" >
          <div className="p-5">
            {!isFetching && selectedPost?._embedded && selectedPost._embedded['wp:featuredmedia'] ? (
              <img
                src={selectedPost._embedded['wp:featuredmedia'][0].source_url}
                alt={selectedPost!.title.rendered}
                className="w-full h-[500px] mo:h-auto rounded-3xl shadow-box"
              />
            ) : (
              <Skeleton className="h-[31.25rem] mo:h-[18.75rem] w-full rounded-3xl " />

            )}

          </div>
          <div className="mt-10 mo:mt-5 px-10 mo:px-0">
            <div className=" mo:px-[1.875rem]">
              <div className=" font-semibold text-3xl mo:text-[1.625rem] text-black font-Ubuntu">{selectedPost?.title.rendered}</div>
              <div className="flex py-10 mo:pt-5 mo:pb-[1.875rem] gap-[.625rem] flex-wrap ">
                {!isFetching ? data.map((tab) => {
                  return <button onClick={(e) => {
                    e.stopPropagation()
                    e.isDefaultPrevented()
                    r.push(`/tags?id=${tab.id}`,)
                  }} key={tab.name} className="bg-[#4281FF] hover:bg-[#B0C4DE] text-base w-auto flex gap-1 py-1 px-[.8125rem] text-white rounded-[1.25rem]">{tab.name}</button>
                })
                  :
                  <Skeleton className="h-screen w-full " />

                }
              </div>
              <div className="text-[#8A8A8A] text-base pb-[1.875rem]">{convertDate(selectedPost?.date)}</div>
            </div>
            <div
              className="enreach-content  mo:px-5"
              dangerouslySetInnerHTML={{ __html: selectedPost?.content.rendered as string }}
            />

          </div>

        </div>

        <div className="bg-[#FFFFFF] flex flex-col mt-5  rounded-[1.8125rem] justify-center  shadow-box p-10 mo:px-5" >
          <div className="font-Ubuntu font-semibold text-3xl text-black">About ARO</div>
          <div className=" text-xl pt-[1.875rem] flex gap-5 flex-col">
            <div>
              ARO bridges the gap between centralized cloud systems and the needs of next-generation applications. As AI reshapes industries, we bring the cloud closer to users, enabling instant responses, seamless interactions, and scalable performance.
            </div>
            <div>
              By creating an globally-connected edge cloud, we empower the AI-driven world with infrastructure designed for speed, flexibility, and accessibility.
            </div>
          </div>
          <div className="mt-[3.125rem]">
            <SocialButtons links={socialLinks} isInfo />
          </div>

        </div>
        <AScrollToTop />

      </div>

      <AFooter />

    </div>
  </>
}

export default AInfo