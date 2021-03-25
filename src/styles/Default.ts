import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #004a8d;
    position: absolute;
    top: 0;
`;

export const Body = styled.body`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 10% 10%;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 50px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`;

export const HeaderLogo = styled.img`
    height: 50px;
`;

export const HeaderItemContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
`;

export const HeaderLink = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;
