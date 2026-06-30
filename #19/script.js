// Capturando o elemento body da página para a inserção dos novos elementos
const body = document.querySelector('body');

/* ----------------------------------------------------
   MÉTODO COMPLEXO: Criando o Título da Loja
   ---------------------------------------------------- */
// 1. Criação do elemento no DOM
const titulo = document.createElement('h1');

// 2. Definição das propriedades do elemento
titulo.id = 'titulo';
titulo.innerText = 'Loja de Informática ProzTech';

// 3. Inserção do elemento no corpo do documento
body.appendChild(titulo);


/* ----------------------------------------------------
   MÉTODO MISTO/COMPLEXO: Criando o Container do Produto
   ---------------------------------------------------- */
// 1. Criação do container principal do produto (div)
const produtoContainer = document.createElement('div');
produtoContainer.id = 'produto-container';

/* ----------------------------------------------------
   MÉTODO SIMPLES: Inserindo os Filhos do Produto via innerHTML
   ---------------------------------------------------- */
// Inserção direta de tags de imagem, nome, descrição e preço como strings
produtoContainer.innerHTML = `
    <h2 class="produto-nome">Notebook Ultra-Gamer X1</h2>
    <img class="produto-imagem" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80" alt="Notebook Gamer Moderno" style="max-width: 400px; border-radius: 8px;">
    <p class="produto-descricao">Equipado com processador Intel i9 de última geração, 32GB RAM, 1TB SSD e placa de vídeo RTX 4080. Desenvolvido para máxima performance em jogos e edição profissional.</p>
    <p class="produto-preco" style="font-size: 1.2rem; color: #2e7d32;">Preço: <strong>R$ 8.999,90</strong></p>
`;

// 2. Inserção do container do produto completo no body da página
body.appendChild(produtoContainer);
