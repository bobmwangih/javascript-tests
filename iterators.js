
//this program will overwork the computer
function combos(list) {
    const n = list.length;
    let result = [];
   
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            result.push([list[i], list[j]]);
        }
    }
     
    return result;
}
 
console.log(combos(['a', 'b', 'c', 'd']));

//thats where iterators and generators come in
//iterators unlike loops dont need to load the entire data inorder to execute
//generator builds a collections and has ability to return a value one at a time.

function *combos(list) {
    const n = list.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            yield [list[i], list[j]];
        }
    }
}
 
let it = combos(['a', 'b', 'c', 'd']);
console.log(it.next());

