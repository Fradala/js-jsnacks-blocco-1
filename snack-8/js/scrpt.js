let numeroUtente = prompt("Inserisci un numero di 7 cifre");

let sommaCifre = 0

for (let i = 0; i < numeroUtente.length; i++) {
    sommaCifre += parseInt(numeroUtente[i]);
}

  console.log("Il numero inserito è:", numeroUtente);
  console.log("La somma delle cifre è:", sommaCifre);
 