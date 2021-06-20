import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import '../container-global.css';

export default function NewCategoria() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState([]);

    const history = useHistory();
    
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('category').then(response => {

            setCategoria(response.data);
            return response.data;

        })

    }, [userName]);


    async function handleDeleteCategoria(categoria_id) {
        try {

            await api.delete(`category/${categoria_id}`);

            setCategoria(categoria.filter(cate => cate.id !== categoria_id));
            alert('categoria deletada');
            history.go(0)


        } catch (err) {
            alert('Erro ao deletar categoria, tente novamente.');
        }
    }

    
    async function handleNewCategoria(e) {
        e.preventDefault();

        const data = {
            nome,
            descricao
        };

        try {
            await api.post('category', data);

            alert('O categoria foi cadastrado com sucesso');

            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro do categoria');
        }

    }

    return (
        <>
            <div className="container-global">
                <div className="content">
                    <section>
                        <h1>Cadastrar nova Categoria</h1>
                        <Link to="/profile">
                            <FiArrowLeft size={16} color="#E02041" />
                        </Link>
                    </section>

                    <form onSubmit={handleNewCategoria}>
                        <input
                            placeholder="Nome do Categoria"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            required
                        />

                        <input
                            placeholder="Descrição"
                            type="text"
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                            required
                        />


                        <button className="button">Cadastrar</button>
                    </form>
                </div>
            </div>
            <div className="generic-container">
                <ul>
                    {
                        categoria.map(cate => (
                            <li key={cate.categoria_id}>
                                <strong>CATEGORIA</strong>
                                <p>{cate.nome}</p>

                                <strong>DESCRIÇÃO</strong>
                                <p>{cate.descricao}</p>


                                <button type="button" onClick={() => handleDeleteCategoria(cate.categoria_id)}>
                                    <FiTrash2 size={20} color="#e02041" />
                                </button>

                                <button type="button" onClick={() => localStorage.setItem('categoriaId', cate.categoria_id)}>
                                    <Link to="/categoria/edit">
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

