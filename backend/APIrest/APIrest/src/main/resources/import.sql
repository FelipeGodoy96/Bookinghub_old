--Dados Test

INSERT INTO cidades (nome, pais) VALUES ('Ouro Preto', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('Rio de Janeiro', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('Itabirito', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('Belo Horizonte', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('São Paulo', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('Ituberá', 'BR');
INSERT INTO cidades (nome, pais) VALUES ('Salvador', 'BR');

INSERT INTO categorias (descricao, imagem, qualificacao) VALUES ('Hotel', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/HotelCapa.jpg', '5');
INSERT INTO categorias (descricao, imagem, qualificacao) VALUES ('Hotel Fazenda', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/HotelFazendaCapa.jpg', '4');
INSERT INTO categorias (descricao, imagem, qualificacao) VALUES ('Apartamentos', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/ApartamentosCapa.jpg', '4.5');
INSERT INTO categorias (descricao, imagem, qualificacao) VALUES ('Hostel', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/HostelCapa.jpg', '4.2');

INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região.', 'Hotel Solar de Maria', 1, 1);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('Torne esta estação brilhante com uma estada tropical no Copacabana Palace. Com vistas cinematográficas durante o dia e comemorações lendárias à noite, saboreie caipirinhas à beira da piscina e bronzeie-se em areias douradas. Nosso hotel tem sido um símbolo brasileiro à beira-mar por quase um século, e a sensação de glamour histórico está viva a cada passo. Enquanto seu coração deseja um almoço tranquilo sob o sol ou coquetéis ardentes às 4 da manhã, ajudaremos a manter a chama acesa no nosso oásis cultural.', 'Copacabana Palace, A Belmond Hotel', 2, 1);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('Chalés Charmosos, Ótimo Restaurante, Parque Aquático Completo, Piscina Aquecida Coberta. Cheio de Opções de Lazer e Entretenimento com uma Represa de Mais de 15 km de Extensão. Diversão para Família. Lazer para a Família.', 'Balneário Rio de Pedras', 3, 2);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('Um quarto amplo, com varanda. Possui uma cama de casal e uma cama de solteiro. É um bom lugar para renovar a energia. Roupas de cama, toalhas e uma coberta de casal estão inclusas na reserva.', 'Apartamento na Pampulha', 4, 3);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('O Hotel Solar do Rosário está localizado em Ouro Preto – cidade tombada como Patrimônio Cultural da Humanidade pela UNESCO e mundialmente famosa por suas histórias e sua magnífica arquitetura colonial. O casarão, datado do século XIX foi reformado e reestruturado, para alocar os hóspedes com todo o conforto e sofisticação, com a elegância e a tradição da arquitetura colonial. Composto por 41 quartos, as acomodações do Solar são preparadas para oferecer uma grande experiência de hospedagem e a oportunidade de viver a história de Ouro Preto.', 'Hotel Solar do Rosário', 1, 1);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('O Uai Hostel é interessante para quem gosta de musica, arte, interação e conforto por estar localizado em um lugar privilegiado e por ter uma vista impressionante do conjunto arquitetônico histórico , quem se hospedar aqui poderá fazer o passeio turístico é ou acadêmico todo caminhando pois estamos ao lado dos restaurantes, Igrejas, Museus, Centro de convenções da UFOP, Praça Tiradentes, Cinema, Teatro , Rodoviária , bancos, estação de trem, Mina de Ouro e Bares. Nossa area de convivência possui joguinhos de mesa, vitrolas e discos para escutar Musica.', 'Uai Hostel', 1, 4);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('O Ibis Budget São Paulo situa-se perto dos principais pontos turísticos da capital. A Avenida Paulista, cheia de museus como o MASP, Japan House e SESC, centros comerciais e edifícios comerciais, situam-se a apenas 9 minutos de carro. Outro local que merece mesmo a pena visitar é o bairro da Liberdade com a sua decoração japonesa, lojas e restaurantes (10 minutos de carro). Visite também o Mercado Municipal, a 15 minutos de carro.', 'Ibis Budget', 7, 1);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('Localizada em uma propriedade no marco que divide os Estados de Minas Gerais, Bahia e Goiás, a Pousada Trijunção tem como missão apoiar a redescoberta do Cerrado, e estimular a sua preservação.', 'Pousada Trijunção', 6, 2);
INSERT INTO produtos (descricao, nome, cidade_mtone, categoria_onetm) VALUES ('O Novotel Salvador Hangar Aeroporto Hotel tem como meta proporcionar a você uma visita relaxante e agradável, motivo pelo qual vários hóspedes retornam todos os anos.', 'Novotel Salvador Hangar Aeroporto', 7, 1);


INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Apartamento na Pampulha01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Apartamento+Pampulha/267027637.jpg', 4);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Apartamento na Pampulha02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Apartamento+Pampulha/267027662.jpg', 4);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Apartamento na Pampulha03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Apartamento+Pampulha/267093134.jpg', 4);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Apartamento na Pampulha04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Apartamento+Pampulha/316922594.jpg', 4);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Apartamento na Pampulha05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Apartamento+Pampulha/316922624.jpg', 4);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar do Rosário01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+do+Rosario/hotel-solar-do-rosario+(1).jpg', 5);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar do Rosário02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+do+Rosario/hotel-solar-do-rosario+(2).jpg', 5);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar do Rosário03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+do+Rosario/hotel-solar-do-rosario.jpg', 5);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar do Rosário04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+do+Rosario/photo4jpg+(1).jpg', 5);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar do Rosário05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+do+Rosario/photo4jpg.jpg', 5);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Uai Hostel01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Uai+Hostel/393580884.jpg', 6);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Uai Hostel02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Uai+Hostel/uai-hostel+(1).jpg', 6);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Uai Hostel03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Uai+Hostel/uai-hostel+(2).jpg', 6);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Uai Hostel04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Uai+Hostel/uai-hostel+(3).jpg', 6);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Uai Hostel05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Uai+Hostel/uai-hostel.jpg', 6);


INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Ibis Budget01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Ibis+Budget/43cc45b1.jpg', 7);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Ibis Budget02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Ibis+Budget/6adddd9f.jpg', 7);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Ibis Budget03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Ibis+Budget/7c1fec79.jpg', 7);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Ibis Budget04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Ibis+Budget/a8efc459.jpg', 7);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Ibis Budget05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Ibis+Budget/dec3c1dc.jpg', 7);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Pousada Trijunção01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Pousada+Trijuncao/161034127.jpg', 8);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Pousada Trijunção02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Pousada+Trijuncao/161036437.jpg', 8);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Pousada Trijunção03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Pousada+Trijuncao/161040357.jpg', 8);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Pousada Trijunção04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Pousada+Trijuncao/161040421.jpg', 8);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Pousada Trijunção05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Pousada+Trijuncao/suite-standard.jpg', 8);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_br_00_p_1024x768.jpg', 9);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_ho_00_p_1024x768.jpg', 9);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_ho_01_p_1024x768.jpg', 9);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_ro_00_p_1024x768.jpg', 9);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_rs_00_p_1024x768.jpg', 9);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Novotel Salvador06', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Novotel/8185_rs_01_p_1024x768.jpg', 9);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar de Maria01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+de+Maria/1.jpg', 1);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar de Maria02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+de+Maria/44251739.jpg', 1);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar de Maria03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+de+Maria/GPTempDownload-4.jpg', 1);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar de Maria04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+de+Maria/cafe.jpg', 1);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Hotel Solar de Maria05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Hotel+Solar+de+Maria/maxresdefault.jpg', 1);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Copacabana Palace01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Copacabana+Palace/Belmond-Copacabana-Palace-Carousel-05.jpg', 2);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Copacabana Palace02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Copacabana+Palace/Belmond-Copacabana-Palace-Uma-estada-glamour-no-Rio-de-Janeiro-770x450.jpg', 2);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Copacabana Palace03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Copacabana+Palace/DSC_0234.jpg', 2);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Copacabana Palace04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Copacabana+Palace/belmond-copacabana-palace.jpg', 2);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Copacabana Palace05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Copacabana+Palace/linkok.jpg', 2);

INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Balneário Rio de Pedras01', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Rio+de+Pedras/1507829688VRl7CpTpsC.jpg', 3);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Balneário Rio de Pedras02', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Rio+de+Pedras/256819859.jpg', 3);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Balneário Rio de Pedras03', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Rio+de+Pedras/Rio-de-Pedras-bald%C3%BAo-e-piscina-23-scaled.jpg', 3);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Balneário Rio de Pedras04', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Rio+de+Pedras/samba-itabirito-rio-de.jpg', 3);
INSERT INTO imagens_anuncio (titulo, url, imagens_produtos) VALUES ('Balneário Rio de Pedras05', 'https://grupo4-bookinghub.s3.us-west-1.amazonaws.com/Rio+de+Pedras/w1013h485x1y1-54690172.jpg', 3);

INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest','iconeTest');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest2','iconeTest2');
INSERT INTO caracteristicas (nome, icone) VALUES ('nomeTest3','iconeTest3');

INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (1,1);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (2,2);
INSERT INTO produto_caracteristica (produtoID, caracteristicaID) VALUES (3,3);

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');