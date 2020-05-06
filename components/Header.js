import styled from 'styled-components'
import Link from 'next/link'
import { H5 } from '../styles/Typography'
import { SecondaryButton } from '../styles/Button'
import { primary } from '../styles/Colors'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 1rem;

  a {
    text-decoration: none;
  }
`

const Logo = styled.div``
const Info = styled.div`
  justify-self: end;
`

const Header = () => (
  <Container>
    <Logo>
      <Link href="/">
        <a><H5 color={primary}>ORC</H5></a>
      </Link>
    </Logo>
    <Info>
      <Link href="/how-it-works">
        <a>
          <SecondaryButton>how it works</SecondaryButton>
        </a>
      </Link>
    </Info>
  </Container>

)

export default Header
