import * as React from 'react'
import {
  CategoryContainer,
  ArrowCategory,
  NameCategory,
  OpenCategory,
} from './Category.style'
import arrowRigth from '$icons/arrowRigth.svg'
import launch from '$icons/launch.svg'
import { EditButton } from '$components/Edit'
import { Text } from '$components/Text'

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
