-- 1. Criação do Banco de Dados
CREATE DATABASE EMPRESA_VENDAS;
USE EMPRESA_VENDAS;

-- 2. Criação das Tabelas
-- Tabela PRODUTOS
CREATE TABLE PRODUTOS (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- Tabela COMPRAS (registro das compras realizadas por dia)
CREATE TABLE COMPRAS (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    quantidade INT NOT NULL,
    data_compra DATE NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES PRODUTOS(id_produto) ON DELETE CASCADE
);

-- 3. Criação do PROCEDURE (Procedimento Armazenado)
-- Objetivo: Agilizar o levantamento diário da quantidade total de produtos comprados por dia
DELIMITER //
CREATE PROCEDURE sp_relatorio_compras_diarias()
BEGIN
    SELECT 
        c.data_compra AS "Data da Compra",
        p.nome AS "Nome do Produto",
        SUM(c.quantidade) AS "Quantidade Total Comprada"
    FROM COMPRAS c
    INNER JOIN PRODUTOS p ON c.id_produto = p.id_produto
    GROUP BY c.data_compra, p.nome
    ORDER BY c.data_compra DESC, "Quantidade Total Comprada" DESC;
END;
//
DELIMITER ;

-- 4. Inserção de Dados para Teste
-- Inserindo Produtos
INSERT INTO PRODUTOS (nome, preco) VALUES 
('Teclado Mecânico', 250.00),
('Mouse Gamer', 120.00),
('Headset Sem Fio', 350.00);

-- Inserindo Compras em datas variadas
INSERT INTO COMPRAS (id_produto, quantidade, data_compra) VALUES 
(1, 10, '2026-06-29'), -- 10 Teclados em 29/06
(2, 15, '2026-06-29'), -- 15 Mouses em 29/06
(1, 5,  '2026-06-29'), -- +5 Teclados em 29/06 (Total 29/06 deve somar 15)
(3, 8,  '2026-06-30'), -- 8 Headsets em 30/06
(2, 20, '2026-06-30'); -- 20 Mouses em 30/06

-- 5. Execução do Procedure para Gerar o Relatório
CALL sp_relatorio_compras_diarias();
