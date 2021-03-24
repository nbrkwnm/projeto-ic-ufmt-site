import Head from 'next/head';

import {
    Container,
    Header,
    ItemContainer,
    Logo,
    HeaderTitle,
    Footer,
} from '../home/styles';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Instituto de Computação</title>
                <link rel="icon" href="/logo_ic.png" />
            </Head>

            <Header>
                <ItemContainer>
                    <Logo src="/logo_ic.png" alt="IC Logo" />
                    <HeaderTitle>Institucional</HeaderTitle>
                    <HeaderTitle>Pesquisa</HeaderTitle>
                    <HeaderTitle>Extensão</HeaderTitle>
                    <HeaderTitle>Centro Acadêmico</HeaderTitle>
                    <HeaderTitle>Atlética Trojan</HeaderTitle>
                </ItemContainer>
            </Header>

            <Footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered© by Noboru, O Profeta, AdrianoII, Chico, Rolinha,
                    Isa e Matherson
                </a>
            </Footer>
        </Container>
    );
}
