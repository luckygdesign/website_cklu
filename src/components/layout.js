import React from 'react'
import { Link } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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
