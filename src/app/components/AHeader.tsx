import { FC, Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { HiOutlineMenu } from 'react-icons/hi'
import classNames from "classnames"
import { APoperMenu } from "./APoperModal"
import * as HoverCard from "@radix-ui/react-hover-card";
import { headerBtnList } from "../utils/common"
import useMobileDetect from "../hooks/useMobileDetect"

const AHeader: FC<{ className?: string, containerClassName?: string, rightClassName?: string }> = ({ className = '', containerClassName = '', rightClassName = '' }) => {
  const seBtnList = [
    {
      name: "Season 1",
      // href: 'https://dashboard.enreach.network',
      target: '_blank'
    },
    {
      name: "Edge Node",
      href: '/edgeNode',
      target: '_blank'
    },
  ]
  const isMobile = useMobileDetect()
  const [buttons, setButtons] = useState([...headerBtnList]);

  useEffect(() => {
    if (isMobile) {
      setButtons(() => {
        const updatedButtons = [...headerBtnList];
        updatedButtons.splice(2, 1, ...seBtnList);
        return updatedButtons;
      });
    } else {
      setButtons([...headerBtnList]);
    }
  }, [isMobile])

  return <div>
    <div className={` w-container mo:w-full mo:px-[12px] m-auto flex pt-10 mo:pt-5  items-center  ${containerClassName} md:w-full  `}>
      <div className={`w-[50%] lg:px-10 ${className}`}>
        <Link href={'/'} className=" flex items-center gap-[13px] mo:h-[32px] mo:w-[105px] ">
          <img src="./flower.svg" className="mo:hidden" />
          <img src="./logo.png" className="lg:hidden" />
          <span className="text-[#FFF] mo:hidden  text-[35px] font-semibold leading-normal">EnReach</span>
        </Link>
      </div>
      <div className="flex lg:hidden justify-end  w-[50%]">
        <APoperMenu
          containerClassName={"!w-[115px] !h-[579px] mo:!right-[0px] "}
          menus={buttons}
          className="absolute z-[99999]"
        >
          <HiOutlineMenu className={classNames(`w-6 h-6 !text-white`)} />
        </APoperMenu>
      </div>


      <div className={`flex mo:hidden ${rightClassName} justify-end gap-[36px] md:gap-5 smd:gap-0  w-[50%] button-container`}>
        {buttons.map((item, index) => {
          return (
            <Fragment key={`btn_${index}`}>
              {index === 2 ?
                <HoverCard.Root openDelay={200} closeDelay={200}>
                  <HoverCard.Trigger asChild>
                    <div className={` headerBtn  text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`} >
                      Participate
                    </div>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content className="HoverCardContent" sideOffset={10}>
                      <div className="flex flex-col  items-center text-[#FFF] gap-2  font-extrabold md:font-semibold text-base bg-[rgba(255, 255, 255, 1)] leading-6">
                        {seBtnList.map((item, index) =>
                          <a key={`seBtn_${index}`} href={item.href} target={item.target} className=" headerBtn text-center w-full p-[10px] hover:rounded-xl">
                            {item.name}
                          </a>
                        )
                        }
                      </div>
                      <HoverCard.Arrow className="HoverCardArrow" />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
                :
                <a href={item.href} target={item.target} className={` headerBtn  text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6`}>{item.name}</a>

              }
            </Fragment>
          )
        })}


      </div>
    </div>

  </div>

}

export default AHeader