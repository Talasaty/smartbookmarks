import * as React from 'react'

import { MainHome, SectionHome, AsideHome, HeaderHome } from './components'
import { Card } from '$components/Card/Card'
import { Picture } from '$components/Picture'
import { Description } from '$components/Description'
import { Category } from '$components/Category'
import { Input } from '$components/Input'
import search from '$icons/search.svg'
import test01 from '$imgs/test01.jpg'
import hamburger from '$icons/hamburger.svg'
import { HamburgerButton } from './Home.styles'
import { Button } from "$components/Button";
interface State {
  showMenu: boolean
}
export class Home extends React.Component<State> {
  state = {
    showMenu: false
  }

  hamburgerMenuIsClicked = () => this.setState({showMenu: !this.state.showMenu})
  render() {
    const exampleText =
      'Lorem ipsum dolor sit amet consectetur adipiscing elit asdsfds'
    const NameCategory = 'Lorem ipsum dolor sit '
    const { showMenu } = this.state
    return (
      <>
        <HeaderHome>
          <HamburgerButton >
          <Button onClick={() => this.hamburgerMenuIsClicked()}>

            <img src={hamburger} />
          </Button>
          </HamburgerButton>
          <Input
            iconRight={search}
            backgroundColor="blue"
            borderColor="blue"
            color="gray"
            type="restricted"
          />
        </HeaderHome>
        <MainHome>
          <AsideHome show={showMenu}>
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
            <Category Name={NameCategory} />
          </AsideHome>
          <SectionHome>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
            <Card>
              <Picture img={test01} />
              <Description DescriptionText={exampleText} />
            </Card>
          </SectionHome>
        </MainHome>
      </>
    )
  }
}
