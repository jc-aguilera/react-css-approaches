import React from 'react'
import tw from 'tailwind-styled-components'

const Container = tw.header`
    flex
    bg-red-700
    text-lg
`

const Title = tw.h1`
  text-gray-50
  text-xl
  p-2 pl-4
`
export function Header() {
  return (
    <Container>
      <Title>Brand</Title>
    </Container>
  )
}
