# Atividade 11 - Pontos Turísticos com Estilização Avançada (CSS Completo)

Este diretório contém os arquivos referentes à décima primeira atividade, que conclui a evolução das páginas sobre os pontos turísticos do Recife Antigo, aplicando a estilização completa e responsiva a partir de um arquivo CSS compartilhado e desacoplado.

## Conteúdo Desenvolvido

1. **Multipáginas e Estilo Unificado**:
   - A página do Marco Zero ([index.html](file:///c:/Users/User/Desktop/Atividades%20Proz/%2311/index.html)) e a página de outros locais ([outros-pontos.html](file:///c:/Users/User/Desktop/Atividades%20Proz/%2311/outros-pontos.html)) estão completamente estilizadas.
   - Ambas compartilham a mesma folha de estilo externa ([style.css](file:///c:/Users/User/Desktop/Atividades%20Proz/%2311/style.css)), mantendo a consistência visual do projeto (reaproveitamento de cores, tipografia, estrutura de navegação e rodapé).

2. **Princípio DRY Aplicado (style.css)**:
   - Definição de variáveis customizadas em `:root` para cores temáticas (inspiradas no Recife), fontes e efeitos (sombras, raios de borda e velocidade de transição).
   - Isso centraliza a manutenção estética do site em um só lugar.

3. **Elementos Visuais Estilizados**:
   - **Cabeçalho (Hero Section)**: Imagem do Marco Zero de fundo com gradiente escurecido para contraste, menu de navegação absoluto.
   - **Grade de Cards**: Distribuição de 2 cartões por linha (`grid-template-columns: repeat(2, 1fr)`) com efeitos de aumento de escala na imagem e elevação de sombra no hover.
   - **Galeria de Imagens de Outros Pontos**: Imagens da Rua do Bom Jesus e da Torre Malakoff com cantos arredondados, sombras e efeito de zoom de escala suave no hover.
   - **Tags Semânticas Inline**: Estilizadas para que se destaquem de forma harmônica (ex: `<strong>` em laranja solar, `<em>` em azul oceano, `<mark>` com fundo amarelo ouro, `<time>` com um box cinza suave).

4. **Design Responsivo**:
   - Ajustes com `@media (max-width: 768px)` que adaptam o menu de navegação para formato coluna, reordenam o grid para 1 cartão por linha e reduzem proporcionalmente o tamanho das fontes e das imagens para telas de smartphones e tablets.
