create table categorias (id integer not null auto_increment, descricao varchar(255), imagem varchar(255), qualificacao varchar(255), primary key (id)) engine=InnoDB;
INSERT INTO Categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest','descricaoTest', 'imagemTest');
