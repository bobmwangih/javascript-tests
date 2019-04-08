////symbols are used as unique identifiers for object properties


let obj={
    name:'gathee',
    id:001
}

const idSymbol=Symbol('id');
obj[idSymbol]=001;

console.log(obj[idSymbol]); ////accessing an object 
console.log(obj);

