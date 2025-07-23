import { AllHTMLAttributes, ReactHTML } from "react";
import { cn } from "../utils/cn";

export default function AosAnimItem({ className, children, as, anim = true, ...props }: AllHTMLAttributes<HTMLDivElement> & { as?: (keyof ReactHTML), anim?: boolean }) {
  const Component = (as ?? "div") as any;
  const animProps = anim
    ? {
      'data-aos': "fade-up",
      'data-aos-duration': "1000"
    }
    : {};
  return (
    <Component className={cn({ 'aos-init aos-animate': anim }, className)} {...props} {...animProps}>
      {children}
    </Component>
  );
}
