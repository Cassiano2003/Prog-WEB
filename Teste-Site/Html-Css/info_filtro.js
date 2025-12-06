window.addEventListener('load', function() {
  // Lista de peças (exemplo)
  const pecas = [
    {
      nome: "Plato de Embreagem 200mm",
      descricao: "Plato de embreagem reforçado, ideal para veículos leves.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/plato1.png",
      aplicacao: "Veículos leves",
      modelo: "200mm",
      marcaVeiculo: "Fiat",
      marcaPeca: "Sachs",
      tipo: "Plato"
    },
    {
      nome: "Plato de Embreagem 250mm",
      descricao: "Versão para caminhonetes, resistente a altas temperaturas.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/plato2.png",
      aplicacao: "Caminhonetes",
      modelo: "250mm",
      marcaVeiculo: "Chevrolet",
      marcaPeca: "Luk",
      tipo: "Plato"
    },
    {
      nome: "Disco de Embreagem 210mm",
      descricao: "Disco com molas duplas para reduzir vibrações.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/disco1.png",
      aplicacao: "Carros de passeio",
      modelo: "200mm",
      marcaVeiculo: "Volkswagen",
      marcaPeca: "Valeo",
      tipo: "Disco"
    },
    {
      nome: "Disco de Teste1",
      descricao: "Disco com molas duplas para reduzir vibrações.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/disco1.png",
      aplicacao: "Carros de Teste1",
      modelo: "000mm",
      marcaVeiculo: "Teste1",
      marcaPeca: "Valeo",
      tipo: "Disco"
    },
    {
      nome: "Disco de Teste2",
      descricao: "Disco com molas duplas para reduzir vibrações.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/disco1.png",
      aplicacao: "Carros de Teste2",
      modelo: "000mm",
      marcaVeiculo: "Teste2",
      marcaPeca: "Valeo",
      tipo: "Disco"
    },
    {
      nome: "Disco de Teste3",
      descricao: "Disco com molas duplas para reduzir vibrações.",
      imagem: "https://raw.githubusercontent.com/K-Stachelski/Imagens-Rolpladis/Godot-1/disco1.png",
      aplicacao: "Carros de Teste3",
      modelo: "000mm",
      marcaVeiculo: "Teste3",
      marcaPeca: "Valeo",
      tipo: "Disco"
    }
  ];

  // Evento principal — ao digitar ou escolher um filtro
  document.getElementById('filtro1').addEventListener('input', function() {
    const valorFiltro = this.value.trim().toLowerCase();
    const listaConteudo = document.getElementById('listaPecas');
    const detalheConteudo = document.getElementById('detalhesPeca');

    // Limpa conteúdos anteriores
    listaConteudo.innerHTML = "";
    detalheConteudo.innerHTML = "<h3>Selecione uma peça para ver os detalhes</h3>";

    // Filtra as peças
    const resultados = pecas.filter(p => p.tipo.toLowerCase().includes(valorFiltro));

    if (resultados.length === 0) {
      listaConteudo.innerHTML = `<p>Nenhuma peça encontrada.</p>`;
      return;
    }

    // Cria lista com nomes das peças
    resultados.forEach(p => {
      const item = document.createElement('div');
      item.classList.add('item-peca');
      item.textContent = p.nome;

      // Estilo visual (quadrado ao redor)
      item.style.border = "2px solid #ccc";
      item.style.borderRadius = "8px";
      item.style.padding = "8px";
      item.style.margin = "5px 0";
      item.style.cursor = "pointer";
      item.style.backgroundColor = "#f7f7f7";
      item.style.transition = "0.3s";

      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#e0e0e0";
      });
      item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#f7f7f7";
      });

      // Ao clicar, mostra detalhes
      item.addEventListener('click', () => {
        document.querySelectorAll('.item-peca').forEach(el => {
          el.style.backgroundColor = "#f7f7f7";
        });
        item.style.backgroundColor = "#d1d1d1";

        detalheConteudo.innerHTML = `
          <div class="linha">
              <h3>INFORMAÇÃO DA PEÇA</h3>
          </div>
          <div class="linha">
              <div class="linha nome-descricao">
                  <div class="col nome">${p.nome}</div>
                  <div class="col-desc">${p.descricao}</div>
              </div>
              <div class="col imagem">
                  <img src="${p.imagem}" alt="${p.nome}" style="max-width: 200px; border-radius: 8px;">
              </div>
          </div>
          <div class="linha">
              <div class="col">APLICAÇÃO<br>${p.aplicacao}</div>
              <div class="col">MODELO<br>${p.modelo}</div>
          </div>
          <div class="linha">
              <div class="col">MARCA VEÍCULO<br>${p.marcaVeiculo}</div>
              <div class="col">MARCA PEÇA<br>${p.marcaPeca}</div>
          </div>
        `;
      });

      listaConteudo.appendChild(item);
    });
  });
});