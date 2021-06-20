import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const [products, setProducts] = useState([]);

  const userName = localStorage.getItem('userName');
  useEffect(() => {
    api.get('profile').then(response => {
      setProducts(response.data);

    })
  }, [userName]);


  function handleImprimir() {
    window.print();
  }

  return (
    <div className="report-container">
      <header>
        <h1>Produtos em Falta</h1>
        <Link className="button" onClick={() => handleImprimir()}>Imprimir</Link>


        <Link to="/profile">
          <FiArrowLeft size={22} color="#e02041" />
        </Link>

      </header>

      <ul>
        {products.map(product => (
          <li key={product.produto_id}>
            <strong>PRODUTO: {product.nome}</strong>


            <strong>QUANTIDADE: {product.qtd}</strong>

            <strong>QUANTIDADE MINIMA: {product.qtd_limite}</strong>

            <strong>FALTA: {product.qtd_limite - product.qtd}</strong>

          </li>
        ))}
      </ul>
    </div>
  );
}