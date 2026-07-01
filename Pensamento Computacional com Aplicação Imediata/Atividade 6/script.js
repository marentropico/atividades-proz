/* =============================================
   EcoPonto Digital - Pitch de Inovação
   Lógica JS do FAQ
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Alterna a classe ativa
            this.classList.toggle('active');
            
            // Pega o painel de conteúdo logo após o botão
            const content = this.nextElementSibling;
            
            // Controle de altura para animação suave
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

});
