document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menuCores');
    let botaoPreto = document.getElementById("botaoCor");
    let botaoCinza = document.getElementById("botaoCor2");
    let botaoCinzaClaro = document.getElementById("botaoCor3");
    let botaoAzul = document.getElementById("botaoCor4");
    let botaoAzulClaro = document.getElementById("botaoCor5");


    let corSalva = localStorage.getItem("corDeFundo");
    if (corSalva) {
        body.style.backgroundColor = corSalva;
    }
    if (botaoPreto) {
        botaoPreto.addEventListener("click", function() {
            let novaCorBody = "rgb(31, 29, 29)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody); 
        });
    }
    if (botaoCinza) {
        botaoCinza.addEventListener("click", function() {
            let novaCorBody = "rgb(51, 52, 62)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoCinzaClaro) {
        botaoCinzaClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(81, 81, 81)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    if (botaoAzul) {
        botaoAzul.addEventListener("click", function() {
            let novaCorBody = "rgb(6, 9, 44)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
    
    if (botaoAzulClaro) {
        botaoAzulClaro.addEventListener("click", function() {
            let novaCorBody = "rgb(27, 89, 140)"; 
            body.style.backgroundColor = novaCorBody;
            localStorage.setItem("corDeFundo", novaCorBody);
        });
    }
});
document.querySelectorAll(".toggle").forEach((summary) => {
    summary.addEventListener("click", function () {
        const section = this.nextElementSibling;
        
        if (!section) return;

        if (section.style.maxHeight) {
            section.style.maxHeight = null;
            section.style.opacity = "0";
        } else {
            section.style.maxHeight = section.scrollHeight + "px";
            section.style.opacity = "1";
        }
    });
});

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");
const erro = document.getElementById("erro");

formulario.addEventListener('submit', (e) => {
    let mensagem = [];
    
    if (nome.value === "" || nome.value === null) {
        mensagem.push("\nInsira seu nome");
    }
    const partesNome = nome.value.trim().split(" ");
    if (partesNome.length < 2 || nome.length === 1) {
        mensagem.push("\nAdicione um sobrenome");
    }
    if (email.value === "" || email.value === null) {
        mensagem.push("\nInsira seu email");
    }
    if (assunto.value === "" || assunto.value === null) {
        mensagem.push("\nInsira o assunto da mensagem");
    }
    if (mensagemFormulario.value === "" || mensagemFormulario.value === null) {
        mensagem.push("\nInsira sua mensagem");
    }
    if (mensagem.length > 0) {
        e.preventDefault();
        alert(mensagem.join());
    } else {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    }
    
})
