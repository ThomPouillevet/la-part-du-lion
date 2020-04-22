import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
h2 {
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 0;
}
`

const Title = ({ text }) => {
  return (
    <TitleWrapper>
      <h2>{text}</h2>
    </TitleWrapper>
  )
}

export default Title
