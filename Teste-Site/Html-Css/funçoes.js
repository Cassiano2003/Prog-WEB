document.getElementById("produtos").addEventListener("click", () => {
    carregarPagina("produtos.html");
});

document.getElementById("servicos").addEventListener("click", () => {
    carregarPagina("servicos.html");
});

document.getElementById("sobre_nos").addEventListener("click", () => {
    carregarPagina("sobre_nos.html"); 
});

document.getElementById("inicio").addEventListener("click", () => {
    carregarPagina("colunas.html"); 
});


function carregarPagina(pagina) {
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar a página: " + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("argumentos").innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("argumentos").innerHTML = "<p>Erro ao carregar a página.</p>";
        });
    /*if (script){
        const js = document.createElement("script");
        js.src = script;
        document.body.appendChild(js);
    }*/
}

carregarPagina("colunas.html");