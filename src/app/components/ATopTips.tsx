import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import classNames from "classnames";


const ATopTips = () => {
  const [visible, setVisible] = useState(false);
  const onCloseTips = () => {
    setVisible(false);
    localStorage.setItem("topTips", "enable");
  };
  useEffect(() => {
    const tips = localStorage.getItem("topTips");
    setVisible(!tips);
  }, []);
  if (!visible) return null;


  return (
    <div>
      <div
        className={classNames(
          "sticky  bg-[#1C73FF] flex items-center text-white justify-between  py-5 px-6 mo:text-xs ",
        )}
      >
        <div className="flex items-center justify-center flex-1 h-full flex-row">
          <div className=" flex flex-row ">
            <div className="">
              <label>New Brand Identity and Website coming soon</label>
            </div>
          </div>
        </div>
        <FiX onClick={onCloseTips} className=" text-xl cursor-pointer   " />
      </div>
    </div>
  );
}

export default ATopTips