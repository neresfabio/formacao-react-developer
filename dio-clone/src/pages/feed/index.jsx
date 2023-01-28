import React from 'react'
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return(
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name="Neres" image='https://avatars.githubusercontent.com/u/50967217?v=4' />
                    <UserInfo percentual={27} name="Neres" image='https://avatars.githubusercontent.com/u/50967217?v=4' />
                    <UserInfo percentual={89} name="Neres" image='https://avatars.githubusercontent.com/u/50967217?v=4' />
                    <UserInfo percentual={57} name="Neres" image='https://avatars.githubusercontent.com/u/50967217?v=4' />
                    <UserInfo percentual={12} name="Neres" image='https://avatars.githubusercontent.com/u/50967217?v=4' />
                </Column>
            </Container>
        </>
    )
}

export { Feed }