import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import '../container-global.css';

export default function NewFabricante() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [site, setSite] = useState('');
    const [fabricante, setFabricantes] = useState([]);

    const history = useHistory();

    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('fabricante').then(response => {

            setFabricantes(response.data);
            return response.data;

        })

    }, [userName]);

    async function handleDeleteFabricante(fabricante_id) {
        try {

            await api.delete(`fabricante/${fabricante_id}`);

            setFabricantes(fabricante.filter(fabi => fabi.id !== fabricante_id));
            alert('fabricante deletado');
            history.go(0)


        } catch (err) {
            alert('Erro ao deletar fabricante, tente novamente.');
        }
    }
    async function handleNewFabricante(e) {
        e.preventDefault();

        const data = {
            nome,
            telefone,
            site
        };

        try {
            await api.post('fabricante', data);

            alert('O fabricante foi cadastrado com sucesso');

            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro do fabricante');
        }

    }

    return (
        <>
            <div className="container-global">
                <div className="content">
                    <section>
                        <h1>Cadastrar novo Fabricante</h1>
                        <Link to="/profile">
                            <FiArrowLeft size={16} color="#E02041" />
                        </Link>
                    </section>

                    <form onSubmit={handleNewFabricante}>
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

                        <button className="button">Cadastrar</button>
                    </form>
                </div>
            </div>
            <div className="generic-container">
                <ul>
                    {
                        fabricante.map(fabi => (
                            <li key={fabi.fabricante_id}>
                                <strong>FABRICANTE</strong>
                                <p>{fabi.nome}</p>

                                <strong>TELEFONE</strong>
                                <p>{fabi.telefone}</p>
                                <strong>SITE</strong>
                                <p>{fabi.site}</p>

                                <button type="button" onClick={() => handleDeleteFabricante(fabi.fabricante_id)}>
                                    <FiTrash2 size={20} color="#e02041" />
                                </button>

                                <button type="button" onClick={() => localStorage.setItem('fabricanteId', fabi.fabricante_id)}>
                                    <Link to="/fabricante/edit">
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


