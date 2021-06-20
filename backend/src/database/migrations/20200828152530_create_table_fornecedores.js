const { onUpdateTrigger } = require('../../../knexfile')
exports.up = function(knex) {
  return knex.schema.createTable('fornecedores', function (table){
      table.increments('fornecedor_id').primary()
      table.string('nome')
      table.string('cnpj')
      table.string('telefone')
      table.string('email').unique()
      table.string('endereco')
      table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('fornecedores');
};
