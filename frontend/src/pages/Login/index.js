import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = {

        nome,
        senha

      }
      const response = await api.post('session', data);

      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('userName', response.data.nome);
      localStorage.setItem('token', response.data.token);

      history.push('/profile');
      history.go(0);
    } catch (err) {
      alert('Falha no login, tente novamente.');

    }
  }

  return (

    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <img src={require('../../img/text10.png')} height="40px" alt="logo" />

          <input
            placeholder="Usuario" required
            value={nome}
            onChange={(e) => setNome
              (e.target.value)}
          />

          <input type="password" placeholder="Senha" required
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button style={{ width: '70%' }} type="submit" className="button">Entrar</button>

        </form>

        <div className="nao-conta">
          <h3 style={{ padding: '4px' }}>Não tem uma conta ?</h3>
          <br></br>
          <Link style={{ color: '#fff', textDecoration: 'none', padding: '3px' }} to="/usuario/new"> <h3>Registre-se</h3></Link>
        </div>

      </section>


    </div>
  );
}

// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections