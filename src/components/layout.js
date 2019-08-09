import React from 'react'
import { Link } from 'gatsby'

import Header from './header'
import Footer from './footer'

import logo from '../images/logo.png';

import '../styles/index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="wrapper layout">
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
