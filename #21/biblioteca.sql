-- 1. Criação da Base de Dados
CREATE DATABASE BIBLIOTECA;
USE BIBLIOTECA;

-- 2. Criação das Tabelas Relacionadas
-- Tabela AUTOR (Tabela Pai)
CREATE TABLE AUTOR (
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50)
);

-- Tabela LIVRO (Tabela Filho - Relacionada por Chave Estrangeira)
CREATE TABLE LIVRO (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    ano_publicacao INT,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES AUTOR(id_autor) ON DELETE CASCADE
);

-- 3. Inserção de Dados para Teste
-- Inserindo Autores
INSERT INTO AUTOR (nome, nacionalidade) VALUES 
('Machado de Assis', 'Brasileira'),
('George Orwell', 'Britânica'),
('Gabriel García Márquez', 'Colombiana'),
('Clarice Lispector', 'Brasileira'),
('J.R.R. Tolkien', 'Britânica'); -- Autor sem livros vinculados no momento

-- Inserindo Livros
INSERT INTO LIVRO (titulo, ano_publicacao, id_autor) VALUES 
('Dom Casmurro', 1899, 1),
('Memórias Póstumas de Brás Cubas', 1881, 1),
('1984', 1949, 2),
('A Revolução dos Bichos', 1945, 2),
('Cem Anos de Solidão', 1967, 3),
('A Hora da Estrela', 1977, 4);

-- 4. Consultas Utilizando Comandos JOIN
-- A. INNER JOIN: Seleciona apenas os livros que possuem autores cadastrados
SELECT 
    LIVRO.titulo AS "Título do Livro", 
    LIVRO.ano_publicacao AS "Ano de Publicação", 
    AUTOR.nome AS "Autor", 
    AUTOR.nacionalidade AS "Nacionalidade"
FROM LIVRO
INNER JOIN AUTOR ON LIVRO.id_autor = AUTOR.id_autor;

-- B. LEFT JOIN: Seleciona todos os autores, mesmo aqueles que não têm nenhum livro cadastrado (ex: J.R.R. Tolkien)
SELECT 
    AUTOR.nome AS "Autor", 
    AUTOR.nacionalidade AS "Nacionalidade",
    LIVRO.titulo AS "Livro Cadastrado"
FROM AUTOR
LEFT JOIN LIVRO ON AUTOR.id_autor = LIVRO.id_autor;
