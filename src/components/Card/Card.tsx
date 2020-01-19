import * as React from 'react'
import { useState } from 'react'
import { styled } from '$utils/theme/themeStyledComponents'
import { Text } from '$components/Text'
import { EditButton } from '$components/EditButton'
import { Button } from '$components/Button'

interface PropsStyled {
  isInside: boolean
}

const CardContainer = styled.div`
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

  @media only screen and (max-width: 769px) {
    width: 95%;
    height: 95%;
    left: 0;
    top: 2.5%;
    right: 0;
    margin: auto;
  }
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

const CloseButtonWrapper = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`

interface Props {
  img: string
}

export const Card: React.FC<Props> = ({ img }) => {
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
            <EditButton color="dark" isOver={true} />
            <Text typeText="span" size="h4">
              Texto h3
            </Text>
          </HeaderDescriptionText>
          <CloseButtonWrapper>
            <Button
              typeButton="tiny"
              backgroundColor="transparent"
              onClick={() => setIsInside(false)}
            >
              <Text typeText="span" size="h3">
                X
              </Text>
            </Button>
          </CloseButtonWrapper>
        </HeaderDescriptionWrapper>
        <BodyDescription>
          <Text marginLeft="small" typeText="span" size="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            molestias aliquid! Facere corporis quidem.
          </Text>
        </BodyDescription>
      </Description>
    </CardContainer>
  )
}
