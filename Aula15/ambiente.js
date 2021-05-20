let num = [2, 5, 0];
num.sort();

console.log(`Nosso vetor é o ${num}`);
console.log(`O  primeiro valor do vetor é ${num[0]}`);
console.log(`Nosso vetor é o ${num}`);

for (let i = 0; i < num.length; i++) {
  console.log(` O valor do indice ${i} é :${num[i]}`);
}
console.log("-------------------");
for(let i in num){
 console.log(` O valor do indice ${i} é :${num[i]}`);
}

let pos = num.indexOf(5)
 if (pos==-1){
     console.log(`o valor não foi encontrado`);
 }else{
    console.log(` O valor do indice ${pos} é :${num[pos]}`);
 }