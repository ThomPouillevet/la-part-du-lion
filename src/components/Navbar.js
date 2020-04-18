import React, { useState } from "react"
import { Link } from "gatsby"
import "../style/navbar.scss"
import { MdMenu, MdClose } from "react-icons/md"
import links from "../constants/links"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`navbar ${isOpen ? "has-mobile-menu-open" : ""}`}>
      <div className="navbar-top">
        <div className="navbar-brand">
          <Link to="/" id="part-du-lion-logo">
            <img src={logo} alt="Cooking Lion" className="logo" />
          </Link>
          <button
            type="button"
            className="navbar-button-menu"
            data-action="navbar#toggleMenu"
          >
            <span className="is-only-readable">Menu</span>
            <span className="navbar-button-menu-line">
              <span
                className={`nav-icon ${
                  isOpen ? "d-none" : ""
                }`}
              >
                <MdMenu className="logo-icon" onClick={toggleNav} />
              </span>
              <span
                className={`nav-icon ${
                  isOpen ? "" : "d-none"
                }`}
              >
                <MdClose className="logo-icon" onClick={toggleNav} />
              </span>
            </span>
          </button>
        </div>
        <nav
          className="navbar-nav"
          data-target="navbar.nav"
          id="navigation"
        >
          <ul className="navbar-nav-items">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="active">
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
