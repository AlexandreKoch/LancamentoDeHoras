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
        // function (err, res){
        //     callback(err, res.rows[0]);
        //     cliente.end();
        // }
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                //let demandas = res.rows;
                //callback(undefined, demandas);
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

//EXPORT
module.exports = {
    inserir, listar
}