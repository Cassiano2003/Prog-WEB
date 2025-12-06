function pegarNome() {
    var nome = document.getElementById("nome").value;
    const div = document.getElementById("coloca");
    div.innerHTML = ""; // Limpa o conteúdo anterior
    var h1 = document.createElement("h1");
    h1.textContent = nome + " GAY";
    div.appendChild(h1);
}