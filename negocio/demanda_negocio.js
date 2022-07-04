const demandaRepositorio = require ('../persistencia/demanda_persistencia.js');

function inserir (demanda, callback) {
    if (!demanda || !demanda.descricao || !demanda.cd_projeto || !demanda.data || !demanda.horas){
        //const erro = "A demanda possui campo(s) não preenchido(s).";
        const erro = { 
            mensagem: "A demanda possui campos obrigatórios não preenchidos",
            numero: 400
        };
        callback(erro, undefined)
    }
    else{
        demandaRepositorio.inserir(demanda, callback);
    }
}

function listar (callback) {
    demandaRepositorio.listar(callback);
}

function atualizar (id, demanda, callback) {
    if (!id || isNaN(id)){
        const erro = { 
            mensagem: "Identificador Invalido!",
            numero: 400
        }
        callback(erro, undefined);
    }
    else if(!demanda || !demanda.descricao || !demanda.cd_projeto || !demanda.data || !demanda.horas){
        const erro = { 
            mensagem: "A demanda possui campo(s) não preenchido(s).",
            numero: 400
        };
    }
    else{
        demandaRepositorio.atualizar(id, demanda, callback);
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
        demandaRepositorio.buscarPorId(id, callback);
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
        demandaRepositorio.deletar(id,callback);
    }
}

module.exports = {
    inserir, listar, atualizar, buscarPorId, deletar
}