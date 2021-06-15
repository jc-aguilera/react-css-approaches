import React from 'react'
import tw from 'tailwind-styled-components'

const Container = tw.footer`
  text-center
  p-2
  text-gray-700
  bg-gradient-to-bl from-yellow-200 to-yellow-300
`
export function Footer() {
  return (
    <Container>
      (c) Brand. All rights reserved.
    </Container>
  )
}
