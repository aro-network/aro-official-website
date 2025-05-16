import { FiArrowUp } from "react-icons/fi"

const AScrollToTop = () => {

  return <button onClick={() => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  } className=" mo:mt-[5rem]  mt-20 mb-10 mo:mb-12 rounded-[1.5625rem] float-right shadow-box border w-[3.125rem] h-[3.125rem] flex items-center justify-center ">
    <FiArrowUp className="w-6" />
  </button>

}

export default AScrollToTop