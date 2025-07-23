import React, { CSSProperties } from "react";
import { cn } from "@/app/utils/cn";

const TitleText = ({ text, style = {}, className }: { text: React.ReactNode, style?: CSSProperties, className?: string }) => {
  return (
    <div
      style={{
        zIndex: 2,
        boxSizing: 'border-box',
        backgroundImage: 'linear-gradient(314.89deg, #00E42A 21.13%, #FFFFFF 57.73%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        textShadow: 'none',
        ...style,
      }}
      className={cn("text-[52px] h-fit font-bold text-transparent w-fit mt-0 mx-auto mb-[44px] mo:text-[28px] mo:mb-[30px] font-Space_Grotesk", className)}
    >
      {text}
    </div>
  );
};

export default TitleText;
