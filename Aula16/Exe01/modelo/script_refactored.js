let arrayValores = [];
let results = document.querySelector("div#res");
let inicio = document.querySelector("input#txtNumber");
let res = document.querySelector("select#selres");

function adicionar() {
  if (
    inicio.value === "" ||
    Number(inicio.value) === 0 ||
    Number(inicio.value) > 100
  ) {
  } else {
    var num = Number(inicio.value);
    arrayValores.push(num);

    var numero = document.createElement("option");
    numero.text += ` Valor ${num} adicionado `;
    numero.value = `${num} `;
    res.appendChild(numero);
  }
  if (results.childNodes.length > 0) {
    results.innerText = "";
  }
}

function finaliza() {
  if (arrayValores.length === 0) {
    alert("Adicione Valores");
  } else {
  }
  var quantidade = arrayValores.length;
  var menor = arrayValores.sort();
  var soma = 0;
  var media = 0;

  for (let pos in arrayValores) {
    soma += arrayValores[pos];
  }

  media = soma / quantidade;

  results.innerHTML += ` <p>Ao todo , temos ${quantidade} números cadastrados</p>`;
  results.innerHTML += `<p>O menor valor informado foi ${menor[0]}</p> `;
  results.innerHTML += `<p> O maior valor informado foi ${
    menor[arrayValores.length - 1]
  }</p>`;
  results.innerHTML += `<p> Somando todos os valores temos ${soma}</p> `;
  results.innerHTML += `<p>A media dos valores digitados é ${media.toFixed()}</p> `;
}

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionarNumero() {
  if (isNumero(inicio.value) && !inLista(inicio.value, arrayValores)) {
    arrayValores.push(Number(inicio.value));
    let item = document.createElement("option");
    item.text = ` Valor ${inicio.value} adicionado `;
    res.appendChild(item);
    results.innerHTML = "";
  } else {
    alert(" Valor Invalido!!!");
  }
  inicio.value = "";
  inicio.focus();
}
