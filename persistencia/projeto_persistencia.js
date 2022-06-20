const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'lancamento_de_horas'
};

//INSERIR PROJETO
function inserir(projeto, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO projetos (nome_projeto, cd_projeto, id_area, id_status) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [projeto.nome_projeto, projeto.cd_projeto, projeto.id_area, projeto.id_status];

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

//LISTAR PROJETO
function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM projetos";
    //const sql = "select P.id, P.cd_projeto, P.nome_projeto, A.nome_area, (select sum (horas) from demandas where cd_projeto = P.cd_projeto) as Total, S.status from projetos P left join status S on P.id_status = S.id left join areas A on P.id_area = A.id";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let projetos = res.rows;
                callback(undefined, projetos);
            }
            cliente.end();
        }
    )    
}

//ATUALIZAR PROJETO
function atualizar(projeto, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE projetos SET nome_projeto = $2, cd_projeto = $3, id_area = $4, id_status = $5 WHERE id = $1";
    const values = [projeto.id, projeto.nome_projeto, projeto.cd_projeto, projeto.id_area, projeto.id_status];

    cliente.query(sql, values, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                callback(undefined, projeto);
            }
            cliente.end();
        }
    )
}

//BUSCAR PROJETO
function buscar(projeto, callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "select P.id, P.cd_projeto, P.nome_projeto, A.nome_area, (select sum (horas) from demandas where cd_projeto = P.cd_projeto) as Total, S.status from projetos P left join status S on P.id_status = S.id left join areas A on P.id_area = A.id where P.id = $1";
    const values = [projeto.id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let projetos = res.rows;
                callback(undefined, projetos);
            }
            cliente.end();
        }
    )    
}

//EXPORT
module.exports = {
    inserir, listar, atualizar, buscar
}