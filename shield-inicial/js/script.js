const formulario = document.querySelector("#formulario");

function lerFormulario() {
    return {
        codinome: formulario.querySelector("#codinome").value,
        nome: formulario.querySelector("#nome").value,
        idade: formulario.querySelector("#idade").value,
        poder: formulario.querySelector("#poder").value,
        ingresso: formulario.querySelector("#ingresso").value,
        email: formulario.querySelector("#email").value,
    };
}

formulario.addEventListener("submit", function (event) {
    evento.preventDefault();

    try {

    } catch (erro) {

    }finally {
        formulario.reset();
    }
});

function capitalizar(texto) {
    const palavras = texto.trim().toLowerCase().split(" ");

function tratar(dados) {
    return {
        codinome: capitalizar(dados.codinome),
        nome: capitalizar(dados.nome),
        idade: paraNumero(dados.idade),
        poder: paraNumero(dados.poder),
        ingresso: dados.ingresso,
        email: dados.email.trim().toLowerCase(),
    };
}