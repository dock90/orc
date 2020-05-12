import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { H3, H6 } from '../../styles/Typography'
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

  h3, h6 {
    text-align: center;
  }
`

const Next = styled.div`
  padding-top: 1rem;
  grid-row: 1;
  grid-column: 3;
`

const RateContainer = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  justify-content: center;
`

const RateInput = styled.input`
  border: 2px solid ${black};
  height: 4rem;
  font-size: 2rem;
  justify-self: center;
  margin-top: 1rem;
`

const BlocksContainer = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 2;
  justify-content: center;
`

const BlocksInput = styled.input`
  border: 2px solid ${black};
  height: 4rem;
  font-size: 2rem;
  justify-self: center;
  margin-top: 1rem;
`

const BusinessInfo = () => {
  const [rate, setRate] = useState(null)
  const [blocks, setBlocks] = useState(null)

  return (
    <Container>
      {rate && blocks &&
        <Next>
          <Link href="have-clients">
            <a>
              <PrimaryButton>Next</PrimaryButton>
            </a>
          </Link>
        </Next>
      }
      <RateContainer>
        <H3>What is your rate?</H3>
        <H6>Use hourly rate or set project rate if you have a productized service offering.</H6>
        <RateInput onChange={(event) => setRate(event.target.value)} />
      </RateContainer>
      <BlocksContainer>
        <H3>How many clients blocks do you have per week?</H3>
        <H6>How many blocks of "deep work" you have to work on clients per week.</H6>
        <H6>Never calculated this before? Use this worksheet - then come back to this step.</H6>
        <BlocksInput onChange={(event) => setBlocks(event.target.value)} />
      </BlocksContainer>
    </Container>
  )
}
export default BusinessInfo
