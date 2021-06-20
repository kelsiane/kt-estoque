const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const categoria = await connection('categorias').select('*');

            return response.json(categoria);

        } catch (error) {
            next(error)
        }

    },

    async create(request, response, next) {
        try {
            const { nome, descricao } = request.body;

            await connection('categorias').insert({
                nome,
                descricao
            });

            return response.send().status(201);
        } catch (error) {
            next(error)
        }

    },
    async edit(request, response, next){

        try {
            const {categoria_id} = request.params;
            const {nome, descricao} = request.body;
            await connection('categorias').where('categoria_id', categoria_id)
            .update('nome', nome)
            .update('descricao', descricao);
        response.send().status(201);
        } catch (error) {
            next(error)
        }
    },
    
    async delete(request, response, next) {
        try {
            const { categoria_id } = request.params;

            await connection('categorias').where('categoria_id', categoria_id).delete();

            return response.status(201).send();
        } catch (error) {
            next(error)
        }

    }
}