document.getElementById("cria").addEventListener("click", () => {
    carregarPagina("criaProdutos.html","criaProdutosJS.js");
});

document.getElementById("ver").addEventListener("click", () => {
    carregarPagina("verProdutos.html","verProdutosJS.js"); // se quiser voltar para um conteúdo inicial
});

function carregarPagina(pagina,script) {
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar a página: " + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("container").innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("container").innerHTML = "<p>Erro ao carregar a página.</p>";
        });
    if (script){
        const js = document.createElement("script");
        js.src = script;
        document.body.appendChild(js);
    }
}