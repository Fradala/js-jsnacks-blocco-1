const numeri = [];

const primoNumeroUtente = prompt ('inserisci un numero');
const secondoNumeroUtente = prompt ('inserisci un numero');
const terzoNumeroUtente = prompt ('inserisci un numero');
const quartoNumeroUtente = prompt ('inserisci un numero');
const quintoNumeroUtente = prompt ('inserisci un numero');
const sestoNumeroUtente = prompt ('inserisci un numero');

let pari

for (let i = 0; i < numeri.length; i ++){

    if(numeri[i] % 2 == 0){
       pari.push(numeri[i])
       console.log(numeri[i])
    }

}


