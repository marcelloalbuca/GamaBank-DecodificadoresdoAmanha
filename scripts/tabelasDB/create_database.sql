CREATE DATABASE IF NOT EXISTS banco;
USE banco;

CREATE TABLE IF NOT EXISTS usuarios (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
cpf VARCHAR(11) NOT NULL UNIQUE,
senha VARCHAR(350) NOT NULL,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS contas (
id INT NOT NULL  AUTO_INCREMENT,
saldo double not null,
credito double not null,
idUsuario INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);


CREATE TABLE IF NOT EXISTS transacoes (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(250) NOT NULL UNIQUE,
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS compras (
id INT NOT NULL AUTO_INCREMENT,
valor double not null,
parcela boolean not null,
numeros_parcela int NOT NULL,
idConta INT,
idUsuario INT,
idTransacao INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idConta) REFERENCES contas(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idTransacao) REFERENCES transacoes(id)
);

CREATE TABLE IF NOT EXISTS movimentacoesInterna  (
id INT NOT NULL AUTO_INCREMENT,
valor double not null,
idConta INT,
idUsuario INT,
idTransacao INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idConta) REFERENCES contas(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idTransacao) REFERENCES transacoes(id)
);

CREATE TABLE IF NOT EXISTS movimentacoesExterna  (
id INT NOT NULL AUTO_INCREMENT,
cod_banco INT,
nome_banco varchar(255),
cpf_depositante VARCHAR(14) NOT NULL,
email_usuario VARCHAR(150) NOT NULL,
valor double not null,
idConta INT,
idUsuario INT,
idTransacao INT,
data_criacao TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id),
FOREIGN KEY (idConta) REFERENCES contas(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idTransacao) REFERENCES transacoes(id)
);
