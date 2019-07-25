import * as React from 'react'

import { MainHome, SectionHome, AsideHome, HeaderHome } from './components'
import { Card } from '$components/Card/Card'
import { Description } from '$components/Description'
import { Category } from '$components/Category'
import { Input } from '$components/Input'
import search from '$icons/search.svg'
import test01 from '$imgs/test01.jpg'
import hamburger from '$icons/hamburger.svg'
import { HamburgerButton } from './Home.styles'
import { Button } from '$components/Button'
import { Formik, Form } from 'formik'
import { EditButton } from '$components/EditButton'
import { Preview } from '$components/Preview'
interface State {
  showMenu: boolean
}
export class Home extends React.Component<State> {
  state = {
    showMenu: false,
  }

  hamburgerMenuIsClicked = () =>
    this.setState({ showMenu: !this.state.showMenu })
  render() {
    const exampleText =
      'Lorem ipsum dolor sit amet consectetur adipiscing elit asdsfds'
    const NameCategory = 'Lorem ipsum dolor sit '
    const { showMenu } = this.state
    return (
      <Formik
        initialValues={{ browser: 'coso' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
        render={() => (
          <Form>
            <HeaderHome>
              <HamburgerButton>
                <Button onClick={() => this.hamburgerMenuIsClicked()}>
                  <img src={hamburger} />
                </Button>
              </HamburgerButton>
              <Input
                iconRight={search}
                backgroundColor="blue"
                borderColor="blue"
                color="gray"
                typeInput="restricted"
                type="text"
                name="browser"
              />
            </HeaderHome>
            <MainHome>
              <AsideHome show={showMenu}>
                <Category name={NameCategory} />
                <Category name={NameCategory} />
                <Category name={NameCategory} />
                <Category name={NameCategory} />
                <Category name={NameCategory} />
                <Category name={NameCategory} />
                <Category name={NameCategory} />
              </AsideHome>
              <SectionHome>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
                <Card>
                  <EditButton backgroundColor="ligthGray" type="round" />
                  <Preview img={test01} />
                  <Description descriptionText={exampleText} />
                </Card>
              </SectionHome>
            </MainHome>
          </Form>
        )}
      />
    )
  }
}
