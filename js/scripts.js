
var a = '-2';
    b = '4';
    value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik: '+value+' ');


if (value > 0) {
    console.log('wynik dodatni');
}   else if (value < 0) {
    console.log('wynik ujemny');
}   else {
    console.log('równy zero');
}