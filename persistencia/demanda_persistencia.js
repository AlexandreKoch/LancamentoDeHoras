const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'lancamento_de_horas'
};

//INSERIR DEMANDA
function inserir(demanda, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO demandas(descricao, cd_projeto, data, horas) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [demanda.descricao, demanda.cd_projeto, demanda.data, demanda.horas];

    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                callback(err, res.rows[0]);
            }
            cliente.end();
        }
    )
}

//LISTAR DEMANDA
function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM demandas";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let demandas = res.rows;
                callback(undefined, demandas);     
            }
            cliente.end();
        }
    )    
}

//ATUALIZAR DEMANDA
function atualizar(demanda, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE demandas SET descricao = $2, cd_projeto = $3, data = $4, horas = $5 WHERE id = $1";
    const values = [demanda.id, demanda.descricao, demanda.cd_projeto, demanda.data, demanda.horas];

    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                callback(undefined, demanda);
            }
            cliente.end();
        }
    )
}

//EXPORT
module.exports = {
    inserir, listar, atualizar
}