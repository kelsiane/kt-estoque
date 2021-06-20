import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NewProduct() {
  const [nome, setNome] = useState('');
  const [qtd, setQtd] = useState('');
  const [qtd_limite, setQtd_limite] = useState('');
  const [categoria, setCategoria] = useState([]);
  const [categoria_id_, setCategoriaId] = useState('');
  const [fornecedor, setFornecedor] = useState([]);
  const [fornecedor_id_, setFornecedorId] = useState('');
  const [fabricante, setFabricante] = useState([]);
  const [fabricante_id_, setFabricanteId] = useState('');

  const userName = localStorage.getItem('userName');

  useEffect(() => {
    api.get('category').then(response => {

      setCategoria(response.data);
      return response.data;
    })

  }, [userName]);

  useEffect(() => {
    api.get('fornecedor').then(response => {

      setFornecedor(response.data);
      return response.data;
    })

  }, [userName]);

  useEffect(() => {
    api.get('fabricante').then(response => {

      setFabricante(response.data);
      return response.data;
    })

  }, [userName]);

  const history = useHistory();

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      nome,
      qtd,
      qtd_limite,
      categoria_id_,
      fornecedor_id_,
      fabricante_id_
    };

    try {
      await api.post('product', data);

      alert(`O produto foi cadastrado com sucesso`);

      history.push('/profile');
    } catch (err) {
      alert('Erro no cadastro do produto');
    }

  }

  return (

    <div className="new-product-container">
      <div className="content">
        <section>
          <h1>Cadastrar novo Produto</h1>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
          </Link>
        </section>

        <form onSubmit={handleNewProduct}>
          <input
            placeholder="Nome do Produto"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />

          <select id="categoria" onChange={e => setCategoriaId(e.target.value)}>
            <option value="" disabled selected>Selecionar</option>
            {categoria.map(category => (
              <option key={category.categoria_id} value={category.categoria_id}>{category.nome}</option>
            ))}
          </select>


          <select id="fornecedor" onChange={e => setFornecedorId(e.target.value)}>
            <option value="" disabled selected>Selecionar</option>
            {
              fornecedor.map(forne => (
                <option key={forne.fornecedor_id} value={forne.fornecedor_id}>{forne.nome}</option>
              ))

            }

          </select>

          <select id="fabricante" onChange={e => setFabricanteId(e.target.value)}>

            <option value="" disabled selected>Selecionar</option>

            {fabricante.map(fabri => (
              <option key={fabri.fabricante_id} value={fabri.fabricante_id}>{fabri.nome}</option>
            ))

            }
         
         
          </select>
          <input
            type="number"
            placeholder="Quantidade em estoque"
            value={qtd}
            onChange={e => setQtd(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Quantidade limite(Quantidade minima)"
            value={qtd_limite}
            onChange={e => setQtd_limite(e.target.value)}
            required
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

