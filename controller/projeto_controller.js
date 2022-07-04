const cadastroProjeto = require('../negocio/projeto_negocio.js');

//INSERIR PROJETOS
exports.inserir = (req, res) => {
    const projeto = req.body;
  
    cadastroProjeto.inserir(projeto, 
      function(err, projetoInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(projetoInserido);
        }
      });  
}

//LISTAR PROJETOS
exports.listar = (req, res) => {
    cadastroProjeto.listar(function(err, projetos) {
            console.log("Listar projetos: ");
            if(err) {
                res.status(err.numero).json({erro: err.mensagem});
            }
            else {
                res.json(projetos);
            }
        }
    );
}

//BUSCAR PROJETOS
exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    cadastroProjeto.buscarPorId(id, function (err, projeto){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(projeto);
      }
    });
}

//ATUALIZAR PROJETOS
exports.atualizar = (req, res) => {
    const id = req.params.id;
    const projeto = req.body;
    cadastroProjeto.atualizar(id, projeto, 
      function(err, projetoAlterado) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(projetoAlterado);
        }
      });
}

//DELETAR PROJETOS
exports.deletar = (req, res) => {
    const id = req.params.id;
    cadastroProjeto.deletar(id, function (err, projeto){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(projeto);
        }
      });
  }