import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`

export const Header = styled.header`
  backgound: lightpink;
  padding: 2rem;
`;

export const Main = styled.main`
background: #eeeeef;
display: flex;
justify-content: center;
`

export const Footer = styled.footer`
    background: wheat;
    padding: 2rem;
    text-align: center;
`