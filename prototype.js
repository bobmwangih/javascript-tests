
function Cart(a,b,c){
    this.item=a;
    this.amount=b;
    this.price=c;
}
Cart.prototype.checkout=function(){
    return (`you have bought ${this.amount} ${this.item} at ${this.price}`);
}

//var mondayShopping=new Cart("memoryCards",2,2000);
//console.log(mondayShopping.checkout());
//creating a sub class
function LikedItems(a,b,c){
    Cart.call(this,a,b,c);
    console.log(`you have liked: ${a}`);
}
LikedItems.prototype=Object.create(Cart.prototype); //lets Liked item inherit cart's methods that are defined outside its block
LikedItems.prototype.constructor=LikedItems; //creates a constructor for LikedItems

var mondeyShopping= new LikedItems("iphone",2,96000);
console.log(mondeyShopping.checkout());








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
// console.log(add(3,4)


