import React, { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiSearch, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import '../container-global.css';
export default function NewFornecedor() {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fornecedor, setFornecedores] = useState([]);
  const history = useHistory();
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    api.get('fornecedor').then(response => {

      setFornecedores(response.data);
      return response.data;

    })

  }, [userName]);


  async function handleDeleteFornecedor(fornecedor_id) {
    try {

      await api.delete(`fornecedor/${fornecedor_id}`);

      setFornecedores(fornecedor.filter(forne => forne.id !== fornecedor_id));
      alert('fornecedor deletado');
      history.go(0)


    } catch (err) {
      alert('Erro ao deletar fornecedor, tente novamente.');
    }
  }

  async function handleBuscarFornecedor() {
    try {
      await api.get(`fornecedor/${nome}`).then(response => {
        setFornecedores(response.data);
      })

    } catch (err) {
      alert('Erro ao buscar fornecedor, tente novamente.');
    }
  }

  async function handleNewFornecedor(e) {
    e.preventDefault();

    const data = {
      nome,
      cnpj,
      telefone,
      email,
      endereco
    };

    try {
      await api.post('fornecedor', data);

      alert('O fornecedor foi cadastrado com sucesso');

      history.go(0)
    } catch (err) {
      alert('Erro no cadastro do fornecedor');
    }

  }

  return (

    <Fragment>

      <div className="container-global">
        <div className="content">
          <section>
            <h1>Cadastrar novo Fornecedor</h1>
            <Link to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
            </Link>
          </section>

          <form onSubmit={handleNewFornecedor}>
            <input
              placeholder="Nome do Fornecedor"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />

            <input
              placeholder="CNPJ"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
              required
            />

            <input
              placeholder="Telefone"
              type="tel"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Cidade"
              value={endereco}
              onChange={e => setEndereco(e.target.value)}
            />

            <button className="button">Cadastrar</button>

          </form>

        </div>

      </div>

      <div className="generic-container">

        <header>
          <h1>Fornecedores Cadastrados</h1>
          <input
            placeholder="Nome do fornecedor"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <button type="button" id="pesquisa" onClick={() => handleBuscarFornecedor()}>
            <FiSearch size={20} color="#a8a8b3" />
          </button>
        </header>

        <ul>
          {
            fornecedor.map(forne => (
              <li key={forne.fornecedor_id}>
                <strong>FORNECEDOR</strong>
                <p>{forne.nome}</p>

                <strong>CNPJ</strong>
                <p>{forne.cnpj}</p>

                <strong>TELEFONE:</strong>
                <p>{forne.telefone}</p>
                <strong>EMAIL:</strong>
                <p>{forne.email}</p>
                <strong>ENDEREÇO:</strong>
                <p>{forne.endereco}</p>


                <button type="button" onClick={() => handleDeleteFornecedor(forne.fornecedor_id)}>
                  <FiTrash2 size={20} color="#e02041" />
                </button>

                <button type="button" onClick={() => localStorage.setItem('fornecedorId', forne.fornecedor_id)}>
                  <Link to="/fornecedor/edit">
                    <FiEdit2 size={20} color="#a8a8b3" />
                  </Link>
                </button>
              </li>
            ))}
        </ul>

      </div>
    </Fragment>
  );
}


