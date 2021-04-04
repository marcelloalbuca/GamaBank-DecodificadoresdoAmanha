CREATE TABLE IF NOT EXISTS transacoes (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
nome VARCHAR(250) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO transacoes (nome) values ("SAQUE");
INSERT INTO transacoes (nome) values ("TRANSFERENCIA");
INSERT INTO transacoes (nome) values ("DEPOSITO");
INSERT INTO transacoes (nome) values ("CREDITO");
INSERT INTO transacoes (nome) values ("DEBITO");

select * from transacoes;