const form = document.getElementById("form-insert")
const contatoNomes = [];
const contatoNumeros = [];
let linhas = "";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {

    const inputNomeDoContato = document.getElementById("nome-contato");
    const inputNumeroDoContato = document.getElementById("numero-contato");

    if(contatoNumeros.includes(inputNumeroDoContato.value)) {
        alert(`O número ${inputNumeroDoContato.value} já foi adicionado a lista!`)
    } else {
        contatoNumeros.push(inputNumeroDoContato.value)
    let linha = "<tr>";
    linha +=`<td>${inputNomeDoContato.value}</td>`;
    linha +=`<td>${inputNumeroDoContato.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
}

inputNomeDoContato.value = "";
inputNumeroDoContato.value = "";

}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}