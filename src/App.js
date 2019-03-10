import React from 'react';
import { Content } from './styles';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Selector from './components/burger-selector/index';

const App = () => (
  <div className="app">
    <Header />
    <Content>
      <Selector title="Selecione seu Hambúrger" type="default" index="1" />
      <Selector title="Monte seu Próprio Lanche" type="own" index="2" />
    </Content>
    <Footer />
  </div>
);

export default App;
