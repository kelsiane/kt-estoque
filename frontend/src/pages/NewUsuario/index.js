import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import '../container-global.css';

export default function NewUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleNewUsuario(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            senha
        };

        try {
            await api.post('user', data);

            alert('O usuario foi cadastrado com sucesso');

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro do usuario');

        }

    }

    return (
        <>
            <div className="container-global">
                <div className="content">
                    <section>
                        <h1>Cadastrar novo Usuario</h1>
                        <Link to="/">
                            <FiArrowLeft size={16} color="#E02041" />
                        </Link>
                    </section>

                    <form onSubmit={handleNewUsuario}>
                        <input
                            placeholder="Nome do Usuario"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
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
                            placeholder="senha"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required
                        />

                        <button className="button">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}


