import * as React from 'react'
import arrowRigth from '$icons/arrowRigth.svg'
import launch from '$icons/launch.svg'
import { EditButton } from '$components/EditButton'
import { Text } from '$components/Text'
import { styled } from '$utils/theme/themeStyledComponents'

interface PropsStyle {
  arrowDown: boolean
}

const CategoryContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  position: relative;

  width: 100%;
  max-width: 400px;

  margin: ${p => p.theme.sizes.tiny};

  opacity: 0.6;

  :hover {
    opacity: 0.8;
  }

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

const ArrowCategory = styled.img.attrs({})<PropsStyle>`
  max-width: ${p => p.theme.sizes.mini};

  transform: ${p => (p.arrowDown ? 'rotate(90deg)' : 'rotate(0deg)')};

  cursor: pointer;

  @media only screen and (max-width: 769px) {
    margin-left: 10px;
  }
`

const NameCategory = styled.div`
  display: flex;
  align-items: center;

  margin-left: ${p => p.theme.sizes.tiny};

  cursor: pointer;
`

const OpenCategory = styled.img`
  float: left;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.tiny};

  height: ${p => p.theme.sizes.mini};
  width: ${p => p.theme.sizes.mini};

  transform: scale(1.2);

  cursor: pointer;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`

interface Props {
  name: string
}

export class Category extends React.Component<Props> {
  state = {
    categoryWasClicked: false,
    isOver: false,
  }

  changeOrientationArrow = () => {
    this.setState({ categoryWasClicked: !this.state.categoryWasClicked })
  }

  setOverState = () => {
    this.setState({ isOver: !this.state.isOver })
  }
  render() {
    const { name } = this.props
    const { categoryWasClicked, isOver } = this.state
    return (
      <CategoryContainer
        onMouseOver={this.setOverState}
        onMouseOut={this.setOverState}
      >
        <OpenCategory src={launch} onClick={() => console.log('pulsado')} />
        <ArrowCategory
          src={arrowRigth}
          arrowDown={categoryWasClicked}
          onClick={() => this.changeOrientationArrow()}
        />
        <NameCategory onClick={() => this.changeOrientationArrow()}>
          <Text typeText="span" color="text" size="h5">
            {name.substr(0, 22)}
          </Text>
        </NameCategory>
        <EditButton isOver={isOver} />
      </CategoryContainer>
    )
  }
}
