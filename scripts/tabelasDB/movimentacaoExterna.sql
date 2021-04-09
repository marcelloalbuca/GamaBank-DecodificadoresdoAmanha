
CREATE TABLE IF NOT EXISTS movimentacoesExterna  (
id INT UNSIGNED AUTO_INCREMENT,
cod_banco INT,
nome_banco VARCHAR(255),
cpf_depositante VARCHAR(14) NOT NULL,
email_usuario VARCHAR(150) NOT NULL,
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

select * from movimentacoesExterna;

INSERT INTO movimentacoesExterna (cod_banco, nome_banco, cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (01, "CAIXA ECONOMICA", 44455566611, "MARCELLO@TESTE.COM", 200, 1, 1, 2);
                                
INSERT INTO movimentacoesExterna (cod_banco, nome_banco, cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (02, "SANTANDER", 44455566611, "MARCELLO@TESTE.COM", 200, 1, 1, 2);

INSERT INTO movimentacoesExterna (cod_banco, nome_banco, cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (03, "BRADESCO", 44455566611, "MARCELLO@TESTE.COM", 200, 1, 1, 2);
                                
INSERT INTO movimentacoesExterna (cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (55566677711, "DANIEL@TESTE.COM", 200, 4, 4, 3);

INSERT INTO movimentacoesExterna (cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (44455566611, "RAFAEL@TESTE.COM", 200, 5, 5, 3);

INSERT INTO movimentacoesExterna (cpf_depositante, email_usuario, valor, idConta, idUsuario, idTransacao) 
values (44455566611, "MATHEUS@TESTE.COM", 200, 3, 3, 3);