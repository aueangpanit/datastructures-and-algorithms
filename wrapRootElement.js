import React from "react"

/* eslint-disable */
import components from "@/components/mdx"
import { MDXProvider } from "@mdx-js/react"
import { Location } from "@reach/router"

const App = ({ element, location }) => {
  return <MDXProvider {...{ components }}>{element}</MDXProvider>
}

const wrapRootElement = ({ element }) => (
  <Location>{location => <App {...{ element }} {...location} />}</Location>
)

export { wrapRootElement }
