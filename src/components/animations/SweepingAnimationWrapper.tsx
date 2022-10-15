import React, { useRef } from "react"

import { useIntersection } from "@/hooks"

export type TimingFunction = "linear" | "default"

export interface SweepingAnimationWrapper {
  timingFunction?: TimingFunction
}

export const SweepingAnimationWrapper: React.FC<SweepingAnimationWrapper> = ({
  children,
  timingFunction = "default",
}) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [visible] = useIntersection(ref)

  return (
    <div
      className={`${visible ? "max-w-xl" : "max-w-0"} ${
        timingFunction === "linear" && "duration-1000 ease-linear"
      } transition-all delay-300 overflow-hidden`}
    >
      <div ref={ref} className={`whitespace-nowrap`}>
        {children}
      </div>
    </div>
  )
}
