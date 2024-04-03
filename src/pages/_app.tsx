import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P, appProps: {}) => ReactNode
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {}, [])

  return <>{getLayout(<Component {...pageProps} />, pageProps, {})}</>
}

export default MyApp
