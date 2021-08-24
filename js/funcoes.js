function GerarUmaPiada(){
    const piadaAPI = "http://api.icndb.com/jokes/random";

    let piadaAtual = "";

    $.ajax({
        url: piadaAPI,
        async: false,
        error: function(erro){
            console.log("Erro: ");
            console.log(erro);
        },
        success: function(dados){
            piadaAtual = dados.value.joke;
        }
    });

    document.querySelector("#piada-texto").innerText = piadaAtual;
}

const botaoGerarPiada = document.querySelector("#btCriarPiada");
botaoGerarPiada.onclick = function(){
    GerarUmaPiada();
    const piada = document.querySelector('#piada-texto');
    typeWrite(piada);
}


function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const titulo = document.querySelector('h1');
typeWrite(titulo);

