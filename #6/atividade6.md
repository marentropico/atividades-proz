# Atividade 6 - Calculadora de Idade com Tratamento de Erros em Python

Este diretório contém os arquivos referentes à sexta atividade, que consiste em um programa interativo para calcular a idade de uma pessoa no ano de 2022, utilizando validações rigorosas de dados por meio de exceções customizadas.

## Exercício Desenvolvido

1. **Calculadora de Idade**: O programa solicita o nome completo do usuário e, repetidamente, o seu ano de nascimento para calcular e exibir a idade correspondente no ano de 2022.
2. **Tratamento de Exceções Personalizadas**: O loop de entrada de dados valida a inserção do ano com regras específicas e lança erros customizados (`raise Exception`) tratados no bloco `except Exception`:
   - **Campo Vazio**: Identifica se o usuário pressionou Enter sem digitar nada.
   - **Caracteres Não Numéricos**: Verifica através de `isdigit()` se o valor digitado contém letras ou caracteres especiais, exigindo apenas números inteiros.
   - **Intervalo de Anos Válidos**: Garante que o ano informado esteja entre `1922` e `2021`.
3. **Opção de Encerramento**: Permite que o usuário saia do loop e finalize a execução do programa a qualquer momento digitando `0` no campo do ano de nascimento.
