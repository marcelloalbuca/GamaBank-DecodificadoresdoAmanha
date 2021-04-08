CREATE TABLE IF NOT EXISTS movimentacoesInterna  (
id INT UNSIGNED AUTO_INCREMENT,
valor DOUBLE NOT NULL,
idConta INT UNSIGNED,
idUsuario INT,
idTransacao INT UNSIGNED,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idConta) REFERENCES contas(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idTransacao) REFERENCES transacoes(id)
);

INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (600.00, 1 ,1, 1);
INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (100.00, 3 ,2, 2);
INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (200.00, 4 ,2, 3);
INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (60.00, 2 ,2, 1);
INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (10.00, 5 ,2, 2);
INSERT INTO movimentacoesInterna (valor, idConta, idUsuario, idTransacao) values (20.00, 3 ,2, 3);

select * from movimentacoesInterna;
