import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';
import Parceiro from '../components/Parceiro';
import Titulo from '../components/Titulo';
import Relacionados from '../components/Relacionados';
import Marcas from '../components/Marcas';
import Rodape from '../components/Rodape';
import Modal from '../components/Modal';
import { IProduto } from '../interfaces/IProduto';
import axios from 'axios';

function App() {

  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto>();
  const [modalAberta, setModal] = useState(false);

  useEffect(() => {
    axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(resposta => {
        console.log(resposta)
        setProdutos(resposta.data.products);
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  function selecionaProduto(produtoSelecionado: IProduto) {
    setProdutoSelecionado(produtoSelecionado);
    setProdutos((produtosAnteriores) => produtosAnteriores.map((produto, index) => ({
      ...produto,
      id: String(index),
      selecionado: produto.id === produtoSelecionado.id ? true : false
    })))
  }

  function onModal(modal: boolean) {
    setModal(true);
  }

  function offModal(modal: boolean) {
    setModal(false);
  }

  console.log(produtos);
  console.log(modalAberta)

  return (
    <div className="App">
      <Menu />
      <Banner />
      <Categorias />
      <Produtos
        produtos={produtos}
        selecionaProduto={selecionaProduto}
        onModal={onModal}
      />
      <Relacionados />
      <Marcas />
      {modalAberta && <Modal
        produtoSelecionado={produtoSelecionado}
        offModal={offModal}
      />}
      <Rodape />
    </div>
  );
}

export default App;
