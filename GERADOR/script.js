var deslizador = document.querySelector("#deslizador");
var botao = document.querySelector("#botao");
var valor = document.querySelector("#valor");
var senha = document.querySelector("#password");
var container_password = document.querySelector("#container_password");
var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#@?$!";
var nova_senha = "";

valor.innerHTML = deslizador.value;

deslizador.oninput = function(){
    valor.innerHTML = this.value;
}

function gerarSenha(){

    var pass = "";

    for(var i = 0, n = caracteres.length; i < deslizador.value; ++i){
        pass += caracteres.charAt(Math.floor(Math.random() * n));
    }
    
    container_password.classList.remove("hide")
    senha.innerHTML = pass
    nova_senha = pass

}

function copiarSenha(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(nova_senha);
}