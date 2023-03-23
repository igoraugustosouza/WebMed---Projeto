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

  

  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "login.html";
  }