-- AQUI TEMOS O SEEDING DE DADOS


--Categoria(Category)
INSERT INTO category (name) VALUES ('Camiseta');

--Produto(Product)
INSERT INTO product (title, description, brand, image, price) VALUES ('Produto teste', 'Descrição teste','Nike', 'https://imgnike-a.akamaihd.net/1300x1300/01091215.jpg', 99.90);

--Product_category
INSERT INTO product_category (product_id, category_id) VALUES (1, 1);



--Cliente (Client) - Precisa criar o mvc completo
    -- INSERT INTO Client (email, fullname, birthdate, cpf, city, postalcode, state, street, residencenumber, residencecomplement, creationdate)