import React from "react"
import { graphql } from "gatsby"
import getHeaderData from "../helpers/getHeaderData"
import { myContext } from '../helpers/provider'
import Blog from "./blog"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"

export default function Home({ data }) {
  const headerData = getHeaderData(data)

  return (
    <myContext.Consumer>
      {context => (
        <div>
          <Menu headerData={ headerData } />
          <Header />
          <Blog data={ data } />
       </div>
      )}
    </myContext.Consumer>
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

    blog: allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date]})  {
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
