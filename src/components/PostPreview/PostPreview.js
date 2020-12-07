import React from "react"
import { Link } from "gatsby"
import { PersonFillStyled, DateRangeStyled, PlaceStyled, LandmarkStyled, ArrowRightShortStyled }from './styledComponents'
import "./PostPreview.scss"

export default function PostPreview(props) {

    const isEven = (n) => (n + 1) % 2 == 0;
    const READ_MORE = 'Read more';
    const { author, date, place, landmarks } = props;

    const infoData = [
      { icon: <PersonFillStyled/>, text: author },
      { icon: <DateRangeStyled />, text: date },
      { icon: <PlaceStyled />, text: place },
      { icon: <LandmarkStyled />, text: landmarks }
    ]

    return (
      <div className={`card ${ isEven(props.id) ? "" : "alt"}` }>
        <div className="wrapper">
          <div className="photo"></div>
          <ul className="content">
            { infoData.map(el => el.text && (
              <div className="content-item">
                { el.icon }
                <div>{ el.text }</div>
              </div>
            ))}
          </ul>
        </div>
        <div className="description">
          <h1>{ props.title }</h1>
          <h2>{ props.subtitle }</h2>
          <p>{ props.excerpt }</p>
          <p className="read-more">
            <span>{ props.reading }</span>
            <Link to={ props.slug }>
              { READ_MORE }
              <ArrowRightShortStyled />
            </Link>
          </p>
        </div>
      </div>
  )
}
