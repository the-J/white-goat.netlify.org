import React from 'react'
import Head from 'next/head'
import {ContentWrapper, GlobalStyle, Layout, ListWrapper} from "../components/index.styles";
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

          <ContentWrapper>
              <h2>Misie, bawimy się. 2020 r.</h2>
              <h3>Zasady konkursu</h3>

              <h4><b>Zasady ogólne:</b></h4>

              <ListWrapper>
                  <ol>
                      <li>W zabawie bierze udział kto chce.</li>
                      <li>Podjęcie uczestnictwa zobowiązuje do partycypowania.</li>
                      <li>Celem wzięcia udziału w konkursie trzeba wyrazić chęć na kanale @master. (oddać głos w ankiecie).</li>
                  </ol>
              </ListWrapper>

              <h4><b>Przebieg zabawy:</b></h4>

              <ListWrapper>
                  <ol>
                      <li>W trakcie trwania zabawy (od środy 16.12 do piątku 18.12 do północy)<br/>
                          masz za zadanie opublikować minimum 5 samojebek na kanale master</li>
                      <li>Celem przy Tworzeniu samojebki jest wykonanie najlepszego zdjęcia siebie w tym roku.<br/>
                          Powinieneś być z niego zadowolony i dumny. Crossy między uczestnikami są dozwolone,<br/>
                          jednakże zdjęcie przypisane jest do konta osoby publikującej.</li>
                      <li>Po okresie publikowania zdjęć, nieznane nikomu gremium nieznanych osób z całego<br/>
                          świata wybierze 1 (słownie: jedno) najlepsze zdjęcie każdego z uczestników</li>
                      <li>W sobotę od około godziny 10 finałowe zdjęcia zostaną opublikowane na kanale.</li>
                      <li>Każdy z uczestników wybiera najlepsze według niego zdjęcie<br/>
                          (nie można głosować na własne dzieła).</li>
                      <li>Zdjęcie z najwyższą notą wygrywa.</li>
                  </ol>
              </ListWrapper>

              <h4><b>Zasady przekazania nagrody:</b></h4>

              <ListWrapper>
                  <p>Nagroda zostanie wręczona na ręce zwycięzcy osobiście przez administrację
                          (lub zostanie przesłana do najbliższego dla zwycięzcy paczkomatu bo zimno jest)</p>
                  <Image src="/koziol.png" />
                  <p>Plus niespodzianka.</p>
              </ListWrapper>
        </ContentWrapper>
      </Layout>
  </>
)

export default Home
