# Trabalhando com Migrations no Knex
## Para mais informações [Site Knex.js](http://knexjs.org/)

#### Rodar a última migração que criei

* __npx knex migrate:latest__

#### Listar as Migrations

* __npx knex migrate:list__

#### Criar Migrations no Knex

* __npx knex migrate:make create_table_fornecedores__

#### Para rodar uma migration especifica
* __npx knex migrate:up 20200828152530_create_table_fornecedores.js__



-------------------------------------------------
## SEED
Seed é usado para quando se deseja popular uma tabela.

#### criar seed
* __npx knex seed:make 001_usuarios__

#### rodar todas as seed
* __npx knex seed:run__

#### rodar seed especifica
* __knex seed:run --specific=arquivoseed.js__
