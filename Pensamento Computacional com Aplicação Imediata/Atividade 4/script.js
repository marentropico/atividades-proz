/* =============================================
   Algoritmo de Priorização Diária (Office-Flow)
   Lógica de Simulação de Cenários Condicionais
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.scenario-btn');
    const explanation = document.getElementById('explanation-content');
    const nodes = document.querySelectorAll('.step-node');
    const connectors = document.querySelectorAll('.flow-connector');

    // Mapeamento dos cenários: Explicações e IDs de elementos ativos no fluxograma
    const scenarioData = {
        "normal": {
            activeElements: ["step-triagem", "cond-urgente", "step-fim"],
            activeConnectors: [0, 1, 2, 3, 4, 5, 6, 7], // all path down simplified
            explanation: `
                <p><strong>Fluxo Padrão (Sem Imprevistos)</strong>:</p>
                <p>O dia começa com o <strong>Passo 1 (Triagem)</strong>. O espaço de trabalho e as tarefas pendentes são catalogados nas seguintes categorias:</p>
                <ul>
                    <li><strong>Urgentes</strong> (prazos críticos imediatos).</li>
                    <li><strong>Importantes</strong> (alto impacto, mas prazo flexível).</li>
                    <li><strong>Rotineiras</strong> (baixo impacto, operacional simples).</li>
                </ul>
                <p>Como não há urgências ou imprevistos ativos, o algoritmo flui sequencialmente avaliando as condicionais de forma negativa (Falso) até a conclusão das tarefas do dia.</p>
            `
        },
        "urgente": {
            activeElements: ["step-triagem", "cond-urgente", "cond-multi-urgente", "action-priorizar-urgencias", "step-fim"],
            activeConnectors: [0, 1, 2, 3, 7],
            explanation: `
                <p><strong>Cenário: Uma Tarefa Urgente</strong>:</p>
                <p>1. O algoritmo inicia na <strong>Triagem</strong>.</p>
                <p>2. A condicional <code>Se (Urgente?)</code> é avaliada como <strong>Verdadeira</strong>.</p>
                <p>3. A condicional <code>Se (Múltiplas?)</code> é avaliada como <strong>Falsa</strong> (existe apenas uma urgência).</p>
                <p>4. <strong>Ação</strong>: O algoritmo bloqueia as tarefas rotineiras e foca 100% dos recursos para executar a tarefa urgente imediatamente.</p>
            `
        },
        "multi-urgente": {
            activeElements: ["step-triagem", "cond-urgente", "cond-multi-urgente", "action-priorizar-urgencias", "step-fim"],
            activeConnectors: [0, 1, 2, 3, 7],
            explanation: `
                <p><strong>Cenário: Múltiplas Urgências Ativas</strong>:</p>
                <p>Quando há mais de um prazo estourando, o algoritmo aplica o pilar de priorização lógica:</p>
                <ul>
                    <li><strong>Esforço vs. Impacto</strong>: Ordenamos as urgências em uma matriz. Resolvemos primeiro a de <em>menor esforço</em> que traz o <em>maior impacto</em> imediato (ganho rápido ou Quick Win).</li>
                    <li><strong>Fila sequencial</strong>: Após finalizar a primeira urgência, o fluxo avalia a segunda urgência restante antes de liberar o sistema para tarefas importantes.</li>
                </ul>
            `
        },
        "ajuda-colega": {
            activeElements: ["step-triagem", "cond-urgente", "cond-ajuda", "action-negociar-ajuda", "step-fim"],
            activeConnectors: [0, 1, 2, 3, 4, 5, 6, 7],
            explanation: `
                <p><strong>Cenário: Colega Solicita Suporte</strong>:</p>
                <p>O algoritmo trata interrupções humanas através de uma condicional de tempo e impacto:</p>
                <p><code>Se (tempo de suporte < 5 minutos) então:</code></p>
                <ul>
                    <li>Apoiar o colega imediatamente (baixo custo de contexto).</li>
                </ul>
                <p><code>Senão (suporte longo/complexo):</code></p>
                <ul>
                    <li>Negociar educadamente e agendar um horário dedicado logo após a conclusão da tarefa importante em andamento.</li>
                </ul>
            `
        },
        "arquivo-ausente": {
            activeElements: ["step-triagem", "cond-urgente", "cond-arquivo", "action-contingencia-arquivo", "step-fim"],
            activeConnectors: [0, 1, 2, 3, 4, 5, 7],
            explanation: `
                <p><strong>Cenário: Recurso Bloqueado ou Ausente</strong>:</p>
                <p>Para evitar tempo ocioso (idle) e paralisia no escritório:</p>
                <p>1. O algoritmo detecta que a tarefa atual depende de um arquivo ausente.</p>
                <p>2. <strong>Tratamento de Exceção</strong>: Dispara a notificação de requisição ao responsável pelo arquivo.</p>
                <p>3. <strong>Desvio de Fluxo</strong>: Salva o estado da tarefa como "Bloqueada", move a tarefa para o fim da fila de prioridades e <strong>inicia imediatamente a próxima tarefa disponível</strong>. O fluxo não para.</p>
            `
        }
    };

    function loadScenario(scenarioId) {
        const data = scenarioData[scenarioId];
        if (!data) return;

        // Resetar ativação de todos os nós e conectores
        nodes.forEach(node => node.classList.remove('active'));
        connectors.forEach(conn => conn.classList.remove('active'));

        // Atualizar texto explicativo
        explanation.style.opacity = '0';
        setTimeout(() => {
            explanation.innerHTML = data.explanation;
            explanation.style.opacity = '1';
        }, 150);

        // Iluminar nós ativos do cenário
        data.activeElements.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
        });

        // Iluminar conectores ativos correspondentes
        data.activeConnectors.forEach(idx => {
            const conn = connectors[idx];
            if (conn) conn.classList.add('active');
        });
    }

    // Configurar cliques nos botões de cenário
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const scenarioId = button.dataset.scenario;

            if (button.classList.contains('active')) return;

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            loadScenario(scenarioId);
        });
    });

    // Inicializa com o cenário padrão
    loadScenario('normal');

});
