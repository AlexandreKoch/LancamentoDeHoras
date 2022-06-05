select * from projetos

insert into projetos (nome_projeto, cd_projeto, id_area, id_status)
values ('Cadastro de Moidos', 123456, 12, 4)

select * from areas

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

select * from status

insert into status (status)
values ('Pendente'), ('Em andamento'), ('Aguardando'), ('Finalizado'), ('Cancelado')