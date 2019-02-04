import * as React from 'react';
import { Header } from '$components/Header/Header';
import { Main } from '$components/Main/Main';
import { Section } from '$components/Section/Section';
import { Aside } from '$components/Aside/Aside';
import { Card } from '$components/Card/Card';
import { Picture } from '$components/Picture';
import { Description } from '$components/Description';
import { Category } from '$components/Category';
import { Input } from '$components/Input';
import search from '$icons/search.png'



export class Home extends React.Component {
    render(){
    const exampleText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea adipiscing elit platea'
    const NameCategory = 'aaaaaaaaaaaasasasasasasasasasasasasasasasasasasasasasasasas'
    const SearcherProps = {
        iconRight: search,
        backgroundColor: '#57aff5',
        textColor: '#F0F0F0'
    }
    return(
        <>
        <Header>
            <Input properties={SearcherProps} />
        </Header>
        <Main>
            <Aside>
                <Category Name={NameCategory}/>
            </Aside>
            <Section>
                <Card>
                    <Picture/>
                    <Description DescriptionText={exampleText}/>
                </Card>
            </Section>
        </Main>
        </>
    )}
}