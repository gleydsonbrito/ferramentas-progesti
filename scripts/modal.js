// Obtém os elementos do DOM
const modal = document.getElementById("passwordModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const confirmBtn = document.querySelector(".confirm-btn");

// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Previne o scroll da página
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaura o scroll da página
}

// Event Listeners
if (openBtn) {
    openBtn.addEventListener("click", openModal);
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

if (confirmBtn) {
    confirmBtn.addEventListener("click", closeModal);
}

// Fechar o modal se clicar fora do conteúdo
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Fechar com a tecla ESC
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});