import * as React from 'react'

import { styled } from '$utils/theme/themeStyledComponents'

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

  @media only screen and (max-width: 769px) {
    height: ${p => p.theme.sizes.large};
    width: ${p => p.theme.sizes.large};
  }
`

const Description = styled.div<PropsStyled>`
  display: ${p => (p.isInside ? 'block' : 'none')};
  position: absolute;
  float: left;
  height: 100px;
  width: 100px;
  background-color: white;
`

interface Props {
  img: string
}

export class Card extends React.Component<Props> {
  state = {
    isInside: false,
  }

  activeIsInside = () => this.setState({ isInside: true })
  deactiveIsInside = () => this.setState({ isInside: false })

  render() {
    const { img } = this.props
    const { isInside } = this.state
    return (
      <CardContainer
        onMouseEnter={() => this.activeIsInside()}
        onMouseOut={() => this.deactiveIsInside()}
      >
        <ImgCard src={img} />
        <Description isInside={isInside} />
      </CardContainer>
    )
  }
}
