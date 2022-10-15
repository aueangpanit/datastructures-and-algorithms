import React from "react"

import { SweepingAnimationWrapper } from "../animations"

export const Divider: React.FC = () => (
  <SweepingAnimationWrapper>
    <hr className="border-skin-fg-muted" />
  </SweepingAnimationWrapper>
)
