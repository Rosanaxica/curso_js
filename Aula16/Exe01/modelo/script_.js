var arrayValores = [];
var results = document.getElementById("res");

function adicionaNumero() {
  var inicio = document.getElementById("txtNumber");
  var res = document.getElementById("selres");

  if (
    inicio.value === "" ||
    Number(inicio.value) === 0 ||
    Number(inicio.value) > 100
  ) {
    alert(" Valor Invalido!!!");
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
  inicio.value = "";
}

function finaliza() {
  var quantidade = arrayValores.length;
  var menor = arrayValores.sort();
  var soma = 0;
  var media = 0;

  for (let index = 0; index < arrayValores.length; index++) {
    soma += arrayValores[index];
  }

  media = soma / quantidade;

  var quantidadeNumero = document.createElement("p");
  quantidadeNumero.innerText = ` Ao todo , temos ${quantidade} números cadastrados`;
  results.appendChild(quantidadeNumero);

  var numero = document.createElement("p");
  numero.innerText = `O menor valor informado foi ${menor[0]} `;
  results.appendChild(numero);

  var maiorNumero = document.createElement("p");
  maiorNumero.innerText = ` O maior valor informado foi ${
    menor[arrayValores.length - 1]
  } `;
  results.appendChild(maiorNumero);

  var somaNumero = document.createElement("p");
  somaNumero.innerText = ` Somando todos os valores temos ${soma} `;
  results.appendChild(somaNumero);

  var mediaNumero = document.createElement("p");
  mediaNumero.innerText = `A media dos valores digitados é ${media.toFixed()} `;
  results.appendChild(mediaNumero);
}
