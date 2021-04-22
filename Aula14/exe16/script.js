function contar() {
  var inicio = document.getElementById("txtini");
  var fim = document.getElementById("txtfim");
  var passo = document.getElementById("txtpasso");
  var resposta = document.getElementById("res");

  if (inicio.value === "" || fim.value === "" || passo.value === "") {
    resposta.innerHTML = "<p>Impossível Contar!!!</p>";
  } else {
    var f = Number(fim.value);
    var i = Number(inicio.value);
    var p = Number(passo.value);
    var numero = document.createElement("span");
    if (p === 0) {
      alert(`passo inválido, considerando passo 1`);
      p = 1;
    }
    resposta.innerHTML = "<p>Contador</p>";
    if (f < i) {
      for (let c = i; c >= f; c -= p) {
        numero.innerText += ` ${c} 👉`;
        resposta.appendChild(numero);
      }
    } else {
      for (let c = i; c <= f; c += p) {
        numero.innerText += ` ${c} 👉`;
        resposta.appendChild(numero);
      }
    }
    numero.innerText += `✔️`;
  }
}
