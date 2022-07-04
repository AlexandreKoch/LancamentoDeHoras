const express = require('express')
const projetoController = require('./controller/projeto_controller.js');
const demandaController = require('./controller/demanda_controller.js');
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//====================================================//
//PROJETOS - PROJETOS - PROJETOS - PROJETOS - PROJETOS//
//====================================================//
//Inserir
app.post('/api/projetos', projetoController.inserir);

//Listar
app.get('/api/projetos', projetoController.listar);

//BuscarProjetoPorId
app.get('/api/projetos/:id', projetoController.buscarPorId);

//Atualizar
app.put('/api/projetos/:id', projetoController.atualizar);

//Deletar
app.delete('/api/projetos/:id', projetoController.deletar);

//====================================================//
//DEMANDAS - DEMANDAS - DEMANDAS - DEMANDAS - DEMANDAS//
//====================================================//
//Inserir
app.post('/api/demandas', demandaController.inserir);

//Listar
app.get('/api/demandas', demandaController.listar);

//BuscarDemandaPorId
app.get('/api/demandas/:id', demandaController.buscarPorId);

//Atualizar
app.put('/api/demandas/:id', demandaController.atualizar);

//Deletar
app.delete('/api/demandas/:id', demandaController.deletar);

//==========================================//
//LISTEN - LISTEN - LISTEN - LISTEN - LISTEN//
//==========================================//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
