select * from demandas
select * from projetos
select * from status
select * from areas

--Insere PROJETOS
insert into projetos (nome_projeto, cd_projeto, id_area, id_status)
values ('Cadastro de Moidos', 123456, 12, 4)

--Insere DEMANDAS
insert into demandas (descricao, cd_projeto, data, horas)
values ('Preenchimento da tabela', 123123, '12/06/2022', '02:30')

--Insere AREAS
insert into areas (nome_area)
values ('DTI - Tecnologia da Informação'),
('ENG - Engenharia'),
('CONT - Controladoria'),
('FIN - Financeiro'),
('SUP - Suprimentos'),
('RHU - Recursos Humanos'),
('VDS - Vendas'),
('DPD - Gestão de Design'),
('GPP - Gestão de Negócios'),
('DVE - Departamento de Vendas Especiais (Melissa)'),
('DCG - Digital Commerce'),
('FAB - Fábrica / Produção'),
('JUR - Jurídico')

--Insere STATUS
insert into status (status)
values ('Pendente'), ('Em andamento'), ('Aguardando'), ('Finalizado'), ('Cancelado')