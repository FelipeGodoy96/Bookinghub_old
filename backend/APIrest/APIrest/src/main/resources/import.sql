--Dados Test
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest','iconeTest');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest2','iconeTest2');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest3','iconeTest3');

INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest','descricaoTest', 'imagemTest');
INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest2','descricaoTest2', 'imagemTest2');
INSERT INTO categorias (qualificacao, descricao, imagem) VALUES ('qualificacaoTest3','descricaoTest3', 'imagemTest3');

INSERT INTO cidades (nome, pais) VALUES ('nomeTest','paisTest');
INSERT INTO cidades (nome, pais) VALUES ('nomeTest2','paisTest2');
INSERT INTO cidades (nome, pais) VALUES ('nomeTest3','paisTest3');

INSERT INTO imagens_anuncio (titulo, url) VALUES ('tituloTest','urlTest');
INSERT INTO imagens_anuncio (titulo, url) VALUES ('tituloTest','urlTest');
INSERT INTO imagens_anuncio (titulo, url) VALUES ('tituloTest','urlTest');

INSERT INTO produtos (nome, descricao) VALUES ('nomeTest','descricaoTest');
INSERT INTO produtos (nome, descricao) VALUES ('nomeTest2','descricaoTest2');
INSERT INTO produtos (nome, descricao) VALUES ('nomeTest3','descricaoTest3');

--INSERT INTO papeis (authority) VALUES ('ADMtest');
--INSERT INTO papeis (authority) VALUES ('USERtest');

--INSERT INTO usuarios (username, senha, nome, sobrenome) VALUES ('viramos017@gmail.com', '$2a$10$KyhZxjXKWO8RJRCXImmyGecGMD75VMMhlGf8OTI2N/4p/kmLPJgn.', 'vinicius',  'felce');
--INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES ('nomeTest2', 'sobrenome2', 'email2', 'senha2');
--INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES ('nomeTest3', 'sobrenome3', 'email3', 'senha3');

--INSERT INTO reservas(h_inic_reser, d_inic_reser, d_fin_reser) VALUES('23:18:00', '2023-06-17', '2023-06-20');
--INSERT INTO reservas(h_inic_reser, d_inic_reser, d_fin_reser) VALUES('06:00:00', '2022-12-30', '2023-01-05');
--INSERT INTO reservas(h_inic_reser, d_inic_reser, d_fin_reser) VALUES('20:10:00', '2023-01-10', '2023-01-15');

--INSERT INTO cliente (id) VALUES (1);
--INSERT INTO cliente (id) VALUES (2);
--INSERT INTO cliente (id) VALUES (3);

--INSERT INTO usuarios_clientes (cliente_id, usuarios_id) VALUES (1, 1);
--INSERT INTO usuarios_clientes (cliente_id, usuarios_id) VALUES (2, 2);
--INSERT INTO usuarios_clientes (cliente_id, usuarios_id) VALUES (3, 3);

--INSERT INTO usuarios_papeis (usuario_id, papeis_id) VALUES (1, 1);
--INSERT INTO usuarios_papeis (usuario_id, papeis_id) VALUES (2, 2);
--INSERT INTO usuarios_papeis (usuario_id, papeis_id) VALUES (3, 2);

INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (1,1);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (2,2);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (3,3);

UPDATE produtos SET categoria_onetm = 1 WHERE id = 3
UPDATE produtos SET categoria_onetm = 2 WHERE id = 2
UPDATE produtos SET categoria_onetm = 3 WHERE id = 3

UPDATE produtos SET cidade_mtone = 1 WHERE id = 3
UPDATE produtos SET cidade_mtone = 2 WHERE id = 2
UPDATE produtos SET cidade_mtone = 3 WHERE id = 1

--UPDATE produtos SET usuarios_produtos = 2 WHERE id = 1
--UPDATE produtos SET usuarios_produtos = 2 WHERE id = 3
--UPDATE produtos SET usuarios_produtos = 3 WHERE id = 2

--UPDATE reservas SET reservas_produtos = 1 WHERE id = 1
--UPDATE reservas SET reservas_produtos = 2 WHERE id = 3
--UPDATE reservas SET reservas_produtos = 3 WHERE id = 2

UPDATE imagens_anuncio SET imagens_produtos = 1 WHERE id = 1
UPDATE imagens_anuncio SET imagens_produtos = 2 WHERE id = 2
UPDATE imagens_anuncio SET imagens_produtos = 2 WHERE id = 3

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');