import React from 'react';
import {BrowserRouter as Router, router}from 'react-router-dom';
import Navbar from './component/Navbar';
import produtos from './component/Produtos';
import Pagamento from './component/Pagamentos';
import carrinho from './component/Carrinho';
import Cadastre from './component/Cadastre';
import Home from './componentes/Home';
import Botao from './componentes/Botao';


const App = () => {
  return (
    <Router>
    <Navbar />

    <Botao>Salvar</Botao>
    <Botao>Cadastre-se</Botao>
    <Router exact path="/" component={Home}/>
    <Router path="/pagamento" component={Pagamento}/>
    <Router path="/produtos" component={produtos}/>
    <Router path="/carrinho" component={carrinho}/>
    <Router path="/cadastre" component={Cadastre}/>
    </Router>
  )
}
export default App;
