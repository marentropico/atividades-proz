-- 1. Criação do Banco de Dados
CREATE DATABASE LOJA;
USE LOJA;

-- 2. Criação da Tabela CLIENTES
CREATE TABLE CLIENTES (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_cadastro DATE NOT NULL
);

-- 3. Criação da Stored FUNCTION (Função Armazenada)
-- Objetivo: Somar e retornar o total de clientes cadastrados em um determinado dia
DELIMITER //
CREATE FUNCTION fn_total_clientes_por_dia(data_alvo DATE)
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE total_cadastros INT;
    
    SELECT COUNT(*) INTO total_cadastros
    FROM CLIENTES
    WHERE data_cadastro = data_alvo;
    
    RETURN total_cadastros;
END;
//
DELIMITER ;

-- 4. Inserção de Dados para Teste
INSERT INTO CLIENTES (nome, email, data_cadastro) VALUES 
('Ana Souza', 'ana@email.com', '2026-06-29'),
('Bruno Lima', 'bruno@email.com', '2026-06-29'),
('Carlos Silva', 'carlos@email.com', '2026-06-30'),
('Daniela Oliveira', 'daniela@email.com', '2026-06-30'),
('Eduardo Costa', 'eduardo@email.com', '2026-06-30');

-- 5. Execução e Teste da Função
-- Teste 1: Total de cadastros em 29/06 (Espera-se: 2)
SELECT fn_total_clientes_por_dia('2026-06-29') AS "Cadastros em 29/06/2026";

-- Teste 2: Total de cadastros em 30/06 (Espera-se: 3)
SELECT fn_total_clientes_por_dia('2026-06-30') AS "Cadastros em 30/06/2026";
