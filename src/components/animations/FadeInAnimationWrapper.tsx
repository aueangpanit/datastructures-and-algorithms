import React, { useRef } from "react"

import { useIntersection } from "@/hooks"

export const FadeInAnimationWrapper: React.FC = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [visible] = useIntersection(ref)

  return (
    <div
      className={`${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
      } transition delay-300`}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}
