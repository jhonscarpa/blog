import styled from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding: 1.5rem;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: #9775aa;

  gap: 2rem;

  a {
    transition: color 0.3s;
  }
  a:hover {
    color: gray;
  }
`
export const Nav = styled.nav`
  font: 300 1.5rem 'Open Sans Condensed', sans-serif;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`
