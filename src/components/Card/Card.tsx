import * as React from 'react'
import { useState } from 'react'
import { styled } from '$utils/theme/themeStyledComponents'
import { Text } from '$components/Text'
import { EditButton } from '$components/EditButton'

interface PropsStyled {
  isInside: boolean
}

const CardContainer = styled.div`
  position: relative;
  height: ${p => p.theme.sizes.large};
  width: ${p => p.theme.sizes.large};

  margin: ${p => p.theme.sizes.tiny};

  @media only screen and (max-width: 769px) {
    height: ${p => p.theme.sizes.large};
    width: ${p => p.theme.sizes.large};
  }
`
const ImgCard = styled.img`
  height: ${p => p.theme.sizes.large};
  width: ${p => p.theme.sizes.large};
  z-index: 0;

  @media only screen and (max-width: 769px) {
    height: ${p => p.theme.sizes.large};
    width: ${p => p.theme.sizes.large};
  }
`

const Description = styled.div<PropsStyled>`
  position: absolute;
  display: ${p => (p.isInside ? 'block' : 'none')};
  z-index: 10;
  height: 150px;
  width: 200px;
  background-color: white;
  border: solid 1px ${p => p.theme.colors.white};
  border-radius: 5px;
`

const HeaderDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: ${p => p.theme.sizes.small};
  margin: ${p => p.theme.sizes.xTiny};
  border-bottom: solid 1px ${p => p.theme.colors.ligthGray};
`

const HeaderDescriptionText = styled.div`
  display: flex;
  margin-left: ${p => p.theme.sizes.xTiny};
  align-items: center;
  width: 85%;
`

const BodyDescription = styled.div`
  margin: ${p => p.theme.sizes.xTiny};
  padding: ${p => p.theme.sizes.xTiny};
`

export const Card = ({ img }) => {
  const [isInside, setIsInside] = useState(false)
  return (
    <CardContainer
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <ImgCard src={img} />
      <Description isInside={isInside}>
        <HeaderDescriptionWrapper>
          <HeaderDescriptionText>
            <Text typeText="p" size="h4">
              Texto h3
            </Text>
          </HeaderDescriptionText>
          <EditButton color="dark" isOver={true} />
        </HeaderDescriptionWrapper>
        <BodyDescription>
          <Text typeText="span" size="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            molestias aliquid! Facere corporis quidem.
          </Text>
        </BodyDescription>
      </Description>
    </CardContainer>
  )
}
