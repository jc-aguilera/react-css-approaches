import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/rabbit.svg'

const Card = styled.section`
  padding: 2em;
  padding-top: 0;
`

const CardTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  padding: 8px;
  margin-bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${p => p.$variant
    ? 'background-image: linear-gradient(to left bottom, rgb(185, 28, 28), rgb(217, 119, 6));'
    : 'background-image: linear-gradient(to right bottom, rgb(245, 158, 11), rgb(220, 38, 38));'}
  color: rgb(249, 250, 251);
`

const CardBody = styled.div`
  color: rgb(55, 65, 81)
  text-align: justify;
  border: 1px solid rgb(229, 231, 235);
  border-top: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  line-height: 1.35em;
`

const Hero = styled.section`
  padding: 8px 8px 4px 8px;
  display: block;
  `
  
const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  font-family: serif;
  padding-bottom: 16px;

`
const HeroBody = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  color; rgb(107, 114, 128);
  padding: 16px;
  padding-top: 0;
`
const HeroButton = styled.button`
  background-image: linear-gradient(to right bottom, rgb(251, 191, 36), rgb(245, 158, 11));
  border-radius: 9999px;
  border: 0;
  color: rgb(249, 250, 251);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px
  width: 256px;
  margin-top: 16px;
  margin-botton: 8px;
  padding: 8px;
`

const HeroBadge = styled.div`
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
      <Card>
        <CardTitle>Card 1</CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </CardBody>
      </Card>
      <Card>
        <CardTitle $variant>Card 2</CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </CardBody>
      </Card>
    </main>
  )
}
