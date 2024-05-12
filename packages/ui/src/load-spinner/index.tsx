import { forwardRef } from "react";

import { cn } from "../lib";

import type { LoadSpinnerProps } from "./types";

/**
 * LoadSpinner
 * @param LoadSpinnerProps - Has all HTMLDivElement Props
 * @param LoadSpinnerProps.className - To style the spinner, mainly for size and color (additional class will get merged by cn()).
 * @returns JSX.Element
 * @example
 *  <Spinner className="h-6 w-6"/>
 */
const LoadSpinner = forwardRef<HTMLDivElement, LoadSpinnerProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={cn("h-5 w-5", className)} ref={ref} {...rest}>
        <div className="relative left-1/2 top-1/2 aspect-square [&>*:nth-child(1)]:[animation-delay:-1.2s] [&>*:nth-child(1)]:[transform:rotate(.0001deg)_translate(146%)] [&>*:nth-child(10)]:[animation-delay:-.3s] [&>*:nth-child(10)]:[transform:rotate(270deg)_translate(146%)] [&>*:nth-child(11)]:[animation-delay:-.2s] [&>*:nth-child(11)]:[transform:rotate(300deg)_translate(146%)] [&>*:nth-child(12)]:[animation-delay:-.1s] [&>*:nth-child(12)]:[transform:rotate(330deg)_translate(146%)] [&>*:nth-child(2)]:[animation-delay:-1.1s] [&>*:nth-child(2)]:[transform:rotate(30deg)_translate(146%)] [&>*:nth-child(3)]:[animation-delay:-1s] [&>*:nth-child(3)]:[transform:rotate(60deg)_translate(146%)] [&>*:nth-child(4)]:[animation-delay:-.9s] [&>*:nth-child(4)]:[transform:rotate(90deg)_translate(146%)] [&>*:nth-child(5)]:[animation-delay:-.8s] [&>*:nth-child(5)]:[transform:rotate(120deg)_translate(146%)] [&>*:nth-child(6)]:[animation-delay:-.7s] [&>*:nth-child(6)]:[transform:rotate(150deg)_translate(146%)] [&>*:nth-child(7)]:[animation-delay:-.6s] [&>*:nth-child(7)]:[transform:rotate(180deg)_translate(146%)] [&>*:nth-child(8)]:[animation-delay:-.5s] [&>*:nth-child(8)]:[transform:rotate(210deg)_translate(146%)] [&>*:nth-child(9)]:[animation-delay:-.4s] [&>*:nth-child(9)]:[transform:rotate(240deg)_translate(146%)]">
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
          <div className="animate-loader absolute -left-[10%] top-[-3.9%] h-[8%] w-[24%] rounded-[5px] bg-current" />
        </div>
      </div>
    );
  }
);

LoadSpinner.displayName = "LoadSpinner";

export { LoadSpinner };
