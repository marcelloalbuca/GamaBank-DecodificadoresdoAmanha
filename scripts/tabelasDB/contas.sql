CREATE TABLE IF NOT EXISTS contas (
id INT UNSIGNED AUTO_INCREMENT,
saldo double not null DEFAULT 0,
credito double not null DEFAULT 200,
idUsuario INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

select * from contas;

INSERT INTO contas (saldo, credito, idUsuario) values (0.00, 1);
INSERT INTO contas (saldo, credito, idUsuario) values (50.00, 2);
INSERT INTO contas (saldo, credito, idUsuario) values (30.00, 3);
INSERT INTO contas (saldo, credito, idUsuario) values (20.00, 4);
INSERT INTO contas (saldo, idUsuario) values (10.00, 5);