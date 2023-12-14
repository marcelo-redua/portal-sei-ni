// Cria um novo objeto Date
var dataAtual = new Date();

// Obtém o ano atual
var anoAtual = dataAtual.getFullYear();

// Define a variável de direitos autorais
var direitosAutorais = "© " + anoAtual + " Prefeitura de Nova Iguaçu.";

function displayCopyright() {
    document.getElementById("copyright").innerHTML = direitosAutorais;
}