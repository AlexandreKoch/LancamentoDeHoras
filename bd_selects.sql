select * from demandas
select * from projetos
select * from status
select * from areas

--Select PROJETOS
select P.id
	, P.cd_projeto
	, P.nome_projeto
	, A.nome_area
	, (select sum (horas) 
	   	from demandas 
	   	where cd_projeto = P.cd_projeto) as Total
	, S.status
from projetos P
	left join status S on P.id_status = S.id
	left join areas A on P.id_area = A.id
where P.cd_projeto = 123456

--Select SOMA DE HORAS
select sum(horas) 
from demandas
where cd_projeto = 123456

--Select DEMANDAS
select D.id
	, U.nome as responsavel
	, D.descricao
	, D.cd_projeto
	, P.nome_projeto
	, D.data
	, D.horas
from demandas D
	left join projetos P on D.cd_projeto = P.cd_projeto
	left join usuarios U on D.responsavel = U.id
where D.id = 4