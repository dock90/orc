import styled from 'styled-components'
import { black } from './Colors'

export const H1 = styled.h1`
  font-size: 6rem;
  font-weight: 300;
  font-family: Pridi Extralight,Roboto,Arial,sans-serif;
  color: ${black};
  margin: 0;
`

export const H3 = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  font-family: Pridi Extralight,Roboto,Arial,sans-serif;
  margin: 0;
`

export const H5 = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Pridi Extralight,Roboto,Arial,sans-serif;
  color: ${props => props.color ? props.color : black};
  margin: 0;
`

export const Main = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: Pridi Extralight,Roboto,Arial,sans-serif;
`
