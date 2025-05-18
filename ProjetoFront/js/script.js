document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let botaoPreto = document.getElementById("botaoCor");
    let botaoCinza = document.getElementById("botaoCor2");
    let botaoCinzaClaro = document.getElementById("botaoCor3");
    let botaoAzul = document.getElementById("botaoCor4");
    let botaoAzulClaro = document.getElementById("botaoCor5");

    // Recupera a cor de fundo armazenada e aplica
    let corSalva = localStorage.getItem("corDeFundo");
    if (corSalva) {
        body.style.backgroundColor = corSalva;
    }

    // Verifica se os botões existem antes de adicionar eventos
    if (botaoPreto) {
        botaoPreto.addEventListener("click", function() {
            let novaCorBody = "rgb(31, 29, 29)"; // Preto
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody); // Salva no localStorage
        });
    }
    if (botaoCinza) {
        botaoCinza.addEventListener("click", function() {
            let novaCorBody = "rgb(51, 52, 62)"; // Cinza
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoCinzaClaro) {
        botaoCinzaClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(81, 81, 81)"; // Cinza
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    if (botaoAzul) {
        botaoAzul.addEventListener("click", function() {
            let novaCorBody = "rgb(6, 9, 44)"; // Cinza
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoAzulClaro) {
        botaoAzulClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(27, 89, 140)"; // Cinza
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
});