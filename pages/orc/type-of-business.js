import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { H3, H4 } from '../../styles/Typography'
import { primary, white } from '../../styles/Colors'

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
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

const BusinessType = () => {
  const [type, setType] = useState(null)

  console.log('Type: ', type)

  return (
    <Container>
      <Title>
        <H3>What kind of business do you have?</H3>
      </Title>
      <Cards>
        <Link href="business-info">
          <a>
            <Card onClick={() => setType('Design')}>
              <H4>Design</H4>
            </Card>
          </a>
        </Link>
        <Link href="business-info">
          <a>
            <Card onClick={() => setType('Development')}>
              <H4>Development</H4>
            </Card>
          </a>
        </Link>
        <Link href="business-info">
          <a>
            <Card onClick={() => setType('Photography')}>
              <H4>Photography</H4>
            </Card>
          </a>
        </Link>
        <Card onClick={() => setType('Other')}>
          {/* TODO: Update display if other, present input */}
          <H4>Other</H4>
        </Card>
      </Cards>
    </Container>
  )
}

export default BusinessType
