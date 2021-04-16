function carregar() {
  var msg = window.document.getElementById("msg");
  var imagem = window.document.getElementById("imagem");
  var saudacao = window.document.getElementById("saudacao");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    imagem.src = "manha.png";
    document.body.style.background = "#7c7baf";

    saudacao.innerHTML = `Bom dia`;
  } else if (hora >= 12 && hora <= 18) {
    imagem.src = "tarde.png";
    document.body.style.background = "#aa6e3f";

    saudacao.innerHTML = `Boa Tarde`;
  } else {
    imagem.src = "noite.png";
    document.body.style.background = "#05444d";

    saudacao.innerHTML = `Boa Noite`;
  }
}
