function addEventListener(param) {
    console.log(param);
}
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');
var itemsByTagName = document.getElementsByTagName('li');
add.addEventListener('click', function(e) {
    list.innerHTML += '<li>item ' +itemsByTagName.length, '</li>';

});