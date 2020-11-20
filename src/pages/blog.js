import React from "react"
import { graphql } from "gatsby"
import BlogPostPreview from '../templates/blog-post-preview'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'indianred', fontFamily: 'Montserrat, sans-serif', marginTop: '35px' }}>Recent travels...</h1>
      {posts.map((post, index) => (
        <article key={post.id}>
          <BlogPostPreview 
            slug={ post.fields.slug } 
            title={ post.frontmatter.title } 
            date={ post.frontmatter.date }
            author={ post.frontmatter.author }
            excerpt={ post.excerpt }
            place={post.frontmatter.place}
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
          place
        }
        excerpt
        id
      }
    }
  }
`