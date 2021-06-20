
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function (table){
        table.increments('usuario_id').primary()
        table.string('nome').notNullable()
        table.string('email').unique()
        table.string('senha').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
  };