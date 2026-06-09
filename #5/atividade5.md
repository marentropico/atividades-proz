# Atividade 5 - Calculadora Interativa com Menu em Python

Este diretório contém os arquivos referentes à quinta atividade, que expande a calculadora básica para rodar em um menu interativo contínuo com tratamentos robustos de erro.

## Exercício Desenvolvido

1. **Menu de Opções Interativo**: O programa roda em um loop contínuo (`while True`), permitindo que o usuário realize múltiplos cálculos até optar por encerrar o programa digitando `0`.
2. **Tratamento de Exceções e Validação**:
   - Valida se a opção de operação digitada está dentro do intervalo correto (0 a 4). Caso contrário, exibe um alerta e solicita uma nova opção.
   - Utiliza tratamento de erros (`try-except ValueError`) para capturar entradas inválidas que não sejam numéricas, evitando que o script aborte abruptamente.
   - Permite a inserção de números decimais contendo vírgula, substituindo-a por ponto internamente antes do processamento.
3. **Exibição Personalizada**: Apresenta no resultado final o nome da operação realizada ("Soma", "Subtração", "Multiplicação" ou "Divisão") e formata a saída para remover casas decimais nulas ou aplicar a vírgula para valores flutuantes.
