import React from "react"

import Highlight, {
  defaultProps,
  Language,
} from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"

interface CodeProps {
  codeString: string
  className: string
  language: Language
}

const Code: React.FC<CodeProps> = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre style={{ padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
