# Atividade 8 - Pontos Turísticos da Europa (HTML & CSS)

Este diretório contém os arquivos referentes à oitava atividade, que consiste no desenvolvimento de uma página web focada no conteúdo e na estruturação visual de destinos turísticos europeus, utilizando HTML5 e CSS3 básicos.

## Conteúdo Desenvolvido

1. **Estrutura Semântica da Página**:
   - Cabeçalho principal (`<header>`) estilizado com fundo escurecido sob imagem e título destacado.
   - Corpo principal (`<main>`) contendo uma seção de destinos e uma grade de cartões (`<article>`).
   - Rodapé (`<footer>`) indicando o desenvolvimento do exercício e link para o perfil do autor.

2. **Estilização com CSS Externo**:
   - Todo o código de estilização está no arquivo externo [style.css](file:///c:/Users/User/Desktop/Atividades%20Proz/%238/style.css).
   - **Estrutura DRY**: Refatorado para utilizar variáveis CSS (`:root`) para controle centralizado de cores e tipografia.
   - Definição de fontes modernas do Google Fonts (_Montserrat_ e _Open Sans_).
   - Uso de **Grid Layout** para a distribuição dos cartões turísticos.
   - Grid configurado para exibir exatamente **2 colunas de cards por linha** (`grid-template-columns: repeat(2, 1fr)`).
   - Efeitos visuais suaves com transições (`transition`), sombras (`box-shadow`), arredondamento de bordas (`border-radius`) e zoom de imagem ao passar o mouse (`transform: scale(1.1)`).

3. **Destinos Turísticos Apresentados**:
   - **Paris, França**: Detalhes sobre a Cidade Luz e link para guia turístico.
   - **Roma, Itália**: Visão geral sobre o Coliseu e link informativo sobre turismo local.
   - **Londres, Reino Unido**: Informações sobre a metrópole do Big Ben e link para serviço de transporte local.
   - **Barcelona, Espanha**: Foco na arquitetura modernista de Gaudí e link do portal oficial de turismo.
