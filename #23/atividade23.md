# Atividade 23 - Relatório Diário com Stored Procedures (SQL)

Este diretório contém os códigos SQL referentes à vigésima terceira atividade, que consiste na criação de um banco de dados chamado `EMPRESA_VENDAS`, na modelagem de tabelas e no desenvolvimento de uma **Stored Procedure** (procedimento armazenado) para agilizar o levantamento diário da quantidade de produtos comprados por dia.

## Código Desenvolvido

Os comandos SQL foram salvos no arquivo [compras.sql](file:///c:/Users/User/Desktop/Atividades%20Proz/%2323/compras.sql):

### 1. Modelagem das Tabelas
* **PRODUTOS**: Guarda as informações de catálogo dos produtos (`id_produto`, `nome`, `preco`).
* **COMPRAS**: Guarda as vendas diárias (`id_compra`, `id_produto`, `quantidade`, `data_compra`), com chave estrangeira relacionando-a com `PRODUTOS`.

### 2. Funcionamento do Stored Procedure (`sp_relatorio_compras_diarias`)
Foi criada uma procedure para consolidar as informações de compras agrupando por data e por produto:

```sql
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
```

* **Função**: Consolida os dados e aplica a função de agregação `SUM(quantidade)` agrupando por data e produto.
* **Vantagem**: Reduz a complexidade da aplicação cliente, que precisa apenas chamar `CALL sp_relatorio_compras_diarias();` para obter o relatório completo consolidado, poupando a escrita repetida de junções complexas.

### 3. Exemplo Prático da Saída Gerada

Ao chamar o procedimento (`CALL sp_relatorio_compras_diarias()`) com os dados simulados, o banco retorna:

| Data da Compra | Nome do Produto | Quantidade Total Comprada |
| :--- | :--- | :--- |
| 2026-06-30 | Mouse Gamer | 20 |
| 2026-06-30 | Headset Sem Fio | 8 |
| 2026-06-29 | Teclado Mecânico | 15 |
| 2026-06-29 | Mouse Gamer | 15 |
