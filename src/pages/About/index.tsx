import { ButtonOutlined } from 'components/Button'
import { useState } from 'react'
import { useIsDarkMode } from 'state/user/hooks'
import styled from 'styled-components/macro'
import { BREAKPOINTS } from 'theme'

import Card from './Card'
import { CARDS, STEPS } from './constants'
import Step from './Step'
import { SubTitle, Title } from './Title'

const Page = styled.span<{ isDarkMode: boolean }>`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Panels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 24px;
  line-height: 36px;
  gap: 24px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    gap: 120px;
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`

const Content = styled.div`
  max-width: 1280px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 128px 16px 16px 16px;
  gap: 96px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 128px 80px 80px 80px;
  }
`

const CardGrid = styled.div`
  display: grid;
  gap: 36px;
  width: 100%;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const InfoButton = styled(ButtonOutlined)`
  font-size: 20px;
  line-height: 28px;
  padding: 16px;
`

const ActionsContainer = styled.span`
  display: flex;
  gap: 16px;
  width: 100%;

  & > * {
    flex: 1;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    flex-direction: row;
  }
`

const StepList = styled.div`
  display: flex;
  flex-direction: column;
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const IntroCopy = styled.p`
  margin: 0;
`

const ThumbnailContainer = styled.div`
  align-self: center;
`

const Thumbnail = styled.img`
  width: 100%;
`

const PoweredBySection = styled(Panels)`
  order: 1;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    order: 0;
  }
`

export default function About() {
  const isDarkMode = useIsDarkMode()

  const [selectedStepIndex, setSelectedStepIndex] = useState(0)

  return (
    <Page isDarkMode={isDarkMode}>
      <Content>
        <Title isDarkMode={isDarkMode}>The best way to buy, sell and own crypto and NFTs</Title>
        <PoweredBySection>
          <div>
            <SubTitle isDarkMode={isDarkMode}>Powered by the Uniswap Protocol</SubTitle>
          </div>
          <Intro>
            <IntroCopy>
              The Uniswap Protocol is the world’s leading decentralized exchange protocol, allowing anyone to swap
              tokens, list a token, or provide liquidity in a pool to earn fees.
            </IntroCopy>
            <ActionsContainer>
              <InfoButton>Learn more</InfoButton>
              <InfoButton>Read the docs</InfoButton>
            </ActionsContainer>
          </Intro>
        </PoweredBySection>
        <CardGrid>
          {CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </CardGrid>
        <div>
          <SubTitle isDarkMode={isDarkMode}>Get Started</SubTitle>
          <Panels>
            <ThumbnailContainer>
              <Thumbnail alt="Thumbnail" src={STEPS[selectedStepIndex]?.imgSrc} />
            </ThumbnailContainer>
            <StepList>
              {STEPS.map((step, index) => (
                <Step
                  expanded={selectedStepIndex === index}
                  onClick={() => setSelectedStepIndex(index)}
                  index={index}
                  key={step.title}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </StepList>
          </Panels>
        </div>
      </Content>
    </Page>
  )
}