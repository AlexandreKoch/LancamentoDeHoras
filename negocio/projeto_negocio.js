const projetoRepositorio = require ('../persistencia/projeto_persistencia.js');

function inserir (projeto, callback) {
    if (!projeto) {
        const erro = "O projeto possui campos obrigatórios não preenchidos";
    }
    else{
        projetoRepositorio.inserir(projeto, callback);
    }
}

function listar (callback) {
    projetoRepositorio.listar(callback);
}

function atualizar (projeto, callback) {
    if (!projeto) {
        const erro = "O projeto possui campos obrigatórios não preenchidos";
    }
    else{
        projetoRepositorio.atualizar(projeto, callback);
    }
}

module.exports = {
    inserir, listar, atualizar
}