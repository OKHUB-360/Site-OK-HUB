function openLink(url) {
    window.open(url, '_blank');
}

function openLink(url) {
    window.open(url, '_blank');
}


function openModal() {
    document.getElementById('contactModal').style.display = 'block'; // Mostra o modal
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none'; // Esconde o modal
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeModal();
    }
}


function openLocationModal() {
    document.getElementById('locationName').innerText = "Sua Localização"; // Defina o nome da localização
    document.getElementById('locationLink').innerText = "https://goo.gl/maps/SEU_MAPA"; // Defina o link da localização
    document.getElementById('locationModal').style.display = 'block'; // Mostra o modal de localização
}

function closeLocationModal() {
    document.getElementById('locationModal').style.display = 'none'; // Esconde o modal de localização
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const contactModal = document.getElementById('contactModal');
    const locationModal = document.getElementById('locationModal');
    if (event.target == contactModal) {
        closeModal();
    } else if (event.target == locationModal) {
        closeLocationModal();
    }
}