import * as React from 'react'
import arrowRigth from '$icons/arrowRigth.svg'
import launch from '$icons/launch.svg'
import { EditButton } from '$components/Edit'
import { Text } from '$components/Text'
import styled from 'styled-components'

interface PropsStyle {
  arrowDown: boolean
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  position: relative;

  height: ${p => p.theme.sizes.huge};
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
    border-bottom: 1px solid ${p => p.theme.colors.darkGray}
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
  width: 100%;

  margin-left: ${p => p.theme.sizes.tiny};

  cursor: pointer;
`

const OpenCategory = styled.img`
  float: left;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.tiny};

  height: ${p => p.theme.sizes.small};
  width: ${p => p.theme.sizes.small};
  max-width: ${p => p.theme.sizes.small};

  transform: scale(1.2);

  cursor: pointer;
  @media only screen and (max-width: 769px){
    display: none;
  }
`

interface Props {
  Name: string
}

export class Category extends React.Component<Props> {
  state = {
    categoryWasClicked: false,
  }

  changeOrientationArrow = () => {
    this.setState({ categoryWasClicked: !this.state.categoryWasClicked })
  }

  render() {
    const { Name } = this.props
    const { categoryWasClicked } = this.state
    return (
      <CategoryContainer>
        <OpenCategory src={launch} onClick={() => console.log('pulsado')} />
        <ArrowCategory
          src={arrowRigth}
          arrowDown={categoryWasClicked}
          onClick={() => this.changeOrientationArrow()}
        />
        <NameCategory onClick={() => this.changeOrientationArrow()}>
          <Text type="span" color="text" size="h5">
            {Name.substr(0, 22)}
          </Text>
        </NameCategory>
        <EditButton />
      </CategoryContainer>
    )
  }
}
