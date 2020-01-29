import * as React from 'react'
import { initGA, logPageView } from './analytics/analytics';
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'


export default class Layout extends React.Component {


  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }


  render () {
    return (
      <div>
        <Head>
          <title>"Christliches Kinderhilfswerk Luwero-Uganda e.V."</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="wrapper layout">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}