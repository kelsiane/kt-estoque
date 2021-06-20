import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import '../container-global.css';

export default function EditFornecedor() {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const history = useHistory();

  const fornecedorId = localStorage.getItem('fornecedorId');

  async function handleEditFornecedor(e) {
    e.preventDefault();

    const data = {
      nome,
      cnpj,
      telefone,
      email,
      endereco
    }

    try {

      await api.put(`fornecedor/${fornecedorId}`, data);

      localStorage.setItem('fornecedorId', "")

      alert(`O fronecedor foi recadastrado com sucesso`);

      history.push('/fronecedor/new');
    } catch (err) {
      alert('Erro no recadastro do fronecedor');
    }
  }

  return (
    <>
     <div className="container-global">
                <div className="content">
                <Link to="/fornecedor/new">
            <FiArrowLeft size={16} color="#E02041" />
            </Link>
      <h1>Editar Fornecedor </h1>
      <form onSubmit={handleEditFornecedor}>
        <input
          placeholder="Nome do Fornecedor"
          value={nome}
          onChange={e => setNome(e.target.value)}

        />

        <input
          placeholder="CNPJ"
          value={cnpj}
          onChange={e => setCnpj(e.target.value)}

        />

        <input
          placeholder="Telefone"
          type="tel"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}

        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}

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
    </>
  );
}

