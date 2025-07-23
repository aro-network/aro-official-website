import React from "react";
import { cn } from "@/app/utils/cn";

const LinerGridentMap: { [k: string]: string } = {
  0: 'linear-gradient(to right, ),linear-gradient(to right, #000, #000),linear-gradient(293.4deg, #44F54D -4.55%, #42474D 24.34%)',
  1: 'linear-gradient(111.63deg, #186224 -32.02%, rgba(115, 115, 115, 0) 71.94%),linear-gradient(to right, #000, #000),linear-gradient(114.04deg, #1FFF2A 8.43%, #192626 48.22%, #1FFF2A 98.57%)',
  2: 'linear-gradient(124.57deg, #176123 -10.04%, rgba(115, 115, 115, 0) 38.35%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #42474D 28.51%)',
  3: 'linear-gradient(10.29deg, #1A5426 -19.77%, rgba(115, 115, 115, 0) 40.41%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #4A5A54 28.51%)',
  4: 'linear-gradient(304.57deg, #1A5026 -15.67%, rgba(115, 115, 115, 0) 32.73%),linear-gradient(to right, #000, #000),linear-gradient(293.4deg, #44F54D -4.55%, #42474D 24.34%)',
  5: 'linear-gradient(to right, #000, #000),linear-gradient(to right, #000, #000),linear-gradient(to right, #2D3239,#2D3239)',
  6: 'linear-gradient(124.57deg, #176123 -1000%, rgba(115, 115, 115, 0) 38.35%),linear-gradient(to right, #000, #000),linear-gradient(113.4deg, #44F54D -0.39%, #42474D 28.51%)',
  7: 'linear-gradient(304.57deg, #1A5026 9%, rgba(115, 115, 115, 0) 32.73%),linear-gradient(to right, #000, #000),linear-gradient(293.4deg, #44F54D -4.55%, #42474D 24.34%)',
};

const LinerGridentBorder = ({ className, children, type = '0',  }: { className?: string, children?: React.ReactNode, type?: string, anim?: boolean }) => {
  return (
    <div
      style={{
        backgroundClip: 'padding-box, padding-box, border-box',
        backgroundOrigin: 'padding-box, padding-box, border-box',
        border: '1px solid transparent',
        backgroundImage: LinerGridentMap[type] || LinerGridentMap[0],
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};

export default LinerGridentBorder;
