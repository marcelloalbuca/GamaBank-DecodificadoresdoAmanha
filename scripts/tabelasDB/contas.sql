CREATE TABLE IF NOT EXISTS contas (
id INT UNSIGNED AUTO_INCREMENT,
saldo double not null,
credito double not null,
idUsuario INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

select * from contas;

INSERT INTO contas (saldo, credito, idUsuario) values (0.00 , 200.00, 1);
INSERT INTO contas (saldo, credito, idUsuario) values (50.00 , 200.00, 2);
INSERT INTO contas (saldo, credito, idUsuario) values (30.00 , 200.00, 3);
INSERT INTO contas (saldo, credito, idUsuario) values (20.00 , 200.00, 4);
INSERT INTO contas (saldo, credito, idUsuario) values (10.00 , 200.00, 5);
