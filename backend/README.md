# Sistema de controle de estoque

## Sumário

* [Descrição](#descrição)
* [Observação](#observação)
* [Execução do Projeto](#execução-do-projeto)
* [Instalação na Sua Máquina](#instalação-na-sua-máquina)
* [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)

## Descrição
Um sistema de controle de estoque simples, para o acompanhamento do fluxo de entrada e saída de produtos.

## Observação
Caso queira só fazer os testes no Postman, foi feito o deploy da API no Heroku [LINK API](https://api-devweb.herokuapp.com/)

## Execução do Projeto

* Criar usuário (POST) - Não é necessário autenticação
```sh
 	https://api-devweb.herokuapp.com/user/
```
```json
{ 
	"nome": "Silas",
        "email": "silas@gmail.com",
        "senha": "1234"
	
}
```
* Vai na rota sessão pra pegar o token e ter acesso as outras rotas que precisam de autenticação (POST)
```sh
	 https://api-devweb.herokuapp.com/session/
```
```json
{ 
	"nome": "Silas",
        "senha": "1234"
	
}
```

* Coloque o token no Headers da requisição com a chave __x-access-token__ como mostra na figura, é necessário fazer isso em todas as outras rotas que se encontram no arquivo [routes](https://github.com/kelsiane-lima/api/blob/master/src/routes.js)

![alt text](https://github.com/kelsiane-lima/api/blob/master/img/example.PNG)


## Instalação na Sua Máquina

* É necessário ter instalado na sua máquina o [Node.js](https://nodejs.org/en/)

* O Banco de dados [postgreSQL](https://www.postgresql.org/download/) ou Sqlite, faça alterações no arquivo [knexfile.js](https://github.com/kelsiane-lima/api/blob/master/knexfile.js)

* Clona o repositório:

```sh
    git clone https://github.com/kelsiane-lima/api.git
```
Linux ou Windows:

```sh
    npm install ou npm i
```


* Instalar o nodemon que é utilizado para auto reload no browser.
```sh
    npm install -g nodemon
    ou
    npm install nodemon --save-dev
```

- Para executar use:

```sh
    nodemon src/index.js
    ou
    npm start
```

* Rodar Migrations
Rode as migrações do projeto, para mais informações de como rodar clique [AQUI](https://github.com/kelsiane-lima/api/blob/master/src/database/README.md)


## Ferramentas e Tecnologias Utilizadas:

* PostgresSQL
* Express.js
* Node.js
* Knex.js

