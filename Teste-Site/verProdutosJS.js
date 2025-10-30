async function carregarProdutos() {
  try {
    const resposta = await fetch("teste.json");
    const produtos = await resposta.json();

    console.log("Produtos carregados:", produtos);

    const container = document.getElementById("produtos");

    produtos.forEach(produto => {
      const div = document.createElement("div");
      div.classList.add("produto");
      div.innerHTML = `
        <h2>${produto.nome}</h2>
        <p><b>Descrição:</b> ${produto.descricao}</p>
        <p><b>Marca da peça:</b> ${produto.marca_peca}</p>
        <p><b>Marca do veículo:</b> ${produto.marca_veiculo}</p>
        <p><b>Plato:</b> ${produto.plato}</p>
        <p><b>Tipo:</b> ${produto.tipo}</p>
        <h3>Aplicações:</h3>
        <ul>
          ${produto.aplicacoes.map(a => `<li>${a.nome}</li>`).join("")}
        </ul>
      `;
      container.appendChild(div);
    });

  } catch (erro) {
    console.error("Erro ao carregar JSON:", erro);
  }
}

carregarProdutos();