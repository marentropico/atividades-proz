# Atividade 19 - Criação de Elementos no DOM (JavaScript)

Este diretório contém os arquivos referentes à décima nona atividade, que consiste na criação e inserção dinâmica de elementos HTML (título e produto com imagem, descrição e preço) no DOM a partir de JavaScript, utilizando o método simples (`innerHTML`) e o método complexo (`document.createElement` e `appendChild`).

## Métodos Utilizados

1. **Método Complexo**:
   - Criação do título `<h1>` do site.
   - Criação da `<div>` container do produto.
   - Passos:
     1. Criação do nó: `document.createElement()`.
     2. Configuração de atributos/propriedades: `.id` e `.innerText`.
     3. Anexação ao DOM: `body.appendChild()`.

2. **Método Simples**:
   - Inserção dos dados detalhados do produto (Nome, Imagem, Descrição e Preço) diretamente no container utilizando a propriedade `.innerHTML` associada a uma template string.
