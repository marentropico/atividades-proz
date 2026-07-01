/* =============================================
   AutoFlow: Circuito de Automações do Produto
   Lógica e Simulação de Pipeline de Automações
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.flow-btn');
    const container = document.getElementById('nodes-container');
    const btnSimulate = document.getElementById('btn-simulate');

    // Receitas de automações estruturadas (Triggers e Actions)
    const flows = {
        "reunioes": [
            { role: "Trigger (Gatilho)", icon: "📅", title: "Google Calendar", desc: "Nova reunião agendada na agenda compartilhada da equipe.", color: "#33a8c7" },
            { role: "Action 01", icon: "💬", title: "Slack / Teams", desc: "Posta automaticamente nos canais da equipe informando data, horário, pauta e link do convite.", color: "#e67e22" },
            { role: "Action 02", icon: "📝", title: "Google Docs / Notion", desc: "Cria e vincula um documento modelo de ata colaborativo com a pauta estruturada.", color: "#9b5de5" }
        ],
        "decisoes": [
            { role: "Trigger (Gatilho)", icon: "⏱️", title: "Reunião Finalizada", desc: "Chamada encerra no Google Meet / Zoom.", color: "#33a8c7" },
            { role: "Action 01", icon: "🧠", title: "AI Audio Transcription (Whisper)", desc: "Gera automaticamente a transcrição integral do áudio e extrai decisões-chave.", color: "#e67e22" },
            { role: "Action 02", icon: "📧", title: "E-mail de Ata Automático", desc: "Envia o resumo executivo estruturado e tarefas atribuídas a todos os participantes.", color: "#9b5de5" }
        ],
        "tarefas": [
            { role: "Trigger (Gatilho)", icon: "📋", title: "Trello / Jira / ClickUp", desc: "Status de tarefa movido para 'Concluído' ou 'Em Revisão'.", color: "#33a8c7" },
            { role: "Action 01", icon: "💬", title: "Notificação Geral no Slack", desc: "Informa o time sobre a atualização da tarefa com link direto.", color: "#e67e22" },
            { role: "Action 02", icon: "📊", title: "Gantt / Dashboard Update", desc: "Sincroniza automaticamente a planilha de KPIs de progresso semanal da equipe.", color: "#9b5de5" }
        ]
    };

    let activeFlowId = "reunioes";
    let simTimeout = null;

    // Renderiza os nós na tela baseados no ID do fluxo selecionado
    function renderFlow(flowId) {
        activeFlowId = flowId;
        container.innerHTML = "";
        clearSimulations();

        const steps = flows[flowId];
        if (!steps) return;

        steps.forEach((step, idx) => {
            // Cria o nó
            const node = document.createElement('div');
            node.className = 'c-node';
            node.style.setProperty('--ac', step.color);
            node.innerHTML = `
                <div class="c-node-icon-box">${step.icon}</div>
                <div class="c-node-info">
                    <span class="c-node-role">${step.role}</span>
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                </div>
            `;
            container.appendChild(node);

            // Cria o conector se não for o último elemento
            if (idx < steps.length - 1) {
                const connector = document.createElement('div');
                connector.className = 'c-connector';
                connector.style.setProperty('--ac', step.color);
                container.appendChild(connector);
            }
        });
    }

    // Inicia simulação passo a passo
    btnSimulate.addEventListener('click', () => {
        clearSimulations();
        btnSimulate.disabled = true;
        btnSimulate.innerText = "Rodando automação...";

        const children = Array.from(container.children);
        
        function runStep(index) {
            if (index >= children.length) {
                btnSimulate.disabled = false;
                btnSimulate.innerText = "Testar Circuito 🚀";
                return;
            }

            const child = children[index];
            child.classList.add('active');

            // Delay de 900ms para simular o tráfego de rede (API response time)
            simTimeout = setTimeout(() => {
                runStep(index + 1);
            }, 900);
        }

        runStep(0);
    });

    // Zera qualquer simulação ativa
    function clearSimulations() {
        if (simTimeout) {
            clearTimeout(simTimeout);
            simTimeout = null;
        }
        btnSimulate.disabled = false;
        btnSimulate.innerText = "Testar Circuito 🚀";

        const children = Array.from(container.children);
        children.forEach(child => child.classList.remove('active'));
    }

    // Gerencia cliques nos botões seletores de fluxo
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const flowId = button.dataset.flow;

            if (button.classList.contains('active')) return;

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            renderFlow(flowId);
        });
    });

    // Inicializa carregando a primeira receita (Reuniões)
    renderFlow("reunioes");

});
