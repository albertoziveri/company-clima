import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"


const Header = ({ siteTitle }) => (
  <header className="mb-2 text-center">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 240,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/*{siteTitle}*/}
          <Image />
        </Link>
      </h1>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
