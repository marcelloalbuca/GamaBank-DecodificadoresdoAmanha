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

INSERT INTO contas (idUsuario) values (1);
INSERT INTO contas (idUsuario) values (2);
INSERT INTO contas (idUsuario) values (3);
INSERT INTO contas (idUsuario) values (4);
INSERT INTO contas (idUsuario) values (5);