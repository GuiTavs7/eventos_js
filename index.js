// 1) ADICIONANDO EVENTOS PELOS ATRIBUTOS HTML (onclick; etc);

function mostrarAlerta(){
    alert("Mostrando alerta do evento chamado pelo HMTL");
} 

// 2) ADICIONANDO EVENTOS DIRETAMENTE PELO JS ATRAVÉS DO MÉTODO addEventListener()

let selectDeEstado = document.querySelector("select[name='estado']");

console.log(selectDeEstado);

selectDeEstado.addEventListener("change", function (){
    alert("Mudou o select");
})

// 2.1) VERSÃO CLEAN CODE DO CÓDIGO ACIMA

document
        .querySelector("select[name='estado']")
        .addEventListener("change", function(event){
            console.log(event);
            console.log(event.target.value); //valor do select
            alert("mudou o select");
        });