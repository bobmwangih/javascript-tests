
const mystrey="interview";

const obj={
    p1:'one',
    p2:'two',
    [mystrey]:42,

};

console.log(obj.mystrey);//////////returns undefined
console.log(obj.interview); /////returns the desired answer.


//destructing rest and spread

const [firstNum, ...restOfNums]=[1,2,3,4,5,6,7];
console.log(firstNum);
console.log(restOfNums);

const obj={
    first:'bob',
    second:'Gitch',
    third:'wacha ujuaji',
    age:'wacha bana',
    weight:'kwani we ni polisi',
}
const {first,second, ...restofItems}=obj;
const obj2={...restofItems};
console.log(obj2);


function vowels(str){
var m = str.match(/[aeiou]/gi);
return m === null ? 0: m.length;
}
 console.log(vowels("bfvcdfdrcr"));
