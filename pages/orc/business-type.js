import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { H3, H4 } from '../../styles/Typography'
import { PrimaryButton } from '../../styles/Button'
import { primary, black, white } from '../../styles/Colors'

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

const Next = styled.div`
  padding-top: 1rem;
  grid-row: 1;
  grid-column: 3;
`

const Title = styled.div`
 grid-row: 2;
 grid-column: 2;
 align-self: center;
 text-align: center;
`

const Other = styled.div`
  display: grid;
  grid-row: 3;
  grid-column: 2;
`

const OtherType = styled.input`
  border: 2px solid ${black};
  height: 4rem;
  font-size: 2rem;
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
  const [details, setDetails] = useState(null)

  console.log('Type: ', details)

  return (
    <Container>
      {type === 'Other' &&
        <Next>
          <Link href="business-info">
            <a>
              <PrimaryButton>Next</PrimaryButton>
            </a>
          </Link>
        </Next>
      }
      <Title>
        <H3>What kind of business do you have?</H3>
      </Title>
      {type === 'Other' &&
        <Other>
          <OtherType onChange={(event) => setDetails(event.target.value)} />
        </Other>
      }
      {type !== 'Other' &&
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
            <H4>Other</H4>
          </Card>
        </Cards>
      }
    </Container>
  )
}

export default BusinessType
