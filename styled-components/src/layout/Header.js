import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
    display: flex;
    background-color: rgb(185, 28, 28);
    font-size: 18px;
`
const Title = styled.h1`
  color: rgb(249, 250, 251);
  font-size: 20px;
  padding: 8px 8px 8px 16px;
`
export function Header() {
  return (
    <Container>
      <Title>Brand</Title>
    </Container>
  )
}
