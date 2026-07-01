/* =============================================
   Pensamento Computacional: Fluxograma de Projeto
   Lógica da Simulação de Processo
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const btnRun = document.getElementById('btn-run');
    const nodes = document.querySelectorAll('.flow-node');
    const arrows = document.querySelectorAll('.flow-arrow');

    // Sequência ordenada de elementos a serem acesos na simulação
    const simulationSequence = [
        { type: 'node', id: 'step-inicio' },
        { type: 'arrow', index: 0 },
        { type: 'node', id: 'step-criar' },
        { type: 'arrow', index: 1 },
        { type: 'node', id: 'step-revisar' },
        { type: 'arrow', index: 2 },
        { type: 'node', id: 'step-aprovado' },
        { type: 'arrow', index: 3 },
        { type: 'node', id: 'step-lancar' },
        { type: 'arrow', index: 4 },
        { type: 'node', id: 'step-acompanhar' },
        { type: 'arrow', index: 5 },
        { type: 'node', id: 'step-engajamento' },
        { type: 'arrow', index: 6 },
        { type: 'node', id: 'step-paralelo' },
        { type: 'node', id: 'step-fim' }
    ];

    let currentTimeout = null;

    btnRun.addEventListener('click', () => {
        // Limpar qualquer simulação em andamento
        clearAllTimeouts();
        resetHighlighting();

        // Desabilita o botão temporariamente
        btnRun.disabled = true;
        btnRun.innerText = "Simulando fluxo...";

        // Roda a sequência passo a passo
        runStep(0);
    });

    function runStep(index) {
        if (index >= simulationSequence.length) {
            btnRun.disabled = false;
            btnRun.innerText = "Executar Simulação ⚡";
            return;
        }

        const step = simulationSequence[index];

        if (step.type === 'node') {
            const el = document.getElementById(step.id);
            if (el) el.classList.add('active');
        } else if (step.type === 'arrow') {
            const el = arrows[step.index];
            if (el) el.classList.add('active');
        }

        // Delay de 800ms por etapa para visualização agradável
        currentTimeout = setTimeout(() => {
            runStep(index + 1);
        }, 800);
    }

    function resetHighlighting() {
        nodes.forEach(node => node.classList.remove('active'));
        arrows.forEach(arrow => arrow.classList.remove('active'));
    }

    function clearAllTimeouts() {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }
    }

});
