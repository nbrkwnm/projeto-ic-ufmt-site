import React, { FC } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Home from './home';

import {
    Body,
    Container,
    Footer,
    Header,
    HeaderItemContainer,
    HeaderLink,
    HeaderLogo,
} from '../styles/Default';

const App: FC = () => (
    <Container>
        <Head>
            <title>Instituto de Computação</title>
            <link rel="icon" href="/logo_ic.png" />
        </Head>

        <Header>
            <HeaderLogo src="/logo_ic.png" alt="IC Logo" />
            <HeaderItemContainer>
                <Link href="/" passHref>
                    <HeaderLink>Institucional</HeaderLink>
                </Link>
                <Link href="/research" passHref>
                    <HeaderLink>Pesquisa</HeaderLink>
                </Link>
                <Link href="/extension" passHref>
                    <HeaderLink>Extensão</HeaderLink>
                </Link>
                <Link href="/ca" passHref>
                    <HeaderLink>Centro Acadêmico</HeaderLink>
                </Link>
                <Link href="/trojan" passHref>
                    <HeaderLink>Atlética Trojan</HeaderLink>
                </Link>
            </HeaderItemContainer>
        </Header>

        <Body>
            <Home />
        </Body>

        <Footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered© by the entire of IC community
            </a>
        </Footer>
    </Container>
);

export default App;
