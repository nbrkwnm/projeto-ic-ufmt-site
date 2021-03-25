import Head from 'next/head';
import Link from 'next/link';

import Home from './home';

import {
    Container,
    Header,
    Body,
    Footer,
    HeaderLogo,
    HeaderLink,
    HeaderItemContainer,
} from '../styles/Default';

export default function App() {
    return (
        <Container>
            <Head>
                <title>Instituto de Computação</title>
                <link rel="icon" href="/logo_ic.png" />
            </Head>

            <Header>
                <HeaderLogo src="/public/logo_ic.png" alt="IC Logo" />
                <HeaderItemContainer>
                    <Link href="/" passHref>
                        <HeaderLink>Institucional</HeaderLink>
                    </Link>
                    <Link href="/" passHref>
                        <HeaderLink>Pesquisa</HeaderLink>
                    </Link>
                    <Link href="/" passHref>
                        <HeaderLink>Extensão</HeaderLink>
                    </Link>
                    <Link href="/" passHref>
                        <HeaderLink>Centro Acadêmico</HeaderLink>
                    </Link>
                    <Link href="/" passHref>
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
                    Powered© by Noboru, O Profeta, AdrianoII, Chico, Rolinha, Isa e Matherson
                </a>
            </Footer>
        </Container>
    );
}