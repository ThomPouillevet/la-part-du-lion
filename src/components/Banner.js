import React from "react"
import "../styles/banner.scss"

const Banner = ({ title, fakeInfo, info, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p className="fake-info">{fakeInfo}</p>
      <p className="info">{info}</p>
      {children}
    </div>
  )
}

export default Banner
