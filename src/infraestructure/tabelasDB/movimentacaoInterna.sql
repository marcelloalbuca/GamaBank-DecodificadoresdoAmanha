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
