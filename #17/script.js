// 1. Captura dos elementos do DOM
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// 2. Adicionando conteúdo textual simples usando innerText
titulo.innerText = 'Aprendendo sobre a Manipulação do DOM';
link.innerText = 'Acesse a Proz Educação';

// 3. Adicionando 3 itens simples na lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Compreender a estrutura do HTML (DOM)</li>
    <li>Aprender a capturar elementos usando seletores JS</li>
    <li>Manipular conteúdos usando propriedades nativas</li>
`;

// 4. Adicionando 3 itens com links externos na lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://github.com" target="_blank">GitHub</a> - Compartilhe seus códigos</li>
    <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a> - Aprenda desenvolvimento web</li>
    <li><a href="https://stackoverflow.com" target="_blank">Stack Overflow</a> - Tire dúvidas com a comunidade</li>
`;
