///generates the values when needed not all of them at once

function *infiniteNoMaker(){
    i=0;
    while(true){
        yield i;
        i++;
    }
}
let iterator=infiniteNoMaker();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
