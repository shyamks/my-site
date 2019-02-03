import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './layout.css'

const Layout = ({ children }) => (
      <div>
        <Helmet title={"Shyam"}>
          <meta charSet="utf-8" />
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '100px auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
