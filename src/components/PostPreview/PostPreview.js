import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { DateRange } from '@styled-icons/material/DateRange'
import { Place } from '@styled-icons/material-rounded/Place'
import "./PostPreview.scss"

export default function PostPreview(props) {

  const isEven = (n) => (n + 1) % 2 == 0;

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

  return (
      <div className={`blog-card ${isEven(props.id) ? "" : "alt"}`}>
        <div className="meta">
          <div className="photo"></div>
          <ul className="details">
            <div className="author">
              <PersonFillStyled />
              <div>{ props.author }</div>
            </div>
            <div className="date">
              <DateRangeStyled />
              <div>{ props.date }</div>
            </div>
            <div className="tags">
              <PlaceStyled />
              <div>{ props.place }</div>
            </div>
          </ul>
        </div>
        <div className="description">
          <h1 style={{color: 'grey'}}>{ props.title }</h1>
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
