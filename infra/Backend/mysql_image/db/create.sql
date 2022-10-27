create table category (id integer not null auto_increment, name varchar(255), primary key (id)) engine=InnoDB;
create table product (id integer not null auto_increment, brand varchar(255), description varchar(255), image varchar(255), price double precision, title varchar(255), primary key (id)) engine=InnoDB;
create table product_category (product_id integer not null, category_id integer not null, primary key (product_id, category_id)) engine=InnoDB;
alter table product_category add constraint FKkud35ls1d40wpjb5htpp14q4e foreign key (category_id) references category (id);
alter table product_category add constraint FK2k3smhbruedlcrvu6clued06x foreign key (product_id) references product (id);
INSERT INTO category (name) VALUES ('Camiseta');
INSERT INTO product (title, description, brand, image, price) VALUES ('Produto teste', 'Descrição teste','Nike', 'https://imgnike-a.akamaihd.net/1300x1300/01091215.jpg', 99.90);
INSERT INTO product_category (product_id, category_id) VALUES (1, 1);
