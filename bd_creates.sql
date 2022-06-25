--Create AREAS
CREATE TABLE IF NOT EXISTS public.areas
(
    id integer NOT NULL DEFAULT nextval('areas_id_seq'::regclass),
    nome_area character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT areas_pkey PRIMARY KEY (id)
)

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

--Create STATUS
CREATE TABLE IF NOT EXISTS public.status
(
    id integer NOT NULL DEFAULT nextval('status_id_seq'::regclass),
    status character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT status_pkey PRIMARY KEY (id)
)

insert into status (status)
values ('Pendente'), ('Em andamento'), ('Aguardando'), ('Finalizado'), ('Cancelado')

--Create PROJETOS
CREATE TABLE IF NOT EXISTS public.projetos
(
    id integer NOT NULL DEFAULT nextval('projetos_id_seq'::regclass),
    nome_projeto character varying COLLATE pg_catalog."default" NOT NULL,
    cd_projeto integer NOT NULL,
    id_area integer NOT NULL,
    id_status integer NOT NULL,
    CONSTRAINT id PRIMARY KEY (id)
        INCLUDE(id),
    CONSTRAINT cd_projeto UNIQUE (cd_projeto),
    CONSTRAINT area FOREIGN KEY (id_area)
        REFERENCES public.areas (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT status FOREIGN KEY (id_status)
        REFERENCES public.status (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

--create USUARIOS
CREATE TABLE IF NOT EXISTS public.usuarios
(
    id integer NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id)
)

--Create DEMANDAS
CREATE TABLE IF NOT EXISTS public.demandas
(
    id integer NOT NULL DEFAULT nextval('demandas_id_seq'::regclass),
    descricao character varying COLLATE pg_catalog."default" NOT NULL,
    cd_projeto integer NOT NULL,
    data date NOT NULL,
    horas time without time zone NOT NULL,
    responsavel integer NOT NULL,
    CONSTRAINT demandas_pkey PRIMARY KEY (id),
    CONSTRAINT "codigo projeto" FOREIGN KEY (cd_projeto)
        REFERENCES public.projetos (cd_projeto) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "id usuario" FOREIGN KEY (responsavel)
        REFERENCES public.usuarios (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)