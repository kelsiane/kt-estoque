import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import '../container-global.css';

export default function EditCategoria() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const history = useHistory();
  
    const categoriaId = localStorage.getItem('categoriaId');

    async function handleEditCategory(e) {
        e.preventDefault();
    
        const data = {
          nome,
          descricao
        }
    
        try {
    
          await api.put(`category/${categoriaId}`, data);
    
          localStorage.setItem('categoriaId', "")
    
          alert(`O categoria foi recadastrado com sucesso`);
    
          history.push('/categoria/new');
        } catch (err) {
          alert('Erro no recadastro do categoria');
        }
      }

    return (
        <>

          <div className="container-global">
                <div className="content">  
                <Link to="/categoria/new">
            <FiArrowLeft size={16} color="#E02041" />
            </Link>
              <h1>Editar Categoria </h1>
        <form onSubmit={handleEditCategory}>
          <input
            placeholder="Nome da Categoria"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <input
            placeholder="Descrição da Categoria"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <button className="button">Recadastrar</button>
        </form>
        </div>
        </div>
        </>
    );
}

