"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AFooter from "@/app/components/AFooter";
import AHeader from "@/app/components/AHeader";
import { convertDate } from "@/app/utils/common";
import Skeleton from "@/app/components/ASkeleton";
import { useRouter, useSearchParams } from "next/navigation";
import AScrollToTop from "@/app/components/AScrollToTop";

const ATags = () => {
  const [posts, setPosts] = useState<ArticleInfo.Post[]>([]);
  const [tagName, setTagName] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ur = useSearchParams()
  const slug = ur.get('id')
  const r = useRouter()


  useEffect(() => {
    fetchPosts(1, true);
  }, [slug]);

  const fetchPosts = async (pageNum = 1, replace = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);

      const isNumeric = /^\d+$/.test(slug!);
      let tagId;

      console.log('adaisNumeric', isNumeric);

      if (isNumeric) {
        tagId = slug;
        const tagRes = await axios.get(
          `https://shop.aro.network/wp-json/wp/v2/tags/${tagId}`
        );
        console.log('tagRestagRes123', tagRes);

        setTagName(tagRes.data.name);
      } else {
        const tagRes = await axios.get(
          `https://shop.aro.network/wp-json/wp/v2/tags?slug=${slug}`
        );
        console.log('tagRestagRes', tagRes);

        if (tagRes.data.length === 0) {
          setTagName("no tags");
          setLoading(false);
          return;
        }


        tagId = tagRes.data[0].id;
        setTagName(tagRes.data[0].name);
      }

      const postsRes = await axios.get(
        `https://shop.aro.network/wp-json/wp/v2/posts?tags=${tagId}&_embed&per_page=5&page=${pageNum}`
      );

      console.log('postspostsResRes', postsRes);

      const newArr = (postsRes.data || []).map((item: ArticleInfo.Post) => {
        const embedded = item._embedded;
        if (embedded && "wp:featuredmedia" in embedded) {
          const imageUrl = embedded["wp:featuredmedia"][0].source_url;
          return { ...item, imageUrl };
        } else {
          return { ...item };
        }
      });
      if (postsRes.data.length < 5) setHasMore(false);

      if (replace) setPosts(newArr);
      else setPosts((prev) => [...prev, ...newArr]);
    } catch (error) {
      console.error(" failed", error);
      setHasMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const getCurrentArticleTags = (data: ArticleInfo.Post) => {
    const tags = data.tags;
    const terms = data._embedded["wp:term"].flat();

    return terms
      .filter(term => tags.includes(term.id))
      .map(term => { return { name: term.name, id: term.id } });
  }


  const loadMore = () => {
    if (!hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  console.log('adsadatagsss', tagName);


  return <div className=" bg-[url(/banner-bg.png)] mo:bg-top bg-cover  z-[100000] relative  w-full">
    <AHeader />
    <div className=" w-container px-[5.125rem]   mo:px-[1.0625rem] h-screen mo:h-full mt-[5.0625rem]  m-auto md:w-full mo:w-full ">
      {!loading ? <div className="bg-[#FFFFFF] flex flex-col px-[3.125rem] rounded-[3.0625rem] justify-center py-10 shadow-box" >
        <div className="text-[#8A8A8A] text-base ">
          <button onClick={() => r.push('/blog')}>Blog</button> / {tagName}</div>
        <div className="flex justify-between items-center mo:flex-col mo:items-start mo:gap-10 ">
          <span className="font-Ubuntu font-semibold text-[2.5rem] text-black">{tagName}</span>
          <button
            onClick={() => r.push('/blog',)}
            className="bg-[#1C73FF] hover:bg-[#0F57E9] text-white h-[2.8125rem]  items-center text-xl mo:text-base mo:font-medium font-medium leading-9  flex justify-center  rounded-[22.5rem]  py-[.8125rem] px-10"
          >
            Back to Blog
          </button>

        </div>
      </div>
        : <Skeleton className="h-[12.5rem] w-full rounded-[3.0625rem] " />
      }
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(21.875rem,1fr))] justify-between  gap-5 mt-[5rem] mo:mt-[1.875rem] ">
        {!loading ? posts.map((item) => {
          const data = getCurrentArticleTags(item)

          return <div key={item.title.rendered} className="navigation-wrapper  bg-white flex rounded-[3.0625rem] gap-4  justify-center p-5 flex-col items-center">
            <img onClick={() => r.push(`/info?postId=${item.id}`)} src={item.imageUrl} className="w-full h-[15.625rem] rounded-3xl cursor-pointer " alt='wp' />
            <div className="flex justify-between flex-col pt-5 pb-[.625rem]   h-full ">
              <div onClick={() => r.push(`/info?postId=${item.id}`)} title={item.title.rendered} className="text-[1.75rem] cursor-pointer mo:text-[1.625rem]  font-semibold text-black text-left line-clamp-2 pb-5  text-ellipsis font-Ubuntu"> {item.title.rendered}</div>
              <div className="flex flex-col gap-[3.75rem] text-left   h-full justify-between ">
                <div className="flex mt-5 mo:mt-10 gap-[.625rem] flex-wrap ">
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
          <Skeleton className="h-[31.25rem] w-full rounded-[3.0625rem] " />
        }

      </div>
      {hasMore && <div className="w-full text-center pt-[3.75rem] pb-[5rem]  ">
        <button disabled={loadingMore} onClick={loadMore} className="py-[.8125rem] px-[2.0625rem]  bg-[#4281FF] rounded-[2.0625rem] text-white"
        >
          {loadingMore ? "loading..." : " View All Blogs"}
        </button>
      </div>
      }
      {posts && posts.length ? <AScrollToTop /> : null}

    </div>
    <AFooter />

  </div>
}

export default ATags