import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { DateRange } from '@styled-icons/material/DateRange'
import { Place } from '@styled-icons/material-rounded/Place'
import { Landmark } from  '@styled-icons/boxicons-solid/Landmark'
import { ArrowRightShort } from  '@styled-icons/bootstrap/ArrowRightShort'
import "./PostPreview.scss"

export default function PostPreview(props) {

    const isEven = (n) => (n + 1) % 2 == 0;
    const READ_MORE = 'Read more';

    const PersonFillStyled = styled(PersonFill)`
      width: 32px;
      height: 32px;
      padding-right: 7px;
    `
    const DateRangeStyled = styled(DateRange)`
      width: 32px;
      height: 32px;
      padding-right: 7px;
    ` 

    const PlaceStyled = styled(Place)`
      width: 32px;
      height: 32px;
      padding-right: 7px;
    `

    const LandmarkStyled = styled(Landmark)`
      width: 28px;
      height: 28px;
      padding-right: 7px;
    `

    const ArrowRightShortStyled = styled(ArrowRightShort)`
      width: 24px;
      height: 24px;
    `

    const { author, date, place, landmarks } = props;

    const infoData = [
      { icon: <PersonFillStyled />, text: author },
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
