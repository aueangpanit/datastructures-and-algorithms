import * as React from "react"

import {
  graphql,
  Link,
} from "gatsby"

import {
  Button,
  Divider,
  Seo,
} from "@/components/common"
import TextStyleWrapper from "@/components/common/TextStyleWrapper"
import Layout from "@/components/Layout"
import {
  INode,
  PageProps,
} from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol className="max-w-2xl">
        {posts.map(({ node }: { node: INode }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <React.Fragment key={node.fields.slug}>
              <Divider />
              <li className="py-6">
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <TextStyleWrapper>
                      <small className="text-skin-fg-muted text-lg">
                        {node.frontmatter.date}
                      </small>
                    </TextStyleWrapper>

                    <Link to={node.fields.slug} itemProp="url">
                      <Button variant="title">{title}</Button>
                    </Link>
                  </header>
                  <TextStyleWrapper>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.excerpt || node.frontmatter.description,
                      }}
                      itemProp="description"
                      className="text-lg text-skin-fg mt-3"
                    />
                  </TextStyleWrapper>
                  <section className="flex md:text-sm space-x-2 mt-3">
                    {(node.frontmatter.tags || "")
                      .split(",")
                      .map((s: string) => s.trim())
                      .map((s: string) => (
                        <Button variant="tag" key={s}>{`#${s}`}</Button>
                      ))}
                  </section>
                </article>
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
