import * as React from 'react'

import { MainHome, SectionHome, AsideHome, HeaderHome } from './components'
import { Card } from '$components/Card/Card'
import { Picture } from '$components/Picture'
import { Description } from '$components/Description'
import { Category } from '$components/Category'
import { Input } from '$components/Input'
import search from '$icons/search.svg'
import test01 from '$imgs/test01.jpg'

export class Home extends React.Component {
  render() {
    const exampleText =
      'Lorem ipsum dolor sit amet consectetur adipiscing elit asdsfds'
    const NameCategory = 'Lorem ipsum dolor sit '
    return (
      <>
        <HeaderHome>
          <Input
            iconRight={search}
            backgroundColor="blue"
            borderColor="blue"
            color="gray"
          />
        </HeaderHome>
        <MainHome>
          <AsideHome>
            <Category Name={NameCategory} />
          </AsideHome>
          <SectionHome>
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