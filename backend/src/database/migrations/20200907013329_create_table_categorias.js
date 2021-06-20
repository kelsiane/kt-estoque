
exports.up = function(knex) {
    return knex.schema.createTable('categorias', function (table){
        table.increments('categoria_id').primary()
        table.string('nome').notNullable()
        table.text('descricao')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    });
  };
  exports.down = function(knex) {
    return knex.schema.dropTable('categorias')
  };