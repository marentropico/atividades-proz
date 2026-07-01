/* =============================================
   Mapa Mental: Clube da Luta
   Lógica e Interatividade de Exibição de Dados
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const branches = document.querySelectorAll('.node-branch');
    const placeholder = document.querySelector('.panel-placeholder');
    const content = document.getElementById('panel-content');
    const badge = document.getElementById('panel-badge');
    const title = document.getElementById('panel-title');
    const body = document.getElementById('panel-body');
    const panel = document.getElementById('detail-panel');

    // Mapeamento de cores de acordo com a classe do nó
    const colorMap = {
        'branch-pink': '#ff007f',
        'branch-cyan': '#00d4ff',
        'branch-green': '#00ff66',
        'branch-gold': '#ffd700'
    };

    branches.forEach(branch => {
        branch.addEventListener('click', () => {
            const id = branch.id;
            const data = mapData[id];

            if (!data) return;

            // Remove classe active de todos
            branches.forEach(b => b.classList.remove('active'));

            // Adiciona classe active ao clicado
            branch.classList.add('active');

            // Determinar cor do tema
            let themeColor = '#ff007f';
            for (const cls of branch.classList) {
                if (colorMap[cls]) {
                    themeColor = colorMap[cls];
                    break;
                }
            }

            // Oculta placeholder e exibe painel com animação
            placeholder.style.display = 'none';
            content.classList.add('hidden');

            setTimeout(() => {
                badge.innerText = data.badge;
                title.innerText = data.title;
                body.innerHTML = data.content;

                // Aplica cor dinâmica do tema nas variáveis CSS do painel
                panel.style.setProperty('--theme-color', themeColor);
                panel.style.borderColor = themeColor;
                panel.style.boxShadow = `0 10px 40px ${themeColor}15`;

                content.classList.remove('hidden');

                // Scroll suave para o painel se for mobile
                if (window.innerWidth <= 768) {
                    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 150);
        });
    });

});
