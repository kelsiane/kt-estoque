const connection = require('../database/connection');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    async create(request, response, next) {
        try {
            const { nome, senha } = request.body;
            const user = await connection('usuarios').where('nome', nome).select('senha').select('nome').select('usuario_id').first();
            if (user) {
                const compareSenha = await bcrypt.compare(senha, user.senha);
                const id = user.usuario_id;

                if (compareSenha === true) {
                    var token = jwt.sign({ id }, process.env.SECRET, {
                        expiresIn: 600 // expira em 10min
                    });
                    return response.json({ auth: true, token: token, nome, id });
                }
                else {
                    return response.status(400).json({ error: 'Dados incorretos!!' });
                }
            }
            else {
                return response.status(400).json({ error: 'Dados incorretos!!' });
            }

        } catch (error) {
            next(error);
        }

    }
}