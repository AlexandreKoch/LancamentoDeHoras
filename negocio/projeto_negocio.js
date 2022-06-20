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

function buscar (projeto, callback) {
    if (!projeto.id) {
        const erro = "O ID precisa ser informado para realização da consulta";
    }
    else{
        projetoRepositorio.buscar(projeto, callback);
    }
}

module.exports = {
    inserir, listar, atualizar, buscar
}