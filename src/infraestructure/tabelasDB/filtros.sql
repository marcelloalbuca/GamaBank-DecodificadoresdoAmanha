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

-- HISTÓRICO DE SAQUES DO USUÁRIO  --
-- HISTÓRICO DE DEPOSITOS DO USUÁRIO --
-- HISTÓRICO DE TRANSFERÊNCIAS DO USUÁRIO--
-- TRANSAÇÕES POR DATA ORDEM DESC (TRANSAÇÕES: COMPRAS(DÉBITO, CRÉDITO), SAQUES, TRANFERÊNCIAS, DEPOSITOS)--
-- FILTRO DE PESQUISA DE TRANSAÇÕES POR DATA(INICIO E FIM) --
-- O USUARIO QUER VERIFICAR SUAS FATURAS EM ABERTO DATA INICIO E DATA FIM
-- LISTAR TODAS AS TRANSAÇÕES DE COMPRAS DE FORMA DECRECENTE DESC DATA INICIO E DATA FIM








