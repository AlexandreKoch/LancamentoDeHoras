const cadastroProjeto = require('./negocio/projeto_negocio.js');
const cadastroDemanda = require('./negocio/demanda_negocio.js');

//console.log("Inserir Projeto: ");
// cadastroProjeto.inserir();

//console.log("Listar Projeto: ");
// cadastroProjeto.listar();

//console.log("Atualizar Projeto: ");
// cadastroProjeto.atualizar();

//console.log("Buscar Projeto Por Id: ");
// cadastroProjeto.buscarPorId();

//console.log("Deletar Projeto: ");
// cadastroProjeto.deletar();

//=================================================
//=================================================

//INSERIR DEMANDA
cadastroDemanda.inserir({descricao: 'Novo teste do banco',
                        cd_projeto: 123456,
                        data: '05/06/2022',
                         horas: '00:15:00'},
    function(err, demandaInserida) {
        console.log("Inserindo novo teste...")
        if(err) {
            console.log("Sistema esta com problemas para inserir demanda");
            console.log(err);
        }
        else {
            console.log("Demanda inserida: ");
            console.log(demandaInserida);
        }
    });

//LISTAR DEMANDA
// cadastroDemanda.listar(
//     function(err, demandas) {
//         console.log("Listar demandas: ");
//         if(err) {
//             console.log("Sistema esta com problemas para listar demandas");
//             console.log(err);
//         }
//         else {
//             console.log(demandas);
//         }
//     }
// );

//console.log("Atualizar Demanda: ");
// cadastroDemanda.atualizar();

//console.log("Buscar Demanda Por Id: ");
// cadastroDemanda.buscarPorId();

//console.log("Deletar Demanda: ");
// cadastroDemanda.deletar();