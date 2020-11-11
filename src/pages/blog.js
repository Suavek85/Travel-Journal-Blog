import React from "react"
import { graphql } from "gatsby"
import BlogPostPreview from '../templates/blog-post-preview'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1>My blog posts</h1>
      {posts.map((post, index) => (
        <article key={post.id}>
          <BlogPostPreview 
            slug={ post.fields.slug } 
            title={ post.frontmatter.title } 
            date={ post.frontmatter.date }
            author={ post.frontmatter.author }
            excerpt={ post.excerpt }
            id={index}
          />
        </article>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`