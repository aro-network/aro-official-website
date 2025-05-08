"use client";
import dynamic from "next/dynamic";
const InfoPage = dynamic(() => import('../components/AInfo'), {
  ssr: false,
})

const Tags = () => {

  return <InfoPage />
}

export default Tags