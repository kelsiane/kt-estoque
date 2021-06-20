exports.up = function(knex) {
    return knex.schema.createTable('fabricantes', function (table){
        table.increments('fabricante_id').primary()
        table.string('nome').notNullable()
        table.string('telefone')
        table.string('site')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    });
  };
  exports.down = function(knex) {
    return knex.schema.dropTable('fabricantes')
  };