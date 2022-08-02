function login() {
    localStorage.setItem("acesso", true);
    window.location.href = "./paginas-html/login.html";
}

function loginp() {
    localStorage.setItem("acesso", true);
    window.location.href = "../paginas-html/login.html";
}

function registro() {
    localStorage.setItem("acesso", true);
    window.location.href = "./paginas-html/registro.html";
}

function registrop() {
    localStorage.setItem("acesso", true);
    window.location.href = "../paginas-html/registro.html";
}

function home() {
    localStorage.setItem("acesso", true);
    window.location.href = "../index.html";
}

function loginok() {
    var email = document.getElementById('email')
    var senha = document.getElementById('password')
    if(email.value == "usuario@gmail.com" && senha.value == '919110' || email.value == "amigo@gmail.com" && senha.value == '933678' || email.value == "dev@gmail.com" && senha.value == '123456' || email.value == "world@gmail.com" && senha.value == 'world' || email.value == "face@gmail.com" && senha.value == 'bit123') {
        localStorage.setItem("acesso", true);

        window.location.href = "./logado.html";
    }else {
        alert("Usuario ou senha invalidos!")
    }
}