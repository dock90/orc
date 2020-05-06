import styled from 'styled-components'
import Link from 'next/link'
import { base, white } from '../styles/Colors'
import { H3, Main } from '../styles/Typography'
import { PrimaryButton } from '../styles/Button'

const Container = styled.div`
  background: ${base};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 98vh;

  a {
    text-decoration: none;
    color: #1565C0;
  }
`

const Card = styled.div`
  display: grid;
  background: ${white};
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
  max-width: 800px;
  padding: 4rem;

  h3 {
    text-align: center;
  }
`

const Action = styled.div`
  justify-self: center;
`

const About = () => (
  <Container>
    <Card>
      <H3>How do I calculate runway?</H3>
      <Main>My recommendations are based on over four years of failing then successfully running a service based creative business so I can relate what you are going through. Heavy inspiration is also drawn from Jason and Caroline over at <a href="https://wanderingaimfully.com/">Wandering Aimfully</a>.</Main>
      <Main>Finances are usually a confusing and most likely avoided subject for solo creatives. Yet understanding finances is critical if you are going to run a successful business. It literally makes or breaks your work.</Main>
      <Main>Keeping this in mind I came up with the online runway calculator - a simple tool that asks you a few questions and gives you valuable insight sna actionable next steps to understand where your business is and what steps to take next.</Main>
      <Action>
        <Link href="/orc/type-of-business">
          <a>
            <PrimaryButton>start now</PrimaryButton>
          </a>
        </Link>
      </Action>
    </Card>
  </Container>
)

export default About
