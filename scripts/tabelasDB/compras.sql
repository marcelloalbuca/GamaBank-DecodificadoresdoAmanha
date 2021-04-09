CREATE TABLE IF NOT EXISTS compras (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
valor DOUBLE NOT NULL,
parcela BOOLEAN NOT NULL,
numeros_parcela INT NOT NULL,
idConta INT UNSIGNED,
idUsuario INT,
idTransacao INT UNSIGNED,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idConta) REFERENCES contas(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idTransacao) REFERENCES transacoes(id)
);

select * from compras;

INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (100.00 , false , 1 ,1, 1, 5);
INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (300.00 , true , 4 ,2, 2, 5);
INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (200.00 , false , 1 ,3, 3, 5);
INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (150.00 , true , 1 , 4, 4, 4);
INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (10.00 , true , 1 , 5, 5, 4);
INSERT INTO compras (valor, parcela, numeros_parcela, idConta, idUsuario, idTransacao) values (600.00 , false , 1 ,5, 5, 4);