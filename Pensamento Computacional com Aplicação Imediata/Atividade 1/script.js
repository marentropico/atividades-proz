/* =============================================
   Pensamento Computacional: Combate ao Desperdício
   Lógica e Interatividade do Painel
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.pillar-card');
    const badge = document.getElementById('panel-badge');
    const title = document.getElementById('panel-title');
    const body = document.getElementById('panel-body');
    const panel = document.getElementById('details-panel');

    // Mapeamento de cores dinâmicas dos pilares
    const colorMap = {
        'decomposicao': '#2ecc71',
        'padroes': '#3498db',
        'abstracao': '#9b59b6',
        'algoritmos': '#e67e22'
    };

    // Função para carregar os dados de um pilar
    function loadPillar(pillarId) {
        const data = pillarData[pillarId];
        if (!data) return;

        // Oculta com efeito de transição rápido
        body.style.opacity = '0';
        title.style.opacity = '0';

        setTimeout(() => {
            badge.innerText = data.badge;
            title.innerText = data.title;
            body.innerHTML = data.content;

            // Determinar cor do tema
            const themeColor = colorMap[pillarId] || '#8257e5';

            // Aplica as variáveis de cores ao painel
            panel.style.setProperty('--theme-color', themeColor);
            panel.style.borderColor = themeColor;
            panel.style.boxShadow = `0 10px 40px ${themeColor}12`;

            body.style.opacity = '1';
            title.style.opacity = '1';
        }, 150);
    }

    // Adiciona listener de clique para todos os cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pillarId = card.dataset.pillar;

            // Se já está ativo, não faz nada
            if (card.classList.contains('active')) return;

            // Remove active de todos
            cards.forEach(c => c.classList.remove('active'));

            // Adiciona active ao clicado
            card.classList.add('active');

            // Carrega dados correspondentes
            loadPillar(pillarId);

            // Scroll suave para o painel se for celular
            if (window.innerWidth <= 800) {
                panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Inicia carregando o primeiro pilar (Decomposição)
    loadPillar('decomposicao');

});
