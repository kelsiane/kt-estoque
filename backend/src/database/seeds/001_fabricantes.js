
exports.seed = function(knex) {

  return knex('fabricantes').del()
    .then(function () {
      
      return knex('fabricantes').insert([
        {nome:"ZATZ", telefone:"8891928289", site:"https://calcadoszatz.com.br/novo/empresa/"}
      ]);
    });
};
