# Atividade 20 - Criação de Banco de Dados e Tabela (SQL)

Este diretório contém os códigos SQL referentes à vigésima atividade, que consiste na criação de um banco de dados denominado `ESCOLA` e de uma tabela de nome `ALUNO` contendo atributos específicos e chave primária.

## Código SQL Desenvolvido

Os comandos SQL foram salvos no arquivo [escola.sql](file:///c:/Users/User/Desktop/Atividades%20Proz/%2320/escola.sql):

```sql
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
```

### Detalhamento das Propriedades da Tabela

- **id**: Chave primária (`PRIMARY KEY`) do tipo `INT` com autoincremento para identificação única de cada estudante.
- **nome**: Nome do aluno, do tipo `VARCHAR(100)` (limite de 100 caracteres) e obrigatório (`NOT NULL`).
- **email**: E-mail do aluno, do tipo `VARCHAR(100)` e obrigatório.
- **endereco**: Endereço residencial do aluno, do tipo `VARCHAR(255)` (limite de 255 caracteres) e obrigatório.
