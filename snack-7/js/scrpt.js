let numeriDispari = [];

for (let i = 0; i < 6; i ++) {
  let numero = parseInt(prompt("Inserisci un numero"));

    if (!isNaN(numero) && numero % 2 != 0) {
    numeriDispari.push(numero);
  }
}


console.log("Numeri dispari inseriti:", numeriDispari);

