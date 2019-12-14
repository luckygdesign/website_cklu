import * as React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

type IProps = {
  title?: string
}

const Layout: React.FunctionComponent<IProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper layout">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
)

export default Layout
