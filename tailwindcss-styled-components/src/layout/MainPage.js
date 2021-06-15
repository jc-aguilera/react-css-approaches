import React from 'react'
import tw from 'tailwind-styled-components'
import { ReactComponent as Logo } from '../assets/rabbit.svg'
import {
  AccordionContainer,
  AccordionItem,
  AccordionContent
} from '../components/Accordion'

const Card = tw.section`
  block
  p-8
  max-w-lg
  sm:max-w-full
  py-4
  `

const CardContainer = tw.div`
  sm:flex
  sm:justify-center
`

const CardTitle = tw.h1`
  text-xl
  text-center
  p-2
  rounded-t-lg
  ${p => p.$red ? 'bg-gradient-to-bl': 'bg-gradient-to-br'}
  ${p => p.$red ? 'from-red-700 to-yellow-600' : 'from-yellow-500 to-red-600'}
  text-gray-50
`

const CardBody = tw.div`
  text-gray-700
  text-justify
  border
  border-t-0
  rounded-b-lg
  p-4
`

const Hero = tw.section`
  p-8
  pb-4
  block
  sm:flex
  sm:items-center
  sm:justify-center
`

const HeroTitle = tw.h1`
  text-4xl
  font-bold
  font-serif
  pb-4
  sm:max-w-sm
`
const HeroBody = tw.div`
  text-gray-500
  text-sm
  text-center
  flex
  flex-col
  items-center
  sm:max-w-md
`
const HeroButton = tw.button`
  bg-gradient-to-br from-yellow-400 to-yellow-500
  hover:from-red-600 hover:to-yellow-600
  text-gray-50
  mt-4
  w-full
  p-2
  rounded-full
  shadow-lg
  md:max-w-sm
`

const HeroBadge = tw.div`
  text-gray-600
  pb-4
  max-w-xs
`

export function MainPage() {
  return (
    <main>
      <Hero>
        <HeroTitle>We do this, so you can do that</HeroTitle>
        <HeroBody>
          <HeroBadge>
            <Logo />
          </HeroBadge>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore.
          <HeroButton>
            Subscribe!
          </HeroButton>
        </HeroBody>
      </Hero>
      <CardContainer>
        <Card>
          <CardTitle $red>Card 1</CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Card 2</CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardBody>
        </Card>
      </CardContainer>
      <AccordionContainer>
        <AccordionItem title="This!">
          <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur et doloremque temporibus, possimus earum quae. Eligendi iure quos eos dignissimos magni eveniet molestias laboriosam ipsum impedit, perferendis quidem architecto!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem title="That!" variation={1}>
          <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur et doloremque temporibus, possimus earum quae. Eligendi iure quos eos dignissimos magni eveniet molestias laboriosam ipsum impedit, perferendis quidem architecto!
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>
    </main>
  )
}
