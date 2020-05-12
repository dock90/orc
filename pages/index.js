import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import { H1, H5 } from '../styles/Typography'
import { PrimaryButton } from '../styles/Button'

const Container = styled.div``
const Body = styled.div`
  display: grid;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  margin-top: 200px;
`

const Action = styled.div`
  margin-top: 2rem;
  justify-self: center;
`

const Home = () => (
  <Container>
    <Head>
      <title>ORC | Online Runway Calculator</title>
      <meta
        name="description"
        content="Online Runway Calculator is a step by step tool for solo business operators to quickly visualize their runway and earning potential."
      />
    </Head>
    <Header />
    <Body>
      <H1>How is your business doing financially?</H1>
      <H5>Do you know how much runway your business has and how efficiently you are utilizing your time? Answer a few questions to get clarity, insight and actionable suggestions to improve your business.</H5>
      <Action>
        <Link href="/orc/business-type">
          <a>
            <PrimaryButton>start now</PrimaryButton>
          </a>
        </Link>
      </Action>
    </Body>
  </Container>
)

export default Home
