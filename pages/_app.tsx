import React from 'react'
import App from 'next/app'

import '../styles/index.scss';


const MyApp = ({ Component , pageProps }) => {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp

