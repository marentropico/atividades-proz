# Atividade 18 - Quatro Operações Básicas (JavaScript)

Este diretório contém os arquivos referentes à décima oitava atividade, que consiste em uma função em JavaScript que recebe dois números e exibe no console o resultado das quatro operações aritméticas básicas (+, -, * e /) formatadas em template strings.

## Código Desenvolvido

A solução foi implementada no arquivo [index.js](file:///c:/Users/User/Desktop/Atividades%20Proz/%2318/index.js):

```javascript
function operacoesBasicas(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

operacoesBasicas(4, 5);
```

### Saída no Terminal

Ao executar o script via terminal (`node index.js`), a seguinte saída é gerada no console:

```text
4 + 5 = 9
4 - 5 = -1
4 x 5 = 20
4 / 5 = 0.8
```
