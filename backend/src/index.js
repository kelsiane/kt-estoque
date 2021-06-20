const express = require('express');
const routes = require('./routes');
require("dotenv-safe").config(); 

const app = express();
const PORT =3333;

app.use(express.json());
app.use(routes);



// 404 - notfound
app.use((req, res, next) => {
   const error = new Error('Not found')
   error.status = 404
   next(error)
})

app.use((error, req, res, next) => {
   res.status(error.status || 500)
   res.json({ error: error.message})
})

app.listen(process.env.PORT || PORT,function(){
   console.log("api rodando!!");
});