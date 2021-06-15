import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  text-align: center;
  padding: 8px;
  color: rgb(55, 65, 81);
  background-image: linear-gradient(to left bottom, rgb(253, 230, 138), rgb(252, 211, 77))
`
export function Footer() {
  return (
    <Container>
      (c) Brand. All rights reserved.
    </Container>
  )
}
