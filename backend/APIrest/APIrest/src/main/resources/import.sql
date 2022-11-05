--Dados Test
INSERT INTO caracteristicas (id, nome, icone) VALUES (1, 'nomeTest','iconeTest');

INSERT INTO categorias (id, qualificacao, descricao, imagem) VALUES (1, 'qualificacaoTest','descricaoTest', 'imagemTest');
INSERT INTO categorias (id, qualificacao, descricao, imagem) VALUES (2, 'qualificacaoTest2','descricaoTest2', 'imagemTest2');

INSERT INTO cidades (id, nome, pais) VALUES (1, 'nomeTest','paisTest');

INSERT INTO imagens (id, titulo, url) VALUES (1, 'tituloTest','urlTest');

INSERT INTO produtos (id, nome, descricao) VALUES (1, 'nomeTest','descricaoTest');

INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (1,1);