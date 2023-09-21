function resetarPagina() {
    document.body.style.background = '';
    document.getElementById('mensagem').textContent = '';
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);

    
    if (campoB > campoA) {
        document.getElementById("mensagem").textContent = "Formulário válido! B é maior que A.";
        document.body.style.backgroundColor = '#00ff80';
    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido! B deve ser maior que A.";
        document.body.style.backgroundColor = '#fc5050';
    }
});