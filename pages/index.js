import React from 'react'
import Head from 'next/head'
import {Container, GlobalStyle, Layout} from "../components/index.styles";

const Home = () => (
  <>
      <Head>
          <title>White Goat</title>
          <link rel="icon" type="image/png" href="/favicon.ico"/>
      </Head>
      <Container>
          <GlobalStyle />
          <Layout>
            <h1>Hello, world!</h1>
          </Layout>
      </Container>
  </>
)

export default Home
