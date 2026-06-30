# Atividade 21 - Banco de Dados Relacional e Consultas JOIN (SQL)

Este diretório contém os códigos SQL referentes à vigésima primeira atividade, que demonstra o desenvolvimento de um banco de dados relacional chamado `BIBLIOTECA`, relacionando tabelas via chaves estrangeiras (`FOREIGN KEY`), populando-as e executando consultas por meio de `INNER JOIN` e `LEFT JOIN`.

## Estrutura Desenvolvida

O arquivo principal é o [biblioteca.sql](file:///c:/Users/User/Desktop/Atividades%20Proz/%2321/biblioteca.sql):

### 1. Tabelas e Relacionamento

O banco de dados possui duas tabelas relacionadas:
* **AUTOR** (Tabela principal/pai): Guarda dados cadastrais do autor (`id_autor`, `nome`, `nacionalidade`).
* **LIVRO** (Tabela relacionada/filho): Guarda dados do livro (`id_livro`, `titulo`, `ano_publicacao`, `id_autor`). A coluna `id_autor` é uma **Chave Estrangeira** (`FOREIGN KEY`) que aponta diretamente para o autor na tabela `AUTOR`.

### 2. Consultas JOIN Implementadas

Foram elaboradas duas consultas para demonstrar a junção de tabelas:

* **INNER JOIN**: Retorna apenas os registros onde há correspondência em ambas as tabelas (ou seja, livros cadastrados e seus respectivos autores).
* **LEFT JOIN**: Retorna todos os registros da tabela à esquerda (`AUTOR`), mesmo que não haja correspondência de livros cadastrados na tabela à direita (ideal para identificar autores cadastrados que ainda não possuem obras em acervo, como no exemplo inserido de *J.R.R. Tolkien*).
