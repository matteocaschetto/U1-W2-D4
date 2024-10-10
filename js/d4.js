/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

const risultato = area(2, 3);
console.log(risultato);

/*_____________________________________*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else return a + b;
}

const risultato1 = crazySum(3, 6);
console.log(risultato1);

/*_____________________________________*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  const differenza = Math.abs(x - 19);
  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

const risultato2 = crazyDiff(60);
console.log(risultato2);

/*_____________________________________*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (20 <= n <= 100 || n === 400) {
    return true;
  } else return false;
}

const risultato3 = boundary(0);
console.log(risultato3);

/*_____________________________________*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(parametro) {
  if (parametro.startsWith("EPICODE")) {
    return parametro;
  } else {
    return "EPICODE" + parametro;
  }
}

console.log(epify(" Ciao"));
console.log(epify(" Matteo"));
/*_____________________________________*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numpositivo) {
  return numpositivo % 3 === 0 || numpositivo % 7 === 0;
}

console.log(check3and7(7));
console.log(check3and7(3));
console.log(check3and7(10));
/*_____________________________________*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(string) {
  return string.split("").reverse("").join("");
}

console.log(reverseString("Ciao"));
console.log(reverseString("EPICODE"));
/*_____________________________________*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*_____________________________________*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*_____________________________________*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
