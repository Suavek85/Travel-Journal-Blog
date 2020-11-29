import React from "react"
import { graphql } from "gatsby"
import styles from "./PostTemplate.module.scss"

export default function PostTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <div classname={ styles.wrapper }>
      <div className={ styles.photo } >
      </div>
      <div className={ styles.content }>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`