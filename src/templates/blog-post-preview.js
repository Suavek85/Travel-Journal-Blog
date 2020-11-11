import React from "react"
import { Link } from "gatsby"
import "./blog-post-preview.scss"

export default function BlogPostPreview(props) {

  const isEven = (n) => (n + 1) % 2 == 0;

  return (
      <div className={`blog-card ${isEven(props.id) ? "" : "alt"}`}>
        <div className="meta">
          <div
            className="photo"
          ></div>
          <ul className="details">
            <li className="author">
              <div >{ props.author }</div>
            </li>
            <li className="date">{ props.date }</li>
            <li className="tags">
              <ul>
                <li>
                  <div >Learn</div>
                </li>
                <li>
                  <div>Code</div>
                </li>
                <li>
                  <div>HTML</div>
                </li>
                <li>
                  <div>CSS</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{ props.title }</h1>
          <h2>Sub title</h2>
          <p>{ props.excerpt }</p>
          <p className="read-more">
          <Link to={ props.slug }>
                Read More
          </Link>
          </p>
        </div>
      </div>
  )
}
