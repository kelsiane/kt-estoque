import './styles.css'
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiClipboard, FiPower } from 'react-icons/fi';

export default function Button() {
  const userName = localStorage.getItem('userName');
  const history = useHistory();
  function handlelogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="button-container">


      <header>

        <span>Bem vindo, <strong>{userName}</strong></span>

        <Link className="button" to="/product/new">Cadastrar Produto</Link>

        <Link className="button" to="/fornecedor/new">Cadastrar Fornecedor</Link>
        <Link className="button" to="/categoria/new">Cadastrar Categoria</Link>
        <Link className="button" to="/fabricante/new">Cadastrar Fabricante</Link>
        <button type="button">
          <Link to="/report">
            <FiClipboard size={18} color="#4B50FF" />
          </Link>
        </button>

        <button type="button" onClick={handlelogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </div>
  );
}