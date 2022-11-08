
    create table caracteristicas (
       id integer not null auto_increment,
        icone varchar(255),
        nome varchar(255),
        primary key (id)
    ) engine=InnoDB;

    create table categorias (
       id integer not null auto_increment,
        descricao varchar(255),
        imagem varchar(255),
        qualificacao varchar(255),
        primary key (id)
    ) engine=InnoDB;

    create table cidades (
       id integer not null auto_increment,
        nome varchar(255),
        pais varchar(255),
        primary key (id)
    ) engine=InnoDB;

    create table imagens (
       id integer not null auto_increment,
        titulo varchar(255),
        url varchar(255),
        primary key (id)
    ) engine=InnoDB;

    create table produto_caracteristica (
       produtoid integer not null,
        caracteristicaid integer not null,
        primary key (produtoid, caracteristicaid)
    ) engine=InnoDB;

    create table produtos (
       id integer not null auto_increment,
        descricao varchar(255),
        nome varchar(255),
        categoria_onetm integer,
        cidade_mtone integer,
        primary key (id)
    ) engine=InnoDB;

    alter table produto_caracteristica 
       add constraint FK22jjyg1cing8bvkl06ricq80x 
       foreign key (caracteristicaid) 
       references caracteristicas (id);

    alter table produto_caracteristica 
       add constraint FKpvcsi86fgg16xybfpduoxoofg 
       foreign key (produtoid) 
       references produtos (id);

    alter table produtos 
       add constraint FKga9xspxhaqe1cff1cgj6hyeht 
       foreign key (categoria_onetm) 
       references categorias (id);

    alter table produtos 
       add constraint FKaqouv4dnoy81s1aiv2qcxnjwj 
       foreign key (cidade_mtone) 
       references cidades (id);
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest','iconeTest');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest2','iconeTest2');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest3','iconeTest3');
INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest','descricaoTest', 'imagemTest');
INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest2','descricaoTest2', 'imagemTest2');
INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest3','descricaoTest3', 'imagemTest3');
INSERT INTO cidades (nome, pais) VALUES ('nomeTest','paisTest');
INSERT INTO cidades (nome, pais) VALUES ('nomeTest2','paisTest2');
INSERT INTO cidades (nome, pais) VALUES ('nomeTest3','paisTest3');
INSERT INTO imagens (titulo, url) VALUES ('tituloTest','urlTest');
INSERT INTO imagens (titulo, url) VALUES ('tituloTest2','urlTest2');
INSERT INTO imagens (titulo, url) VALUES ('tituloTest3','urlTest3');
INSERT INTO produtos (nome, descricao) VALUES ('nomeTest','descricaoTest');
INSERT INTO produtos (nome, descricao) VALUES ('nomeTest2','descricaoTest2');
INSERT INTO produtos (nome, descricao) VALUES ('nomeTest3','descricaoTest3');
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (1,1);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (2,2);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (3,3);
UPDATE produtos SET categoria_onetm = 1 WHERE id = 3;
UPDATE produtos SET categoria_onetm = 2 WHERE id = 2;
UPDATE produtos SET categoria_onetm = 3 WHERE id = 3;
UPDATE produtos SET cidade_mtone = 1 WHERE id = 3;
UPDATE produtos SET cidade_mtone = 2 WHERE id = 2;
UPDATE produtos SET cidade_mtone = 3 WHERE id = 1;
