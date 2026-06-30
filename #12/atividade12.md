# Atividade 12 - Flexbox no CSS (Projeto Marco Zero)

Este diretório contém os arquivos referentes à décima segunda atividade, que consiste no estudo prático de posicionamento e alinhamento utilizando as propriedades do **CSS Flexbox**, com base na prática do jogo *Flexbox Froggy* e sua aplicação no site de turismo de Recife.

## Propriedades Flexbox Aplicadas no Projeto

No arquivo de estilo [style.css](file:///c:/Users/User/Desktop/Atividades%20Proz/%2312/style.css), o Flexbox foi amplamente utilizado para construir o layout moderno e responsivo das páginas. As principais propriedades aplicadas foram:

1. **Alinhamento do Menu de Navegação (`.nav-bar`)**:
   - `display: flex;`: Define o container como flexível.
   - `justify-content: space-between;`: Distribui o logotipo à esquerda e os links de navegação à direita, deixando espaço uniforme entre eles.
   - `align-items: center;`: Centraliza verticalmente o logotipo e os links dentro do menu.

2. **Espaçamento entre os Links de Navegação (`.nav-links`)**:
   - `display: flex;`: Organiza a lista de links (`<li>`) horizontalmente.
   - `gap: 25px;`: Define um espaçamento constante de 25px entre cada link de navegação sem a necessidade de usar margens individuais.

3. **Organização do Conteúdo Interno dos Cards (`.card-info` e `.tourist-content`)**:
   - `display: flex;` e `flex-direction: column;`: Permite o empilhamento vertical do título, descrição e links adicionais, mantendo uma distribuição flexível e limpa.

4. **Responsividade no Mobile (`@media (max-width: 768px)`)**:
   - O menu de navegação `.nav-bar` altera sua propriedade de alinhamento para `flex-direction: column;` e `gap: 15px;`, organizando os elementos verticalmente no celular para melhor ergonomia.
