var id = 0;


function add(){
    const tarefas = document.getElementById("tarefas");
    const meu_iten = document.getElementById("iten");
    const meu_iten_text = meu_iten.value;
    meu_iten.value = "";
    
    const minha_lista = document.createElement("div");
    minha_lista.className = "itens";
    minha_lista.id = "lista"+id;

    const novo_iten = document.createElement("p");
    novo_iten.textContent = meu_iten_text;
    novo_iten.id = "id"+id;

    const novo_button = document.createElement("button");
    novo_button.textContent = "Excluir";
    novo_button.className = "button1"
    novo_button.id = "bnt_e"+id;

    const novo_button2 = document.createElement("button");
    novo_button2.textContent = "Concluir";
    novo_button2.className = "button2"
    novo_button2.id = "bnt_c"+id;

    novo_button.addEventListener("click", () => {
        minha_lista.remove();
    });

    novo_button2.addEventListener("click",() => {
        novo_button2.remove();
        minha_lista.className = "concluido"
    });

    minha_lista.appendChild(novo_iten);
    minha_lista.appendChild(novo_button);
    minha_lista.appendChild(novo_button2);
    tarefas.appendChild(minha_lista);
    id += 1;
}

