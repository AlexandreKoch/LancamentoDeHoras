const cadastroProjeto = require('./negocio/projeto_negocio.js');
const cadastroDemanda = require('./negocio/demanda_negocio.js');

//INSERIR PROJETO
// cadastroProjeto.inserir({nome_projeto: 'Lançamento de outras bases',
//                         cd_projeto: 456456,
//                         id_area: 6,
//                         id_status: 1},
//     function(err, projetoInserido) {
//         console.log("Inserindo novo projeto...")
//         if(err) {
//             console.log("Sistema esta com problemas para inserir projeto");
//             console.log(err);
//         }
//         else {
//             console.log("Projeto inserido: ");
//             console.log(projetoInserido);
//         }
//     });

//LISTAR PROJETOS
// cadastroProjeto.listar(
//     function(err, projetos) {
//         console.log("Listar projetos: ");
//         if(err) {
//             console.log("Sistema esta com problemas para listar projetos");
//             console.log(err);
//         }
//         else {
//             console.log(projetos);
//         }
//     }
// );

//ATUALIZAR PROJETO
// cadastroProjeto.atualizar({id: 4,
//                         nome_projeto: 'Lançamento de outras bases',
//                         cd_projeto: 456456,
//                         id_area: 6,
//                         id_status: 1},
//     function(err, projetoAtualizado) {
//         console.log("Atualizando projeto...")
//         if(err) {
//             console.log("Sistema esta com problemas para atualizar projeto");
//             console.log(err);
//         }
//         else {
//             console.log("Projeto atualizado: ");
//             console.log(projetoAtualizado);
//         }
//     });

//BUSCAR PROJETOS
cadastroProjeto.buscar({id: 3},
    function(err, projetos) {
        console.log("Buscar projetos: ");
        if(err) {
            console.log("Sistema esta com problemas para buscar projetos");
            console.log(err);
        }
        else {
            console.log(projetos);
        }
    }
);

//console.log("Deletar Projeto: ");
// cadastroProjeto.deletar();

//==================================================================================================
//==================================================================================================
//==================================================================================================

//INSERIR DEMANDA
// cadastroDemanda.inserir({descricao: 'Novo teste do banco',
//                         cd_projeto: 123456,
//                         data: '05/06/2022',
//                          horas: '00:15:00'},
//     function(err, demandaInserida) {
//         console.log("Inserindo novo teste...")
//         if(err) {
//             console.log("Sistema esta com problemas para inserir demanda");
//             console.log(err);
//         }
//         else {
//             console.log("Demanda inserida: ");
//             console.log(demandaInserida);
//         }
//     });

//LISTAR DEMANDAS
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

//ATUALIZAR DEMANDA
// cadastroDemanda.atualizar({id: 3,
//                         descricao: 'Novo teste do banco',
//                         cd_projeto: 123456,
//                         data: '05/06/2022',
//                         horas: '04:15:00'},
//     function(err, demandaInserida) {
//         console.log("Atualizando demanda...")
//         if(err) {
//             console.log("Sistema esta com problemas para atualizar demanda");
//             console.log(err);
//         }
//         else {
//             console.log("Demanda inserida: ");
//             console.log(demandaInserida);
//         }
//     });

//console.log("Buscar Demanda Por Id: ");
// cadastroDemanda.buscarPorId();

//console.log("Deletar Demanda: ");
// cadastroDemanda.deletar();