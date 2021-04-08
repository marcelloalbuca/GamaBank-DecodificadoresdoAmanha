-- USUARIOS, SALDO E CREDITOS DE SUAS RESPECTIVAS CONTAS --
select u.id, u.nome, c.saldo, c.credito from usuarios u
inner join contas c ON u.id = c.id

-- USUARIO, SALDO E CREDITOS DE SUA RESPECTIVA CONTA --
select u.id, u.nome, c.saldo, c.credito from usuarios u
inner join contas c ON u.id = c.id WHERE u.id = 1

-- USUÁRIOS QUE REALIZARAM SAQUES --
select u.id, u.nome, t.nome from usuarios u
inner join contas c ON u.id = c.idUsuario
inner join movimentacoesInterna m on m.idConta = c.idUsuario AND m.idTransacao = 1 
inner join transacoes t where t.nome = "SAQUE"

-- USUÁRIOS QUE REALIZARAM TRANSFERÊNCIAS --
select u.id, u.nome, t.nome from usuarios u
inner join contas c ON u.id = c.idUsuario
inner join movimentacoesInterna m on m.idConta = c.idUsuario AND m.idTransacao = 2 
inner join transacoes t where t.nome = "TRANSFERENCIA"

-- USUÁRIOS QUE REALIZARAM DEPOSITOS --
select u.id, u.nome, t.nome from usuarios u
inner join contas c ON u.id = c.idUsuario
inner join movimentacoesInterna m on m.idConta = c.idUsuario AND m.idTransacao = 3
inner join transacoes t where t.nome = "DEPOSITO" 

<<<<<<< HEAD
-- SET SQL_SAFE_UPDATES = 0;

-- HISTÓRICO DE SAQUES DO USUÁRIO - Movimentação Interna --
select u.id, u.nome, t.nome, mi.valor, mi.data_criacao, mi.idConta from usuarios u
inner join movimentacoesInterna mi on mi.idUsuario = u.id 
inner join transacoes t on mi.idTransacao = t.id
WHERE u.id = 2 AND mi.idTransacao=2;

-- HISTÓRICO DE SAQUES DO USUÁRIO - Movimentação Externa --
select u.id, u.nome, t.nome, me.valor, me.data_criacao, me.idConta,me.cod_banco,me.cpf_depositante, me.email_usuario from usuarios u
inner join movimentacoesExterna me on me.idUsuario = u.id 
inner join transacoes t on me.idTransacao = t.id
WHERE u.id = 1 AND me.idTransacao=2;


-- HISTÓRICO DE DEPOSITOS DO USUÁRIO - Movimentação Interna --
select u.id, u.nome, t.nome, mi.valor, mi.data_criacao, mi.idConta from usuarios u
inner join movimentacoesInterna mi on mi.idUsuario = u.id 
inner join transacoes t on mi.idTransacao = t.id
WHERE u.id = 2 AND mi.idTransacao=3;

-- HISTÓRICO DE DEPOSITOS DO USUÁRIO - Movimentação Externa --
select u.id, u.nome, t.nome, me.valor, me.data_criacao, me.idConta,me.cod_banco,me.cpf_depositante, me.email_usuario from usuarios u
inner join movimentacoesExterna me on me.idUsuario = u.id 
inner join transacoes t on me.idTransacao = t.id
WHERE u.id = 2 AND me.idTransacao=3;

-- HISTÓRICO DE TRANSFERÊNCIAS DO USUÁRIO - Movimentação Interna --
select u.id, u.nome, t.nome, mi.valor, mi.data_criacao, mi.idConta from usuarios u
inner join movimentacoesInterna mi on mi.idUsuario = u.id 
inner join transacoes t on mi.idTransacao = t.id
WHERE u.id = 2 AND mi.idTransacao=2;

-- HISTÓRICO DE TRANSFERÊNCIAS DO USUÁRIO - Movimentação Externa --
select u.id, u.nome, t.nome, me.valor, me.data_criacao, me.idConta,me.cod_banco,me.cpf_depositante, me.email_usuario from usuarios u
inner join movimentacoesExterna me on me.idUsuario = u.id 
inner join transacoes t on me.idTransacao = t.id
WHERE u.id = 2 AND me.idTransacao=2;


=======
-- HISTÓRICO DE SAQUES DO USUÁRIO  --
-- HISTÓRICO DE DEPOSITOS DO USUÁRIO --
-- HISTÓRICO DE TRANSFERÊNCIAS DO USUÁRIO--
>>>>>>> 3fbb560c080c5bdfab923eecb5ad3220a976fd4c
-- TRANSAÇÕES POR DATA ORDEM DESC (TRANSAÇÕES: COMPRAS(DÉBITO, CRÉDITO), SAQUES, TRANFERÊNCIAS, DEPOSITOS)--
-- FILTRO DE PESQUISA DE TRANSAÇÕES POR DATA(INICIO E FIM) --
-- O USUARIO QUER VERIFICAR SUAS FATURAS EM ABERTO DATA INICIO E DATA FIM
-- LISTAR TODAS AS TRANSAÇÕES DE COMPRAS DE FORMA DECRECENTE DESC DATA INICIO E DATA FIM








