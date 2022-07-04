const {Client} = require('pg');

const erroBD = { 
    mensagem: "Erro de conexao no BD",
    numero: 500
};
const erroDemandaNaoEncontrada = {
    mensagem: "Demanda nao encontrada",
    numero:404
};

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

    const sql = "INSERT INTO demandas(descricao, cd_projeto, data, horas, responsavel) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [demanda.descricao, demanda.cd_projeto, demanda.data, demanda.horas, demanda.responsavel];

    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else {
                callback(undefined, res.rows[0]);
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
function atualizar(id, demanda, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE demandas SET descricao = $2, cd_projeto = $3, data = $4, horas = $5 WHERE id = $1 RETURNING *";
    const values = [id, demanda.descricao, demanda.cd_projeto, demanda.data, demanda.horas];

    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else if (res.rows && res.rows.length > 0) {
                let demanda = res.rows[0];
                callback(undefined, demanda);
            }
            else {
                callback(erroDemandaNaoEncontrada, undefined);
            }
            cliente.end();
        }
    )
}

//BUSCAR DEMANDA
function buscarPorId(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "select D.id, U.nome as responsavel, D.descricao, D.cd_projeto, P.nome_projeto, D.data, D.horas from demandas D left join projetos P on D.cd_projeto = P.cd_projeto left join usuarios U on D.responsavel = U.id where D.id = $1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else if (res.rows && res.rows.length > 0) {
                let demanda = res.rows[0];
                callback(undefined, demanda);
            }
            else {
                callback(erroDemandaNaoEncontrada, undefined);
            }
            cliente.end();
        }
    )    
}

//DELETAR DEMANDA
function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "DELETE FROM demandas WHERE id = $1 RETURNING *";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let demanda = res.rows[0];
                callback(undefined, demanda);
            }
            else {
                callback(erroDemandaNaoEncontrada, undefined);
            }    
            cliente.end();
        }
    )    
}

//EXPORT
module.exports = {
    inserir, listar, atualizar, buscarPorId, deletar
}