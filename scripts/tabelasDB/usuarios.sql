
CREATE TABLE IF NOT EXISTS usuarios (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
cpf VARCHAR(11) NOT NULL UNIQUE,
senha VARCHAR(350) NOT NULL,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id)
);

SELECT * FROM usuarios;

INSERT INTO usuarios (nome, email, cpf, senha) values ("CRYSTYAN SANTOS", "CRYSTYAN@TESTE.COM", "09209209211", "123123");
INSERT INTO usuarios (nome, email, cpf, senha) values ("MARCELLO ALBUQUERQUE", "MARCELO@TESTE.COM", "33355522233", "123123");
INSERT INTO usuarios (nome, email, cpf, senha) values ("MATHEUS VIEIRA", "MATHEUS@TESTE.COM", "99988877711", "123123");
INSERT INTO usuarios (nome, email, cpf, senha) values ("DANIEL PANZARINI", "DANIEL@TESTE.COM", "88899922211", "123123");
INSERT INTO usuarios (nome, email, cpf, senha) values ("RAFAEL AZEVEDO", "RAFAEL@TESTE.COM", "22211133311", "123123");