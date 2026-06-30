# Atividade 24 - Contagem de Cadastros Diários com Stored Functions (SQL)

Este diretório contém os códigos SQL referentes à vigésima quarta atividade, que consiste na criação de um banco de dados chamado `LOJA`, modelagem de tabelas e no desenvolvimento de uma **Stored Function** (função armazenada) para calcular a quantidade total de clientes cadastrados na loja durante um determinado dia.

## Código Desenvolvido

Os comandos SQL foram salvos no arquivo [clientes.sql](file:///c:/Users/User/Desktop/Atividades%20Proz/%2324/clientes.sql):

### 1. Modelagem da Tabela
* **CLIENTES**: Armazena as informações dos clientes, contendo o identificador único (`id_cliente`), nome, e-mail e a respectiva data em que o cadastro foi realizado (`data_cadastro`).

### 2. Funcionamento do Stored Function (`fn_total_clientes_por_dia`)
Ao contrário de uma Procedure que executa ações e retorna conjuntos de registros, a Function é projetada para realizar cálculos e retornar um valor escalar (neste caso, um número inteiro):

```sql
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
```

* **Parâmetro**: Recebe uma data alvo (`data_alvo` do tipo `DATE`).
* **Lógica**: Declara uma variável temporária, conta a quantidade de linhas cuja data de cadastro é igual à data alvo e armazena o resultado nesta variável, retornando-a ao final.
* **Privilégio**: Declarado com a cláusula `READS SQL DATA` para permitir a execução de consultas de leitura no banco.

### 3. Exemplo Prático de Execução

Ao realizar a consulta de teste:

```sql
SELECT fn_total_clientes_por_dia('2026-06-30') AS "Cadastros em 30/06/2026";
```

O banco processa a contagem e exibe o valor retornado pela função:

| Cadastros em 30/06/2026 |
| :--- |
| **3** |
