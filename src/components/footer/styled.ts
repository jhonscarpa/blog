import styled from 'styled-components'

export const Footer = styled.footer`
  border-top: 1px solid black;
  display: inline-block;
  width: 100%;
  justify-content: space-between;
  left: 1rem;
  background: #9775aa;
  a {
    transition: color 0.3s;
    &:hover {
      color: gray;
    }
  }
  h1 {
    margin-left: 1.5rem;
  }
  p {
    margin-left: 1.5rem;
  }
`
export const Icon = styled.div`
  position: relative;
  margin-right: 1.5rem;
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  justify-content: flex-end;
`
