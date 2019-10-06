import * as React from 'react'
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

interface Props {
  name: string
  color?: ColorsOptions
  isMain?: boolean
}

export class Category extends React.Component<Props> {
  state = {
    categoryWasClicked: false,
    isOver: false,
  }

  setOverState = () => {
    this.setState({ isOver: !this.state.isOver })
  }
  render() {
    const { name, color, isMain } = this.props
    const { isOver } = this.state

    if (!isMain) {
      return (
        <CategoryContainer
          onMouseOver={this.setOverState}
          onMouseOut={this.setOverState}
          color={color}
          isMain={isMain}
        >
          <OpenCategory src={launch} onClick={() => console.log('pulsado')} />
          <Text typeText="span" color={color} size="h3">
            {name.substr(0, 22)}
          </Text>
          <EditButton isOver={isOver} />
        </CategoryContainer>
      )
    } else {
      return (
        <CategoryContainer
          onMouseOver={this.setOverState}
          onMouseOut={this.setOverState}
          color={color}
          isMain={isMain}
        >
          <Text typeText="span" color={color} size="h3">
            {name.substr(0, 22)}
          </Text>
          <EditButton isOver={isOver} />
        </CategoryContainer>
      )
    }
  }
}
