import classNames from "classnames";
import React, { Fragment, HTMLAttributes, useState } from "react";
import { RxTriangleUp } from "react-icons/rx";
import { useClickAway, useToggle } from "react-use";
import { useRouter } from "next/navigation";
import { useAutoAnim } from "../hooks/useAutoAnim";


export const headerBtnList = [
  { name: "Home", href: "/", target: "_self" },
  { name: "About Us", href: "/aboutUs", target: "_self" },
  // { id: 3, name: "Wiki", href: "" },
  {
    name: "Docs",
    href: "https://docs.enreach.network",
    target: "_blank",
  },
];

export interface MenuItem {
  topSplit?: boolean;
  icon?: any;
  text?: any;
  href?: string;
  name: string
  content?: string;
  selected?: boolean;
  onClick?: () => void;
  [key: string]: any;
  target?: string
}
export interface PoperMenuProps {
  arrow?: HTMLAttributes<HTMLDivElement>;
  menus: MenuItem[];
  keys?: string;
  containerClassName?: any;
  chooseItem?: (item: any) => void;
  isShowText?: boolean;
  iconClassName?: any;
}
function _APoperMenu(p: HTMLAttributes<HTMLDivElement> & PoperMenuProps) {
  const {
    className,
    containerClassName,
    children,
    arrow = {},
    keys = "name",
    menus,
    isShowText = false,
    chooseItem,
    iconClassName,
    ...other
  } = p;
  const r = useRouter();

  const [show, toggleShow] = useToggle(false);
  const ref = useAutoAnim<HTMLDivElement>("t-side");
  const [active, setActive] = useState("");
  useClickAway(ref, () => show && toggleShow(false));

  const onClickItem = (item: MenuItem) => {
    typeof chooseItem === "function" && chooseItem(item);
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
        onClick={(e) => {
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


          <div className="py-[.625rem] mo:py-[.375rem] w-full  bg-[#373737] h-[179px] mt-[.625rem] mo:mt-[.625rem] rounded-2xl z-10 relative">
            {menus.map((item, i) => {
              console.log('dasdsadsa', item, keys);

              return <Fragment key={`poper_menu_item${i}`}>
                {item.topSplit && i > 0 && (
                  <div className="h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]" />
                )}
                <div
                  className={classNames(
                    "flex items-center mx-3 py-4 mo:py-[.875rem] px-4 text-black hover:text-green-2 cursor-pointer",
                    {
                      "hover:bg-[#F5F5F5]  hover:rounded-lg":
                        item.name === active,
                    }
                  )}
                  onMouseEnter={() => {
                    setActive(item.name);
                  }}
                  onClick={() =>
                    !item.href ? onClickItem(item) : r.push(item.href)
                  }
                >
                  {!!item.icon && (
                    <div className="text-xl mo:text-2xl">{item.icon}</div>
                  )}
                  <div className=" flex flex-col">
                    <div className=" text-sm font-bold text-white  font-ns mo:text-base mo:font-normal flex items-center gap-2">
                      {item[keys]}{" "}
                    </div>
                    <div className="w-auto text-xs font-ns ">
                      {item.content}
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

export const APoperMenu = React.memo(_APoperMenu);