var umArray = [1, 2, 3];
var outroArray = [4, 5];

function mover(umArray,outroArray){
    umArray.pop([2])
    outroArray.push(2)
    return console.log(umArray,outroArray)
}

console.log(mover(umArray,outroArray))