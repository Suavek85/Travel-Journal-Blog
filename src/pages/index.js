import React from "react"
import { graphql, Link } from "gatsby"
import Blog from "./blog"
import styles from "./index.module.scss"
import TopMenuItem from "../components/TopMenuItem"

export default function Home({ data }) {

  const { posts } = data.blog

  const placesArr = posts && posts.map(el => {
      const { place } = el.frontmatter;
      if (place && place.includes(',')) return place.split(', ');
      return place;
  });

  const uniquePlacesArr = [...new Set(placesArr.flat())];

  const menuElements = [ 
    {  nmbr: uniquePlacesArr.length, name: 'Places' }, 
    {  nmbr: 1, name: "Landmarks" },
    {  nmbr: '1d', name: "Time" },
  ]

  return (
    <div>
      <div className={ styles.topmenu }>
        { menuElements.map(el => <TopMenuItem posts={ el.nmbr } IconItem={ el.icon } name={ el.name } />) }
        <Link style={{textDecoration: 'none', color: 'grey'}} to="/blog">Read my blog</Link>
      </div>
      <div className={ styles.header } style={{ width: '100%', height: '400px'}} >
        <h1 style={{ textAlign: 'center' }}>Driving around<br></br>Andalucia</h1>
      </div>
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
          place
        }
        excerpt
        id
      }
    }

  }
`