import React from "react"
import { graphql, Link } from "gatsby"
import Blog from "./blog"

export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata
  //pass something to blog to have a diffrent styling
  return (
    <div>
      <Link to="/blog">Read my blog</Link>
      <img style={{width: '100%'}} alt="Andalucia" src={ data.image.publicURL } />
      <h1>{ title }</h1>
      <p>{ description }</p>
      <Blog data={ data } />
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "andaluciaback.jpg" }) {
      publicURL
    }

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