
exports.seed = function(knex) {
  return knex('usuarios').del()
    .then(function () {
      return knex('usuarios').insert([
        {nome:"Kelsiane", email:"kelsianelima74@gmail.com", senha:"$2a$08$ezznLY5PN2LCUBjgIkR4KeWFgPoE6h0yrOk9JctGERNL5yDo9TWbe"}
      ]);
    });
};
