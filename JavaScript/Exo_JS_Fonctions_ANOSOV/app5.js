let phrase = prompt("Ecrivez quelque chose");

function functReverse() {
    let tablo = phrase.split("");
    let tabloReverse = tablo.reverse("");
    let phraseReverse = tabloReverse.toString("");
    return phraseReverse.replace(/,/g, "");
}

console.log(functReverse());