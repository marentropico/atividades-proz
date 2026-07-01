/* =============================================
   LoopQuest: O Tabuleiro Binário
   Lógica e Mecânicas de Jogo
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Estados do Jogo ----
    let playerPosition = 0; // 0 a 11
    let bits = 0;
    let energy = 100;
    let laps = 0;
    let isGameOver = false;

    // ---- Elementos do DOM ----
    const btnRoll = document.getElementById('btn-roll');
    const diceElement = document.getElementById('dice-element');
    const valBits = document.getElementById('val-bits');
    const valEnergy = document.getElementById('val-energy');
    const valLaps = document.getElementById('val-laps');
    const energyFill = document.getElementById('energy-fill');
    const centerStatus = document.getElementById('center-status');
    const gameLog = document.getElementById('game-log');
    
    // Overlay
    const overlay = document.getElementById('game-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayIcon = document.getElementById('overlay-icon');
    const overlayText = document.getElementById('overlay-text');
    const btnReset = document.getElementById('btn-reset');

    // Mapeamento de ações das casas (12 casas)
    const tileActions = {
        0: { name: "LARGADA", type: "neutral", run: () => { logMessage("Você passou pelo START. Recarregando scripts...", "neutral"); } },
        1: { name: "BUG DE SINTAXE", type: "danger", value: -20, run: () => { modifyEnergy(-20); logMessage("Bug encontrado! Perdeu 20% de Energia.", "danger"); } },
        2: { name: "NÓ DE BITS", type: "success", value: 10, run: () => { modifyBits(10); logMessage("Bits coletados! Ganhou +10 Bits.", "success"); } },
        3: { name: "LOOP RECURSIVO", type: "warning", run: () => { moveForward(2); logMessage("Laço fechado! Você saltou +2 casas de atalho.", "success"); } },
        4: { name: "RECARGA DE BATERIA", type: "success", value: 20, run: () => { modifyEnergy(20); logMessage("Bateria recarregada! Ganhou +20% de Energia.", "success"); } },
        5: { name: "MÓDULO REFATORADO", type: "success", value: 15, run: () => { modifyBits(15); logMessage("Código limpo! Ganhou +15 Bits.", "success"); } },
        6: { name: "CHECKPOINT SAVE", type: "neutral", run: () => { modifyEnergy(100 - energy); logMessage("Checkpoint alcançado! Energia restaurada para 100%.", "success"); } },
        7: { name: "ESTOURO DE BUFFER", type: "danger", value: -30, run: () => { modifyEnergy(-30); logMessage("Buffer Overflow! Perdeu 30% de Energia.", "danger"); } },
        8: { name: "NÓ DE BITS", type: "success", value: 10, run: () => { modifyBits(10); logMessage("Mais bits coletados! Ganhou +10 Bits.", "success"); } },
        9: { name: "LOOP CONDICIONAL", type: "warning", run: () => { logMessage("Condicional Ativa: Rolando dado extra gratuitamente!", "success"); rollDiceFree(); } },
        10: { name: "RECARGA DE BATERIA", type: "success", value: 30, run: () => { modifyEnergy(30); logMessage("Supercarga! Ganhou +30% de Energia.", "success"); } },
        11: { name: "COMPILAÇÃO CONCLUÍDA", type: "success", value: 25, run: () => { modifyBits(25); logMessage("Código compilado! Ganhou +25 Bits.", "success"); } }
    };

    // ---- Ações Principais ----
    btnRoll.addEventListener('click', () => {
        if (isGameOver) return;
        rollDiceAndMove();
    });

    btnReset.addEventListener('click', () => {
        resetGame();
    });

    function rollDiceAndMove() {
        // Bloquear botão durante rolagem
        btnRoll.disabled = true;
        diceElement.classList.add('rolling');
        
        let rollCount = 0;
        let rollVal = 1;
        
        // Simulação visual da rolagem do dado
        const rollInterval = setInterval(() => {
            rollVal = Math.floor(Math.random() * 6) + 1;
            diceElement.innerText = rollVal;
            rollCount++;
            
            if (rollCount >= 10) {
                clearInterval(rollInterval);
                diceElement.classList.remove('rolling');
                
                // Mover jogador
                animateMovement(rollVal);
            }
        }, 80);
    }

    // Rolagem extra de graça (Casa 9)
    function rollDiceFree() {
        setTimeout(() => {
            rollDiceAndMove();
        }, 1200);
    }

    function animateMovement(steps) {
        let stepCount = 0;
        
        function takeSingleStep() {
            if (stepCount >= steps) {
                // Chegou na casa de destino, aciona a ação da casa
                executeTileAction(playerPosition);
                btnRoll.disabled = false;
                checkGameEndConditions();
                return;
            }
            
            // Remove a classe ativa da casa anterior
            document.querySelector(`.board-tile[data-index="${playerPosition}"]`).classList.remove('active');
            
            playerPosition++;
            
            // Tratamento de Loop (Volta Completa no Tabuleiro)
            if (playerPosition >= 12) {
                playerPosition = 0;
                laps++;
                valLaps.innerText = laps;
                modifyBits(20); // Bônus de Loop de repetição concluído
                logMessage("➔ Loop Completado! Bônus de +20 Bits por ciclo finalizado.", "success");
            }
            
            // Adiciona a classe ativa na nova casa
            document.querySelector(`.board-tile[data-index="${playerPosition}"]`).classList.add('active');
            
            centerStatus.innerText = `Posição: Casa ${playerPosition}`;
            
            stepCount++;
            setTimeout(takeSingleStep, 250); // Velocidade do pawn saltando
        }
        
        takeSingleStep();
    }

    function executeTileAction(position) {
        const action = tileActions[position];
        if (action) {
            centerStatus.innerText = action.name;
            action.run();
        }
    }

    // ---- Funções Utilitárias ----
    function modifyBits(amount) {
        bits += amount;
        if (bits < 0) bits = 0;
        valBits.innerText = bits;
    }

    function modifyEnergy(amount) {
        energy += amount;
        if (energy > 100) energy = 100;
        if (energy < 0) energy = 0;
        
        valEnergy.innerText = `${energy}%`;
        energyFill.style.width = `${energy}%`;

        // Cores de alerta da barra de progresso
        if (energy <= 30) {
            energyFill.style.backgroundColor = 'var(--color-red)';
        } else if (energy <= 60) {
            energyFill.style.backgroundColor = 'var(--color-orange)';
        } else {
            energyFill.style.backgroundColor = 'var(--color-green)';
        }
    }

    function logMessage(text, type) {
        gameLog.innerHTML = `<p class="log-${type}">${text}</p>`;
    }

    function checkGameEndConditions() {
        if (bits >= 100) {
            // Vitória
            isGameOver = true;
            overlayTitle.innerText = "Código Compilado!";
            overlayIcon.innerText = "🏆";
            overlayText.innerText = `Você atingiu ${bits} Bits com ${laps} loops rodados!`;
            overlay.classList.add('visible');
        } else if (energy <= 0) {
            // Derrota
            isGameOver = true;
            overlayTitle.innerText = "Pane Geral (Crash)";
            overlayIcon.innerText = "💀";
            overlayText.innerText = "Sua energia chegou a 0% e o compilador travou.";
            overlay.classList.add('visible');
        }
    }

    function resetGame() {
        // Reset de estado
        document.querySelector(`.board-tile[data-index="${playerPosition}"]`).classList.remove('active');
        playerPosition = 0;
        bits = 0;
        energy = 100;
        laps = 0;
        isGameOver = false;

        // Reset visual
        document.querySelector(`.board-tile[data-index="0"]`).classList.add('active');
        valBits.innerText = "0";
        valEnergy.innerText = "100%";
        valLaps.innerText = "0";
        energyFill.style.width = "100%";
        energyFill.style.backgroundColor = 'var(--color-green)';
        diceElement.innerText = "?";
        centerStatus.innerText = "Jogador na largada";
        logMessage("Jogo resetado. Role o dado para reiniciar!", "neutral");

        overlay.classList.remove('visible');
        btnRoll.disabled = false;
    }

});
