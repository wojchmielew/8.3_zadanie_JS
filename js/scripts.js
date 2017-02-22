var triangle1Area = getTriangleArea(4, 11);
console.log("Powierzchnia 1 trójkąta: ", (triangle1Area) )
var triangle2Area = getTriangleArea(2, -8);
console.log("Powierzchnia 2 trójkąta: ", (triangle2Area) )
var triangle3Area = getTriangleArea(7, 7);
console.log("Powierzchnia 3 trójkąta: ", (triangle3Area) )

function getTriangleArea(a, h) {
        
    if (a < 0 || h < 0) {
        console.log('Nieprawidłowe dane obiektu poniżej'); 
    }
    return (a * h / 2)
        
}