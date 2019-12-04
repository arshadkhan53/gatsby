import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainNav from "./mainnav"
import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  

  <header
    style={{
      background: `#fbfbfb`,
      marginBottom: `1.45rem`,
    }}
  >
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <div className="logo">
      <img src={logo} />
    </div>
    <MainNav />
      
    </div>
  </header>
)
console.log(logo)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
