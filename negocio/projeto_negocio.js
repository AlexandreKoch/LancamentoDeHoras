const projetoRepositorio = require ('../persistencia/projeto_persistencia.js');

function inserir (projeto, callback) {
    if(!projeto || !projeto.nome_projeto || !projeto.cd_projeto){
        const erro = { 
            mensagem: "O projeto possui campos obrigatórios não preenchidos",
            numero: 400
        };
        callback(erro, undefined)
    }
    else {
        projetoRepositorio.inserir(projeto, callback);
    }  
}

function listar (callback) {
    projetoRepositorio.listar(callback);
}

function atualizar(id, projeto, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else if(!projeto || !projeto.nome_projeto || !projeto.cd_projeto) {
        const erro = { 
            mensagem: "Todos os campos devem ser preenchidos!",
            numero: 400
        };
        callback(erro, undefined)
    }
    else { 
        projetoRepositorio.atualizar(id, projeto, callback);
    }
}

function buscarPorId(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else { 
        projetoRepositorio.buscarPorId(id, callback);
    }
}

function deletar(id, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else {
        projetoRepositorio.deletar(id,callback);
    }
}

module.exports = {
    inserir, listar, atualizar, buscarPorId, deletar
}