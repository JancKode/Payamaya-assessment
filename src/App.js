import React from 'react';
import logo from './logo.svg';

import {Wrapper, Header, Main, Footer} from './App.styles'
import BlogContainer from './components/BlogContainer/BlogContainer';




function App() {
  return (
    <Wrapper>
      <Header>My Blog</Header>
      <Main>
        <BlogContainer />
      </Main>
      <Footer>Payamaya</Footer>
    </Wrapper>
  );
}

export default App;
