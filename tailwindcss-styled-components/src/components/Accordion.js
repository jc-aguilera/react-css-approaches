import React, { useState } from 'react'
import tw from 'tailwind-styled-components'

export const AccordionContainer = tw.div`
  flex
  flex-col
  items-center
`

const AccordionChevron = tw.span`
  inline-block
  transition-transform
  ${p => p.$expanded ? '' : 'transform rotate-180'}
`

export const AccordionItem = tw(Item)`
  border border-gray-400
  p-2
  transition-all
`

const AccordionTitle = tw.h1`
  text-xl
  `

export const AccordionContent = tw.div`
  p-4
  text-gray-600
`

const AccordionWrapper = tw.div`
  w-4/5
  max-w-2xl
  p-4
`

const AccordionHeader = tw.div`
  flex
  justify-between
  items-center
  cursor-pointer
  rounded-md
  text-white
  bg-gradient-to-tl
  ${p => p.$variation === 1 ? 'from-yellow-500 to-red-500' : 'from-red-400 to-yellow-600'} 
  p-3
`

const AccordionContentWrapper = tw.div`
  transition-all
  ${p => p.$expanded ? 'max-h-full' : 'hidden'}
`

function Item(props) {
  const [expanded, setExpanded] = useState(false)
  return (
    <AccordionWrapper>
      <AccordionHeader $variation={props.variation}
        onClick={() => setExpanded(!expanded)}
      >
        <AccordionTitle>{props.title}</AccordionTitle>
        <AccordionChevron
          $expanded={expanded}
        >
          {'\u25bc'}
        </AccordionChevron>
      </AccordionHeader>
      <AccordionContentWrapper $expanded={expanded}>{props.children}</AccordionContentWrapper>
    </AccordionWrapper>
  )
}