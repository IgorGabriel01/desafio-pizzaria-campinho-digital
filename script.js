/*function enviarForm(){
    const pegarValorConta = document.getElementById("valorConta");
    const pegarValorTaxa = document.getElementById("valorTaxa");
    const pegarNumeroPagantes = document.getElementById("numeroPagantes");
    if(pegarValorConta.value == ""){
        alert("Insira o valor da conta")
    } else if (pegarValorTaxa.value == ""){
        alert("Insira o valor da conta")
    } else if(pegarNumeroPagantes.value == ""){
        alert("Insira o valor da conta")
    } else {
        alert("Formulário enviado!")
    }
*/

function fazerCalculo(){
    const pegarValorConta = document.getElementById("valorConta");
    const pegarValorTaxa = document.getElementById("valorTaxa");
    const pegarNumeroPagantes = document.getElementById("numeroPagantes");

    const somar = (parseInt(pegarValorConta.value) + parseInt(pegarValorTaxa.value)) /parseInt(pegarNumeroPagantes.value);

    document.getElementById("resultado").innerHTML = `Sua conta deu: R$${somar}`
}

function formEvent () {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        fazerCalculo();
    })
}


