const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const { nome } = request.params;
            const product = await connection('produtos').where('nome', 'like', '%' + nome + '%').select('*');

            return response.json(product);

        } catch (error) {
            next(error)
        }

    },
    

    async relatorio(request, response, next) {
        try {
            const product = await connection('produtos').whereRaw('produtos.qtd <= produtos.qtd_limite').select('*');

            return response.json(product);

        } catch (error) {
            next(error)
        }

    }
}