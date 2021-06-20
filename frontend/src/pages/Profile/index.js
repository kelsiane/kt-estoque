import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2, FiSearch, FiEdit2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import Button from '../Button';

export default function Profile() {
  const [nome, setNome] = useState('');
  const [produtos, setProdutos] = useState([]);
  const history = useHistory();
  const userName = localStorage.getItem('userName');


  useEffect(() => {
    api.get('product').then(response => {
      setProdutos(response.data);
      return response.data;

    })

  }, [userName]);

  async function handleDeleteProduto(produto_id) {
    try {
      await api.delete(`product/${produto_id}`);

      setProdutos(produtos.filter(product => product.id !== produto_id));
      alert('produto deletado');
      history.go(0)


    } catch (err) {
      alert('Erro ao deletar produto, tente novamente.');
    }
  }

  async function handleBuscarProduto() {
    try {
      await api.get(`profile/${nome}`).then(response => {
        setProdutos(response.data);
      })

    } catch (err) {
      alert('Erro ao buscar produto, tente novamente.');
    }
  }

  return (
    <>
      <Button></Button>
      <div className="profile-container">

        <header>
          <h1>Produtos Cadastrados</h1>
          <input
            placeholder="Nome do produto"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <button type="button" id="pesquisa" onClick={() => handleBuscarProduto()}>
            <FiSearch size={20} color="#a8a8b3" />
          </button>
        </header>

        <ul>
          {
            produtos.map(product => (
              <li key={product.produto_id}>
                <strong>PRODUTO</strong>
                <p>{product.nome}</p>

                <strong>QUANTIDADE MINIMA</strong>
                <p>{product.qtd_limite}</p>

                <strong>QUANTIDADE:</strong>
                <p>{product.qtd}</p>


                <button type="button" onClick={() => handleDeleteProduto(product.produto_id)}>
                  <FiTrash2 size={20} color="#e02041" />
                </button>

                <button type="button" onClick={() => localStorage.setItem('productId', product.produto_id)}>
                  <Link to="/product/edit">
                    <FiEdit2 size={20} color="#a8a8b3" />
                  </Link>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}