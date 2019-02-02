import * as React from 'react';
import { Header } from '$components/Header/Header';
import { Main } from '$components/Main/Main';
import { Section } from '$components/Section/Section';
import { Aside } from '$components/Aside/Aside';
import { Card } from '$components/Card/Card';
import { Picture } from '$components/Picture';
import { Description } from '$components/Description';
import { Category } from '$components/Category';



export class Home extends React.Component {
    render(){
    const exampleText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea adipiscing elit platea'
    const NameCategory = 'aaaaaaaaaaaasasasasasasasasasasasasasasasasasasasasasasasas'
    return(
        <>
        <Header>
            cabecera
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