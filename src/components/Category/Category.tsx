import * as React from 'react'
import { useState } from 'react'
import launch from '$icons/launch.svg'
import { EditButton } from '$components/EditButton'
import { Text } from '$components/Text'
import { styled } from '$utils/theme/themeStyledComponents'
import { colors, ColorsOptions } from '$utils/theme/colors'

interface PropsStyled {
  isMain: boolean
}

const CategoryContainer = styled.div.attrs({})<PropsStyled>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  margin: ${p => p.theme.sizes.xTiny};

  padding-left: ${p => (p.isMain ? p.theme.sizes.large : p.theme.sizes.small)};

  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};

  svg {
    vertical-align: middle;
  }

  @media only screen and (max-width: 769px) {
    margin-left: 0px;
    margin-right: 0px;
    max-width: 100%;
    border-bottom: 1px solid ${p => p.theme.colors.darkGray};
  }
`

const OpenCategory = styled.img`
  margin: 0px ${p => p.theme.sizes.tiny};

  height: ${p => p.theme.sizes.mini};
  width: ${p => p.theme.sizes.mini};

  fill: blue;

  cursor: pointer;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`

const TextContainer = styled.div`
  width: 115px;
`

interface Props {
  name: string
  color?: ColorsOptions
  isMain?: boolean
  iconPosition?: 'right'
}

export const Category: React.FC<Props> = ({
  isMain,
  color,
  name,
  iconPosition,
}) => {
  const [isOver, setIsOver] = useState(false)

  if (!isMain) {
    return (
      <CategoryContainer
        onMouseOver={() => setIsOver(!isOver)}
        onMouseOut={() => setIsOver(!isOver)}
        color={color}
        isMain={isMain}
      >
        {iconPosition === 'right' && (
          <>
            <EditButton isOver={isOver} />
            <TextContainer>
              <Text typeText="span" color={color} size="h3" center="left">
                {name.substr(0, 11)}
              </Text>
            </TextContainer>
            <OpenCategory src={launch} onClick={() => console.log('pulsado')} />
          </>
        )}
        {!iconPosition && (
          <>
            <OpenCategory src={launch} onClick={() => console.log('pulsado')} />
            <TextContainer>
              <Text typeText="span" color={color} size="h3">
                {name.substr(0, 11)}
              </Text>
            </TextContainer>
            <EditButton isOver={isOver} />
          </>
        )}
      </CategoryContainer>
    )
  } else {
    return (
      <CategoryContainer color={color} isMain={isMain}>
        <TextContainer>
          <Text typeText="span" color={color} size="h3" center="center">
            {name.substr(0, 11)}
          </Text>
        </TextContainer>
      </CategoryContainer>
    )
  }
}
