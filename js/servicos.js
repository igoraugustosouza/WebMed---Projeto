let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "login.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá, ${userLogado.nome}`;

  const usuarioLogado = document.querySelector("#usuarioLogado");
  usuarioLogado.innerHTML = `Usuario: ${userLogado.user}`;

  const emailLogado = document.querySelector("#emailLogado");
  emailLogado.innerHTML = `Email: ${userLogado.email}`;