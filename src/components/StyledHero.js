import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 23rem)" : "50vh")};
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    min-height: ${props => (props.home ? "calc(100vh - 20rem)" : "50vh")};
  }
`
