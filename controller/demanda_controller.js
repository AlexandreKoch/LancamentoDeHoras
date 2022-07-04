const cadastroDemanda = require('../negocio/demanda_negocio.js');

//INSERIR DEMANDAS
exports.inserir = (req, res) => {
    const demanda = req.body;
  
    cadastroDemanda.inserir(demanda, 
      function(err, demandaInserida) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(demandaInserida);
        }
      });  
}

//LISTAR DEMANDAS
exports.listar = (req, res) => {
    cadastroDemanda.listar(function(err, demandas) {
            console.log("Listar demandas: ");
            if(err) {
                res.status(err.numero).json({erro: err.mensagem});
            }
            else {
                res.json(demandas);
            }
        }
    );
}

//BUSCAR DEMANDAS
exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    cadastroDemanda.buscarPorId(id, function (err, demanda){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(demanda);
      }
    });
}

//ATUALIZAR DEMANDAS
exports.atualizar = (req, res) => {
    const id = req.params.id;
    const demanda = req.body;
    cadastroDemanda.atualizar(id, demanda, 
      function(err, demandaAlterada) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(demandaAlterada);
        }
      });
}

//DELETAR DEMANDAS
exports.deletar = (req, res) => {
    const id = req.params.id;
    cadastroDemanda.deletar(id, function (err, demanda){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(demanda);
        }
      });
  }