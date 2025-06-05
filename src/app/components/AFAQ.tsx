import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { faqText } from "../utils/common"
import { Accordion, AccordionItem } from "@heroui/accordion";

const AFAQ = () => {

  return <div
    className="w-container m-auto flex px-[170px] mo:px-5  pt-20 mo:pt-[3.125rem]  md:px-[60px] md:w-full  mo:w-full flex-col "
  >
    <div data-aos="fade-up"
      data-aos-duration="1000"
      className="aos-init aos-animate font-Ubuntu font-medium text-[2.75rem] mo:text-[1.75rem] text-black text-center mo:mb-[1.875rem] mb-[3.125rem] ">
      ARO FAQ
    </div>
    <Accordion variant="light" className="flex  flex-col gap-8 mo:gap-6  " showDivider={false}>
      {faqText.map((item, index) => {
        return <AccordionItem
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" aos-init aos-animate "
          classNames={{ 'trigger': 'flex justify-between items-baseline ', }} key={index} indicator={({ isOpen }) => (isOpen ? <FiMinusCircle className="text-black" /> : <FiPlusCircle className="text-black" />)} title={<div className=" font-medium text-2xl mo:text-lg text-left  text-black">{item.title}</div>}>
          <div className=" text-base mo:text-sm text-black pt-8 mo:pt-6"> {item.content}</div>

        </AccordionItem>
      })}
    </Accordion>


  </div>

}
export default AFAQ