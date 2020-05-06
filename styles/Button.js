import styled from 'styled-components'
import { primary, white } from './Colors'

export const PrimaryButton = styled.button`
  background: ${primary};
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 5px 16px;
  color: ${white};
  font-size: 1.5rem;
  height: 2.5rem;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

export const SecondaryButton = styled.button`
  background: none;
  border-radius: 4px;
  border: 1px solid ${primary};
  text-transform: uppercase;
  padding: 5px 16px;
  color: ${primary};
  font-size: 1rem;
  height: 2.5rem;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`
