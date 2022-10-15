import React from "react"

import TextStyleWrapper, {
  TextStyleWrapperProps,
  TextVariant,
} from "./TextStyleWrapper"

export const Button: React.FC<TextStyleWrapperProps> = ({
  children,
  variant = "text",
}) => (
  <TextStyleWrapper variant={variant}>
    <div className="group flex items-center cursor-pointer">
      <div
        className={`${getMinusHeightStyles(
          variant
        )} h-0 w-0 transition-all group-hover:w-2 group-hover:mr-1`}
      ></div>
      {children}
    </div>
  </TextStyleWrapper>
)

function getMinusHeightStyles(variant: TextVariant) {
  switch (variant) {
    case "title":
      return "border-t-2 border-skin-fg"
    case "tag":
      return "border-t border-skin-fg-muted"
    default:
      return "border-t border-skin-fg"
  }
}
