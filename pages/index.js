import React from 'react'
import Head from 'next/head'
import {Container, GlobalStyle, Layout} from "../components/index.styles";
import Image from "../components/image/Image";
import Header from "../components/header/header";

const Home = () => (
  <>
      <Head>
          <title>White Goat</title>
          <link rel="icon" type="image/png" href="/favicon.ico"/>
      </Head>
      <GlobalStyle />
      <Layout>
        <Header content="White Goat"/>
        <Image src="/WhiteGoat_LOGO.png"/>
      </Layout>
  </>
)

export default Home
