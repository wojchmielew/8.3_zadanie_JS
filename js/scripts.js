var textBasic = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var textAnimal = 'Zielone słonie';
var textAnimalUpperCased = textAnimal.toUpperCase();
console.log(textAnimalUpperCased);

var textChange = textBasic.replace('Papugi', textAnimalUpperCased);
var halfText = textBasic.length / 2

console.log(textChange);
console.log(textChange.slice(0, textChange.length / 2));

var textZajace = 'Fioletowe zające';
var textKucharki = 'Lewitujące kucharki'
var changeFirstWord = textBasic.split(' ', 1);
var changeWordFirst = textBasic.split(' ', 1);
var textChangeBasic = textBasic.replace(changeFirstWord, textZajace);
var textChangeKucharki = textBasic.replace(changeWordFirst, textKucharki);

console.log(textChangeBasic);
console.log(textChangeKucharki);
console.log(textBasic);