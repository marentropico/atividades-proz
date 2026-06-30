-- 1. Criação do Banco de Dados
CREATE DATABASE ESCOLA;

-- 2. Seleção do Banco de Dados para uso
USE ESCOLA;

-- 3. Criação da tabela ALUNO com seus atributos e chave primária
CREATE TABLE ALUNO (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    CONSTRAINT pk_aluno PRIMARY KEY (id)
);
