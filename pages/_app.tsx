import React from 'react'
import App from 'next/app'

import Contentful, { ContentfulContext } from '../components/contentDelivery'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

    contentful: Object;

  constructor(props) {
    super(props);
    this.contentful = new Contentful()
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ContentfulContext.Provider value={this.contentful}>
          <Component {...pageProps} />
      </ContentfulContext.Provider>
    )
  }
}

//const MyApp = () => (
//      <MyAppBase {...pageProps}/>
//)

export default MyApp

