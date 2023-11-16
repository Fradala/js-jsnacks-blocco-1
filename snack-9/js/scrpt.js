const dueNumeri = parseInt( prompt("inserisci un numero di 2 cifre"));
const quattroNumeri = parseInt( prompt("inserisci un numero di 4 cifre"));

if(dueNumeri <= 10 && dueNumeri >= 99 && quattroNumeri >= 1000){
    let somma = dueNumeri;

} else if (dueNumeri <= quattroNumeri){

    somma *= 2;
    console.log('il risultato è' + somma)

}