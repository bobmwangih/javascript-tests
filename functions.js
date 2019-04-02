//declaration method
//expression method
//arrow notation 

let silence=true;
function silencer(){
    if(silence){
        console.log("stosh ako njaa");
    }
    else {
        console.log("stosh ameshiba");
    }
}
silencer();


//still declarative method

function simpleFunc(a,b,c){
    if(typeof arguments[0] &&typeof arguments[1]==='number'){
        console.log(`${a/b} is the divident of ${a} and ${b}`);
    }
    //console.log(arguments[0]);
    //console.log(arguments[1]);
    //console.log(arguments[2]);
}
simpleFunc(1,2,"third argument");

//
function validatconsole.log(sumProd);e(a,b,c){
    if (typeof arguments !== undefined){
        console.log(`${a/b} is the divident of ${a} and ${b} `);

    }
}
validate(1,2,"shit");

//factorial 
//for loop
 
function factorial(n){
    if (n==1||n==0) return 1;
    let product =n
    for(n;n>1;n--){
        product*=(n-1);
    }
    return product;
}
console.log(factorial(5));

//while loop
function fact(z){
    if(z==1||z==0) return 1;
    let multiply=z
    while(z>1){
        multiply*=(z-1);
        z--;
    }
    return multiply;
}
console.log(fact(7));

//function expression 

let facts= function(num){
    if(num==1||num==0) return 1;
    let jibu=num
    while(num>1){
        jibu*=(num-1);
        num--;
    }
    return jibu;
};

//arrow notation:

let factorio=(y)=>{

}

let add=(a,b)=>a+b  //arrow notation .ideal for short functions

function add(a,b){
    return a+b;     //declarative ideal for longer functions.
}

const prod=(a,b)=>a*b;
const sum=(c,d)=>c+d;
const sumProd=sum(10,prod(4, 5));
const div=(e,f)=>e/f;
const divAns=div(60,sumProd);
console.log(sumProd);
console.log(divAns);


//temporal deadzone
var my_a,my_b;
function myFun(a,b){
    my_a=a;
    console.log(typeof my_a)
    //let my_a=a      deadzone because of using let
    my_b=b;
    console.log(my_b);
}
myFun(1,2);

function fun(x,y){
    const myX=x;
    console.log(typeof myX);
    
    const myX=x+y;
    console.log(typeof myX);
}
fun(3,4);


////w3 school---maxmin--array sort 

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(range(23,35));


