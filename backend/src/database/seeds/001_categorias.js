
exports.seed = function(knex) {
  return knex('categorias').del()
    .then(function () {
      return knex('categorias').insert([
        { nome : 'Lingerie'},
        { nome : 'Roupas Masculinas'},
        { nome : 'Roupas Femininas'},
        { nome : 'Calçados Femininos'},
        { nome : 'Calçados Masculinos'},
        { nome : 'Acessórios'}
      ]);
    });
};
