import React from "react"

import {
  FadeInAnimationWrapper,
  SweepingAnimationWrapper,
} from "@/components/animations"

export type TextVariant = "title" | "text" | "tag"

export interface TextStyleWrapperProps {
  variant?: TextVariant
}

const TextStyleWrapper: React.FC<TextStyleWrapperProps> = ({
  children,
  variant = "text",
}) => (
  <>
    {variant === "title" && <Title>{children}</Title>}
    {variant === "text" && <Text>{children}</Text>}
    {variant === "tag" && <Tag>{children}</Tag>}
  </>
)

const Title: React.FC = ({ children }) => (
  <SweepingAnimationWrapper timingFunction="linear">
    <h2 className="text-2xl font-black text-skin-fg mt-3">{children}</h2>
  </SweepingAnimationWrapper>
)

const Tag: React.FC = ({ children }) => (
  <FadeInAnimationWrapper>
    <span className="text-skin-fg-muted uppercase">{children}</span>
  </FadeInAnimationWrapper>
)

const Text: React.FC = ({ children }) => (
  <FadeInAnimationWrapper>{children}</FadeInAnimationWrapper>
)

export default TextStyleWrapper
