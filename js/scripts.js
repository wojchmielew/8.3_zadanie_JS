/*var tablica = ['a', 'b', 'c'];
tablica.splice(1, 0, 'x', 'y', 'z');
console.log(tablica);
var tablica = ['a', 'x', 'y', 'z', 'b', 'c'];
var x = tablica.splice(2, 2);
console.log(tablica);  
console.log(x);
var namesWomen = ['Asia', 'Kinga', 'Tola', 'Grażyna', 'Kasia', 'Ola', 'Sylwia', 'Kinga'];
var namesMen = ['Tomek', 'Wojtek', 'Bartek', 'Konrad', 'Krystian', 'Teodor'];
var indexOfOla = names.indexOf('Ola');
console.log('szukana wartość znajduje się na ' + indexOfOla + ' pozycji tablicy');
console.log(names[indexOfOla]);
var values = [1, 2, 3, 4, 5, 6];
    var multipliedValues = values.map(function(value) {
    return value * 10;
});
console.log(values);
console.log(multipliedValues);*/


/* ZADANIE */
var namesWomen = ['Asia', 'Kinga', 'Tola', 'Grażyna', 'Kasia', 'Ola', 'Sylwia', 'Kinga'];
var namesMen = ['Tomek', 'Wojtek', 'Bartek', 'Konrad', 'Krystian', 'Teodor'];
var allNames = namesWomen.concat(namesMen);

console.log(allNames.length);
console.log(allNames);

allNames.splice(2, 0, 'Bożena');

console.log(allNames.length);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    var addedNewName = allNames.push(newName)     
    console.log('Imię', newName, 'nie występowało wcześniej. Dodano nowe imię: ', newName, '.')
}
else {
    console.log('Imię', newName, 'już występuje.')
}
console.log(addedNewName);
console.log(allNames);