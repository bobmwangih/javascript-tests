//prototype helps an object inherit the properties of another object
let simpleObj={
    getName(name){
        this.name=name;
        console.log(this.name);
    }
};

let newobj=Object.create(simpleObj);
//simple obj is the prototype
//newobj.getName('Bob');

Object.getPrototypeOf(newobj);


//newobj.prototype.add=function (a,b){
 //   return a+b;
// };
// console.log(add(3,4));
