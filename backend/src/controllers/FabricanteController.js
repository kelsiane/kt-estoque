const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const fabricante = await connection('fabricantes').select('*');

            return response.json(fabricante);
        } catch (error) {
            next(error)
        }

    },

    async create(request, response, next) {
        try {
            const { nome, telefone, site } = request.body;

            await connection('fabricantes').insert({
                nome,
                telefone,
                site
            });

            return response.send().status(201);

        } catch (error) {
            next(error)
        }

    },

    async delete(request, response, next) {
        try {
            const { fabricante_id } = request.params;

            await connection('fabricantes').where('fabricante_id', fabricante_id).delete();

            return response.status(201).send();

        }
        catch (error) {
            next(error)
        }
    },

    async edit(request, response, next) {

        try {
            const { fabricante_id } = request.params;
            const { nome, telefone, site } = request.body;


            await connection('fabricantes').where('fabricante_id', fabricante_id)
                .update('nome', nome)
                .update('telefone', telefone)
                .update('site', site);
            return response.send().status(201);
        } catch (error) {
            next(error)
        }
    }

}