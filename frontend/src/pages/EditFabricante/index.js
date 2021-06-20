import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import '../container-global.css';

export default function EditFabricante() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [site, setSite] = useState('');
  const history = useHistory();

  const fabricanteId = localStorage.getItem('fabricanteId');

  async function handleEditFabricante(e) {
    e.preventDefault();

    const data = {
      nome,
      telefone,
      site
    }

    try {

      await api.put(`fabricante/${fabricanteId}`, data);

      localStorage.setItem('fabricanteId', "")

      alert(`O fabricante foi recadastrado com sucesso`);

      history.push('/fabricante/new');
    } catch (err) {
      alert('Erro no recadastro do fabricante');
    }
  }

  return (
    <>
      <div className="container-global">
        <div className="content">
        <Link to="/fabricante/new">
            <FiArrowLeft size={16} color="#E02041" />
            </Link>
          <h1>Editar Fabricante</h1>
          <form onSubmit={handleEditFabricante}>
            <input
              placeholder="Nome do Fabricante"
              value={nome}
              onChange={e => setNome(e.target.value)}
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
              placeholder="Site"
              type="url"
              value={site}
              onChange={e => setSite(e.target.value)}
              required
            />

            <button className="button">Recadastrar</button>
        
          </form>
        </div>
      </div>
    </>
  );
}

