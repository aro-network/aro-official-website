"use client";

import dynamic from "next/dynamic";
const TagsPage = dynamic(() => import('../components/ATags'), {
  ssr: false,
})

const Tags = () => {

  return <TagsPage />
}

export default Tags