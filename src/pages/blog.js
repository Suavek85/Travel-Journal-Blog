import React from "react"
import { graphql } from "gatsby"
import PostHeader from "../components/PostHeader/PostHeader"
import PostPreview from '../components/PostPreview/PostPreview'

export default function Blog({ data }) {

  const { posts } = data.blog

  return (
    <div>
      <PostHeader />
        { posts.map((post, index) => {
      
          const props = {
            slug: post.fields.slug,
            reading: post.fields.readingTime.text,
            title: post.frontmatter.title,
            subtitle: post.frontmatter.subtitle,
            date: post.frontmatter.date,
            author: post.frontmatter.author,
            excerpt: post.excerpt,
            place: post.frontmatter.place,
            landmarks: post.frontmatter.landmarks,
            id: index,
          }

          return (
            <article key={ post.id }>
              <PostPreview {...props} />
            </article>
        )} 
      )}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date]}) {
      posts: nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(fromNow: true)
          title
          subtitle
          author
          place
          landmarks
          start
        }
        excerpt
        id
      }
    }
  }
`