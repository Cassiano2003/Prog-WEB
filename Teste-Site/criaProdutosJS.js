const apiUrl = '/produtos'; // o Spring Boot já serve em localhost:8080
const apiUrl2 = '/aplicacao';
var IDs = 0;

function adicionarAplicacoes(){
    const local = document.getElementById("aplica");
    const novoInput = document.createElement("input");
    const novaDiv = document.createElement('div');
    
    const inputIDs = "input"+(IDs-1);
    const divIDs = "div"+(IDs-1);

    novoInput.type = "text";
    novoInput.placeholder = "Aplicação"
    novoInput.className = "aplicacao"
    novoInput.id = "input"+IDs;
    novaDiv.id = "div"+IDs;

    if (IDs == 0 || document.getElementById(inputIDs).value){
        local.appendChild(novoInput);
        local.appendChild(novaDiv);
        IDs ++;
    }else{
        return alert('Preencha o Campo de Aplicações!!!');
    }
}

function removeAplicacoes(){
    const local = document.getElementById("aplica");
    const inputIDs = "input"+(IDs-1);
    const divIDs = "div"+(IDs-1);
    if (local && local.lastElementChild) {
        const ultimoInput = document.getElementById(inputIDs);
        const ultimaDiv = document.getElementById(divIDs);

        ultimaDiv.remove();
        ultimoInput.remove();
        IDs --;
    }
}

function listaOpcoes(){
    aplicacoes = []

    fetch(apiUrl2)
    .then(response => response.json())
    .then(data => {
        // 'data' é um array de objetos Aplicacao
        aplicacoes = data.map(aplicacao => aplicacao.nome);
    })
    .catch(error => console.error('Erro ao buscar aplicações:', error));
    
    const input = document.getElementById('aplicacaoInput');
    const suggestions = document.getElementById('suggestions');

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        suggestions.innerHTML = '';

        if (!value) return;

        const filtered = aplicacoes.filter(nome => nome.toLowerCase().includes(value));

        filtered.forEach(nome => {
            const div = document.createElement('div');
            div.textContent = nome;
            div.addEventListener('click', () => {
            input.value = nome;
            suggestions.innerHTML = '';
            });
            suggestions.appendChild(div);
        });
    });
}

async function cirarProduto() {
    const nome = document.getElementById('nome').value;
    const plato = parseInt(document.getElementById('plato').value);
    const descricao = document.getElementById('descricao').value;
    const marca_peca = document.getElementById('marca_pecas').value;
    const marca_veiculos = document.getElementById('marca_veiculos').value;
    const tipo = document.getElementById('tipo').value;

    if (!nome || !plato || !descricao || !marca_peca || !marca_veiculos || !tipo) return alert('Preencha os campos!');

    // 🔹 Coleta todas as aplicações digitadas
    const aplicacoesInputs = document.querySelectorAll('.aplicacao');
    const aplicacoes = Array.from(aplicacoesInputs)
    .map(input => input.value.trim())
    .filter(v => v !== "")
    .map(nome => ({ nome }));


    // 🔹 Monta o JSON final
    const produto = {
        nome,
        plato,
        descricao,
        marca_peca,
        marca_veiculos,
        tipo,
        aplicacoes
    };

    console.log("JSON gerado:", produto);
    console.log(JSON.stringify(produto, null, 2));

    // 🔹 Envia o JSON para o backend
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    });

    if (response.ok) {
        alert("Produto criado com sucesso!");
        document.getElementById('nome').value = '';
        document.getElementById('plato').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('marca_pecas').value = '';
        document.getElementById('marca_veiculos').value = '';
        document.getElementById('tipo').value = '';
        const minhaDiv = document.getElementById('aplica');
        minhaDiv.innerHTML = '';
    } else {
        alert("Erro ao criar produto");
    }


}

async function deletarUsuario(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
}