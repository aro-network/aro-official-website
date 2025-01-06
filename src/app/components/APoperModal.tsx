import classNames from "classnames";
import React, { Fragment, HTMLAttributes } from "react";
import { useClickAway, useToggle } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import { useAutoAnim } from "../hooks/useAutoAnim";
export interface MenuItem {
  topSplit?: boolean;
  icon?: string;
  text?: string;
  href?: string;
  name?: string
  content?: string;
  selected?: boolean;
  onClick?: () => void;
  target?: string
}
export interface PoperMenuProps {
  menus: MenuItem[];
  containerClassName?: string;
  chooseItem?: (item: { name?: string }) => void;
}
const AMenu = (p: HTMLAttributes<HTMLDivElement> & PoperMenuProps) => {

  const {
    className,
    containerClassName,
    children,
    menus,
    chooseItem,
    ...other
  } = p;
  const r = useRouter();
  const [show, toggleShow] = useToggle(false);
  const ref = useAutoAnim<HTMLDivElement>("t-side");
  const pathname = usePathname()
  useClickAway(ref, () => show && toggleShow(false));

  const onClickItem = (item: MenuItem) => {
    if (typeof chooseItem === "function") {
      chooseItem(item);
    }
    if (item.onClick) {
      item.onClick();
    }
    toggleShow();
  };

  return (
    <div
      {...other}
      style={{ position: "relative" }}
      className={classNames(className)}
      ref={ref}
    >
      <div
        className="flex  "
        onClick={() => {
          toggleShow();
        }}
      >
        {children}
      </div>
      {show && menus.length > 0 && (
        <div
          style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))" }}
          className={classNames(
            "absolute w-[13.75rem] top-full right-[-115px] mo:right-[-1rem]",
            containerClassName
          )}
        >
          <div className=" w-full  bg-[#373737] h-[330px]  text-center mt-[.625rem] rounded-2xl z-[-9999999999] relative">
            {menus.map((item, i) => {
              return <Fragment key={`poper_menu_item${i}`}>
                <div
                  className={classNames(
                    "flex items-center justify-center   mo:py-[10px] text-center w-full  text-black hover:text-green-2 cursor-pointer",

                  )}
                  onClick={() =>
                    !item.href ? onClickItem(item) : r.push(item.href)
                  }
                >
                  <div className={` flex flex-col text-center  justify-center h-[34px] ${pathname === item.href && 'bg-[#4281FF] rounded-xl w-[100px] mo:mx-[5px]'}  w-full`}>
                    <div className=" text-sm font-bold text-white text-center justify-center mo:text-[15px] font-AlbertSans mo:font-extrabold flex items-center ">
                      {item.name}
                    </div>
                  </div>
                </div>
              </Fragment>
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export const APoperMenu = React.memo(AMenu);