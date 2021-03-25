import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #004a8d;
    position: absolute;
    top: 0;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
`;

export const Logo = styled.img`
    height: 50px;
    position: absolute;
    left: 0;
    padding: 5px;
`;

export const HeaderTitle = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
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
