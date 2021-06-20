const express = require('express');
var jwt = require('jsonwebtoken');
const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const ProfileController = require('./controllers/ProfileController');
const SessaoController = require('./controllers/SessaoController');
const FornecedorController = require('./controllers/FornecedorController');
const CategoriaController = require('./controllers/CategoriaController');
const FabricanteController = require('./controllers/FabricanteController');
const routes = express.Router();

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, mensagem: 'Token não existe' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, mensagem: 'Falha na autenticação do token' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
 }

//Rotas de Fornecedor

routes.get('/fornecedor',verifyJWT, FornecedorController.index);
routes.delete('/fornecedor/:fornecedor_id',verifyJWT, FornecedorController.delete);
routes.post('/fornecedor',verifyJWT, FornecedorController.create);
routes.put('/fornecedor/:fornecedor_id',verifyJWT, FornecedorController.edit);

//Rotas de User

routes.get('/user',verifyJWT, UsuarioController.index);
routes.post('/user', UsuarioController.create);
routes.delete('/user/:usuario_id',verifyJWT, UsuarioController.delete);
routes.put('/user/:usuario_id',verifyJWT, UsuarioController.edit);

//Rotas de Categorias

routes.get('/category', verifyJWT,CategoriaController.index);
routes.post('/category',verifyJWT, CategoriaController.create);
routes.delete('/category/:categoria_id',verifyJWT, CategoriaController.delete);
routes.put('/category/:categoria_id',verifyJWT, CategoriaController.edit);

//Rota de autenticaçao simples

routes.post('/session', SessaoController.create);

// Rotas de Produtos

routes.get('/product',verifyJWT, ProdutoController.index);
routes.post('/product',verifyJWT, ProdutoController.create);
routes.delete('/product/:produto_id',verifyJWT, ProdutoController.delete);
routes.put('/product/:produto_id/:qtd/:op',verifyJWT, ProdutoController.edit);

// Rotas para criar a página de profile

routes.get('/profile/:nome',  ProfileController.index);
routes.get('/profile',  ProfileController.relatorio);

// Rotas de Fabricante
routes.get('/fabricante',verifyJWT, FabricanteController.index);
routes.delete('/fabricante/:fabricante_id',verifyJWT, FabricanteController.delete);
routes.post('/fabricante',verifyJWT, FabricanteController.create);
routes.put('/fabricante/:fabricante_id',verifyJWT, FabricanteController.edit);

routes.get('/', function index(request, response){
  response.send("API vivendooo!!!")
})

module.exports = routes;