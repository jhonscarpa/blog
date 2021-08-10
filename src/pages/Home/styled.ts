import React from 'react'
import styled from 'styled-components'

export const Main = styled.main`
  background-color: #764b8e;
`

export const RowCenterBetween = styled.div`
  margin: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Section = styled.section`
  padding-top: 5rem;
  justify-content: space-between;

  .spaceHome {
    display: inline-block;
    gap: 3rem;
    position: relative;
  }

  img {
    border-radius: 99999rem;
    width: 50vh;
    height: 50vh;
    position: relative;
  }

  div .text {
    position: relative;
    max-width: 40rem;
    left: 2rem;
    text-align: justify;
  }
`
