function gerarTabuada() {
  var inicio = document.getElementById("txtnumber");
  var res = document.getElementById("selres");

  if (inicio.value === "") {
    alert("Impossível Gerar Tabuada, Por favor digite um número!!!");
  } else {
    var f = Number(inicio.value);

    for (let c = 0; c <= 10; c++) {
      var numero = document.createElement("option");
      numero.text += `${c} x ${f} = ${c * f} `;
      numero.value= `tab${c} ` 
      res.appendChild(numero);
    }
  }
}
