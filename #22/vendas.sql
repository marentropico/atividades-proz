-- 1. Criação do Banco de Dados
CREATE DATABASE VENDAS;
USE VENDAS;

-- 2. Criação das Tabelas
-- Tabela PRODUTO (Estoque)
CREATE TABLE PRODUTO (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0,
    preco DECIMAL(10, 2) NOT NULL
);

-- Tabela PEDIDO (Vendas)
CREATE TABLE PEDIDO (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    quantidade_vendida INT NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id_produto) ON DELETE CASCADE
);

-- 3. Criação do TRIGGER (Gatilho)
-- Objetivo: Reduzir automaticamente a quantidade_estoque de um PRODUTO após a inserção de um novo PEDIDO
DELIMITER //
CREATE TRIGGER trg_atualiza_estoque
AFTER INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    UPDATE PRODUTO
    SET quantidade_estoque = quantidade_estoque - NEW.quantidade_vendida
    WHERE id_produto = NEW.id_produto;
END;
//
DELIMITER ;

-- 4. Inserção de Dados Iniciais (Simulação de Estoque)
INSERT INTO PRODUTO (nome, quantidade_estoque, preco) VALUES 
('Notebook Dell', 15, 4500.00),
('Smartphone Samsung S23', 30, 3800.00),
('Monitor LG 29"', 10, 1200.00);

-- Verificando o estoque inicial
SELECT * FROM PRODUTO;

-- 5. Testando o Trigger (Simulação de Venda)
-- Realizando um pedido de 3 Notebooks e 5 Smartphones
INSERT INTO PEDIDO (id_produto, quantidade_vendida) VALUES 
(1, 3), -- Pedido de 3 Notebooks (Estoque deve ir de 15 para 12)
(2, 5); -- Pedido de 5 Smartphones (Estoque deve ir de 30 para 25)

-- Verificando o estoque após a execução automática do Trigger
SELECT * FROM PRODUTO;
