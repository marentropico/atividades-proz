# Atividade 22 - Banco de Dados com Triggers (SQL)

Este diretório contém os códigos SQL referentes à vigésima segunda atividade, que consiste na criação de um banco de dados chamado `VENDAS`, modelagem de tabelas e na implementação de um **Trigger** (gatilho) associado ao comando `INSERT` para automatizar o controle de estoque de produtos.

## Código Desenvolvido

Os comandos SQL foram salvos no arquivo [vendas.sql](file:///c:/Users/User/Desktop/Atividades%20Proz/%2322/vendas.sql):

### 1. Tabelas do Banco de Dados
* **PRODUTO**: Armazena as informações dos produtos disponíveis no estoque (`id_produto`, `nome`, `quantidade_estoque`, `preco`).
* **PEDIDO**: Armazena as vendas efetuadas (`id_pedido`, `id_produto`, `quantidade_vendida`, `data_pedido`), tendo uma chave estrangeira apontando para a tabela `PRODUTO`.

### 2. Funcionamento do Trigger (`trg_atualiza_estoque`)
Foi criado um trigger ativado `AFTER INSERT` na tabela `PEDIDO`. A sua estrutura lógica funciona da seguinte forma:

```sql
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
```

* **Gatilho**: Sempre que uma linha for inserida na tabela `PEDIDO`, o gatilho executa uma instrução de `UPDATE` na tabela `PRODUTO`.
* **Ação**: Reduz a quantidade no estoque (`quantidade_estoque`) subtraindo o valor que foi comprado (`NEW.quantidade_vendida`) para o ID do produto correspondente (`NEW.id_produto`).

### 3. Simulação Prática do Teste

1. **Estoque Inicial**:
   * Notebook Dell: **15 unidades** no estoque.
   * Smartphone Samsung S23: **30 unidades** no estoque.
2. **Execução de Venda**:
   * É inserido um pedido de **3 Notebooks** e outro de **5 Smartphones** na tabela `PEDIDO`.
3. **Resultado Pós-Gatilho (Estoque Atualizado)**:
   * Notebook Dell: **12 unidades** restantes.
   * Smartphone Samsung S23: **25 unidades** restantes.
