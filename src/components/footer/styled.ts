import styled from 'styled-components'

export const Footer = styled.footer`
  background: whitesmoke;
  border-top: 1px solid black;
  margin-top: 2.2rem;
  display: inline-block;
  width: 100%;
  justify-content: space-between;

  h1 {
    box-sizing: border-box;
    height: 2rem;
  }
  p {
    font: 300 1.2rem 'Open Sans Condensed', sans-serif;
    box-sizing: border-box;
  }
`
export const Icon = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  justify-content: flex-end;
  position: relative;
  transition: color 0.3s;
  &:hover {
    color: gray;
  }
`
