const coluna2 = document.querySelector('.coluna2');

// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    atualizarColuna('filtro1');
    atualizarColuna('filtro2');
    atualizarColuna('filtro3');
    atualizarColuna('filtro4');
    atualizarColuna('filtro5');
});

const infoPorFiltro = {
    "filtro1": {
        "Opção A": "Informações do Carro: Opção A",
        "Opção B": "Informações do Carro: Opção B",
        "Opção C": "Informações do Carro: Opção C",
        "Opção D": "Informações do Carro: Opção D"
    },
    "filtro2": {
        "Opção A": "Informações da Marca do Veículo: Opção A",
        "Opção B": "Informações da Marca do Veículo: Opção B",
        "Opção C": "Informações da Marca do Veículo: Opção C",
        "Opção D": "Informações da Marca do Veículo: Opção D"
    },
    "filtro3": {
        "Opção A": "Informações da Aplicação: Opção A",
        "Opção B": "Informações da Aplicação: Opção B",
        "Opção C": "Informações da Aplicação: Opção C",
        "Opção D": "Informações da Aplicação: Opção D"
    },
    "filtro4": {
        "Opção A": "Informações da Marca da Peça: Opção A",
        "Opção B": "Informações da Marca da Peça: Opção B",
        "Opção C": "Informações da Marca da Peça: Opção C",
        "Opção D": "Informações da Marca da Peça: Opção D"
    },
    "filtro5": {
        "Opção A": "Pesquisa: Opção A",
        "Opção B": "Pesquisa: Opção B",
        "Opção C": "Pesquisa: Opção C",
        "Opção D": "Pesquisa: Opção D"
    }
};

// Função para atualizar a coluna2
function atualizarColuna(idInput) {
    const input = document.getElementById(idInput);
    const valor = input.value.trim(); // remove espaços extras
    const info = infoPorFiltro[idInput][valor];

    if (info) {
        coluna2.innerHTML = `<p>${info}</p>`;
    } else {
        coluna2.innerHTML = `<p>Selecione uma opção válida no filtro.</p>`;
    }
}

// Adiciona listeners para cada filtro
for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`filtro${i}`);
    if (input) {
        input.addEventListener('change', () => atualizarColuna(`filtro${i}`));
    }
}
