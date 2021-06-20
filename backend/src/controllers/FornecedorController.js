const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const fornecedor = await connection('fornecedores').select('*');

            return response.json(fornecedor);
        } catch (error) {
            next(error)
        }

    },

    async create(request, response, next) {
        try {
            const { nome, cnpj, telefone, email, endereco } = request.body;

            await connection('fornecedores').insert({
                nome,
                cnpj,
                telefone,
                email,
                endereco
            });

            return response.send().status(201);

        } catch (error) {
            next(error)
        }

    },

    async delete(request, response, next) {
        try {
            const { fornecedor_id } = request.params;

            await connection('fornecedores').where('fornecedor_id', fornecedor_id).delete();

            return response.status(201).send();

        }
        catch (error) {
            next(error)
        }
    },

    async edit(request, response, next) {

        try {
            const {fornecedor_id} = request.params;
            const { nome, cnpj, telefone, email, endereco } = request.body;

            
            await connection('fornecedores').where('fornecedor_id', fornecedor_id)
            .update('nome',nome)
            .update('cnpj', cnpj)
            .update('celular',telefone)
            .update('email',email)
            .update('endereco',endereco);
            return response.send().status(201);
        } catch (error) {
            next(error)
        }
    }

    }