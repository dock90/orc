import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
// components
import { H3, H4 } from '../../styles/Typography'
import { primary, black, white } from '../../styles/Colors'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;

  a {
    text-decoration: none;
    color: ${black};
  }
`

const Title = styled.div`
 grid-row: 2;
 grid-column: 2;
 align-self: center;
 text-align: center;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-row: 3;
  grid-column: 2;
  grid-gap: 1rem;
  justify-content: center;
`

const Card = styled.div`
  display: grid;
  border-radius: 4px;
  background: ${white};
  min-height: 250px;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);

  :hover {
    cursor: pointer;
    background: ${primary};
  }
`

const HaveClients = () => {
  const [haveClients, setHaveClients] = useState(null)
  return (
    <Container>
      <Title>
        <H3>Do you have clients?</H3>
      </Title>
      <Cards>
        <Link href="clients">
          <a>
            <Card onClick={() => setHaveClients('yes')}>
              <H4>Yes</H4>
            </Card>
          </a>
        </Link>
        <Link href="no-clients">
          <a>
            <Card onClick={() => setHaveClients('no')}>
              <H4>No</H4>
            </Card>
          </a>
        </Link>
      </Cards>
    </Container>
  )
}

export default HaveClients
