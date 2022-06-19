const demandaRepositorio = require ('../persistencia/demanda_persistencia.js');

function inserir (demanda, callback) {
    if (!demanda || !demanda.descricao || !demanda.cd_projeto || !demanda.data || !demanda.horas){
        const erro = "A demanda possui campo(s) não preenchido(s).";
    }
    else{
        demandaRepositorio.inserir(demanda, callback);
    }
}

function listar (callback) {
    demandaRepositorio.listar(callback);
}

function atualizar (demanda, callback) {
    if (!demanda || !demanda.descricao || !demanda.cd_projeto || !demanda.data || !demanda.horas){
        const erro = "A demanda possui campo(s) não preenchido(s).";
    }
    else{
        demandaRepositorio.atualizar(demanda, callback);
    }
}

module.exports = {
    inserir, listar, atualizar
}