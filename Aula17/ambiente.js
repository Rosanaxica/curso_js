let amigo = []
console.log(typeof amigo);

let friend = {
    nome:'Jose',
    peso:35.4,
    engordar(p=0){
        console.log("engordou")
        this.peso+=p
    }
}

friend.engordar(2)

console.log(`${friend.nome} pesa ${friend.peso}`)
