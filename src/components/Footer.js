import React from 'react'
import {Link} from "gatsby"
import "../styles/footer.scss"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className="icons">
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              className={item.class}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
