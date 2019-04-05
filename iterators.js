
//iterators unlike loops dont need to load the entire data inorder to execute
//generator builds a collections and has ability to return a value one at a time.

///simple iterator

let myArray=[1,2,2,3,4,5,6];
let iterator=myArray[Symbol.iterator]();
for (const elem of iterator){
    console.log(`your element is ${elem}`);
}


//fibonacci

function *fib(){
    let current=0;
    let next=1;
    while(true){
        yield current;
        let curNext=current+next;
        current=next;
        next=curNext;
    }
}
let iterator=fib();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

