import * as React from "react"

import {
  graphql,
  Link,
} from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  FadeInAnimationWrapper,
  SweepingAnimationWrapper,
} from "@/components/animations"
import { PageProps } from "@/definitions"

import { Seo } from "../components/common"
import Layout from "../components/Layout"

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <SweepingAnimationWrapper timingFunction="linear">
          <header>
            <h1
              className="col-start-2 font-black text-skin-fg text-4xl md:text-6xl"
              itemProp="headline"
            >
              {post.frontmatter.title}
            </h1>
            <FadeInAnimationWrapper>
              <p className="col-start-2 text-xl text-skin-fg-muted">
                {post.frontmatter.date}
              </p>
            </FadeInAnimationWrapper>
          </header>
        </SweepingAnimationWrapper>
        <FadeInAnimationWrapper>
          <section
            itemProp="articleBody"
            className="prose lg:prose-xl text-skin-fg mt-4"
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </FadeInAnimationWrapper>
      </article>
      <nav className="mt-8 grid grid-cols-blog">
        <ul className="col-start-2 text-lg flex flex-wrap justify-between">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
