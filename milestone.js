//first function 


function myFirstFunction(a,b){
    
    return console.log(a+" "+b);
}
myFirstFunction("ethiopia","things");
 console.log(myFirstFunction);


//objects

var firstObject={name:"bob",age:"22",hobby:"dancing",maEx:["chepto","chepchumba"]}
console.log(firstObject.name+" is "+ firstObject.age +" years "+"and likes "+firstObject.hobby );
console.log(firstObject.maEx[0]);

//
function displayTime(){
    return Date();
}
console.log(displayTime());

//string locater
//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
var x="this is a string";
var loc=x.indexOf("a");
console.log(loc);


//replaces the string,case insensitive

var x ="this is the test of tests ";
var y =x.replace(/TEST/i ,"floss")
console.log(x +"\n"+ y);

//To replace all matches, use a regular expression with a /g flag (global match):
 
var x="this is test of tests";
var y =x.replace(/TEST/ig,"floss");
console.log(x +"\n"+ y);



//infinity

var number=2;
var answer="";
while(number!=Infinity){
    number*=number;
    answer+=number + "\n";
}
console.log(answer);

//Number() can be used to convert JavaScript variables to numbers:

console.log(number(true));

//arrays

var bastards=["nosy","jealous","violent"];
console.log(bastards.push("lazy"));
console.log(bastards.unshift("noisy"));
bastards[bastards.length]="dirty";
console.log(bastards.splice(2,1,"slappy","savages"));
//2->adds the element at position 2
//1->removes one element 

console.log(bastards);
//console.log(bastards[3]);
console.log(bastards.toString());
//bastards.unshift("noisy");

//array methods.
//array push() adds to the array ->returns the array length.
//pop() removes the last element
//shift() removes the first element
//unshift() adds to an element at the beginning
//The length property provides an easy way to append a new element to an array
// elements can be deleted by using the JavaScript operator delete
//The splice() method can be used to add new items to an array:
//The concat() method creates a new array by merging (concatenating) existing arrays:
//the concat() method can also take values as arguments:
//The slice() method creates a new array. It does not remove any elements from the source array.
//The sort() method sorts an array alphabetically:
//function(a, b){return a - b} -->sorts numbers
//if -ve -->a is sorted before b
//if +ve ,b is sorted before a
// if 0 then it reamins the same



let arr1=["water","beer","whisky"];
let arr2=["JugDaniels","changaa","keg","busaa"];
let arr3=arr1.concat(["jeigmeister","vodka","wine"]);
var concotion=arr1.concat(arr2,arr3).toString();
console.log(concotion);
console.log(arr3.length);
console.log(arr3.sort());

//sorting numbers

let marks=[1,2,40,70,20,10];
var arrangedMarks=marks.sort(function(a,b){return (b-a)});
console.log(arrangedMarks);
 
//getting the highest number in the array

function largestNum(mark){
    return Math.max.apply(null,mark);
}
console.log(largestNum(marks));

//sorting an array

let cars =[{type:"ferrari",year:2016},{type:"buggati",year:2018},{type:"lamboghini",year:2017}];
let displayCars=()=>{
    console.log(cars[0].type + "  "+ cars[0].year);
    console.log(cars[1].type + "  "+ cars[1].year);
    console.log(cars[2].type + "  "+ cars[2].year);
}
console.log(displayCars());
/*let mySortedCars=()=>{
    cars.sort(function(a,b){return a.year-b.year});
    displayCars();
}
console.log(mySortedCars());
**                                sorts using the year.
*/
let aphaSort=()=>{
    cars.sort(function(a,b){
        var x=a.type.toLowerCase();
        var y=b.type.toLowerCase();
        if (x<y){return -1;}
        if (x>y){return 1;}
        return 0;
    });
    displayCars();
}
console.log(aphaSort());
//                                sorts in alphabetical order.

//The forEach() method calls a function (a callback function) once for each array element.
var kagari=""
let gari=["benz","lambo","maserati","porsche","probox"]
 gari.forEach(myGari)

 function myGari(x){
    kagari+=x+ "\n";
}  
 /*var myGari=(x)=>{
    kagari+=x+ "\n";
} */
var magari=gari.map(ongeza);
function ongeza(y){
    return "less"+" "+y;
}
console.log(kagari);
console.log(magari);

//The map() method creates a new array by performing a function on each array element.

let nums=[3,4,5,6,7,8,9]
var num1=nums.map(multiplier); //creates new array
var overFive=nums.filter(myFilter); //creates a new filtered array
var sum=nums.reduce(mySum,100); //the reduce() method runs a function on each array element to produce (reduce it to) a single value.
var allOverFive=nums.every(myFive); //very checks every array element if it satisfys an condition 
function multiplier(x){
    return x*2;
}
function myFilter(x){
    return x>=5;
}
function mySum(total,x){
    return total+=x;

}
function myFive(x){
    return x>5;
}
console.log(num1);
console.log(overFive);
console.log(sum); //specified an initial value of 100!
console.log(allOverFive);

// Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.pow(8,2));


//math.ceil --->rounded up to the nearest integer
//math.floor ----> rounded down to the nearest interger

console.log(Math.floor(Math.random()*10));

//ternary :::variablename = (condition) ? value1:value2 
var age=(20>18)? "greater":"smaller";
console.log(age);


//let array = [2,2,345,5,7,6,4,77];
function getSeco_largest(arrayz){
  let sorted_array = (arrayz.sort(function(a,b){return a-b}));
  console.log(sorted_array);
  console.log(sorted_array[sorted_array.length - 2]);
}
getSeco_largest([2,2,345,5,7,6,4,77]);


let arry1 = [7,8,23,0,3,14];
console.log(arry1.sort((a,b)=>a-b));

function myArrayMax(arr) {
    return Math.max.apply( null,arr);
  }
  console.log(myArrayMax([2,2,345,5,7,6,4,77]));


///switch 

var day;
switch(new Date().getDay()){
    case 0:
    day="sunday";
    break;
    case 1:
    day="monday";
    break;
    case 2:
    day ="tuesday";
    break;
    case 3:
    day ="wednesday";
    break;
    case 4:
    day="thursday";
    break;
    case 5:
    day="friday";
    break;
    case 6:
    day="sat";
    break;
}
console.log(day);




//javascript loops

// -->for loop
// -->for in
// -->while loop
// -->do while
 
//for loops

var cars=["probox","sienta","ractis"];
console.log(cars.constructor);
var i=0,len=cars.length,text="";
//i=0,len=cars.length,text="";i<len;i++    ----->using the for loop
/*for(i in cars){      //------------------------->using the for in loop
    text+=cars[i]+"\n";
    
} */
do{
    text+=cars[i]+"\n"; //the do
    i++;                //while
}       
while(i<len);      
console.log(text);

//while loops

var i=0;
text="";
do{
    text+=i+"\n";
    i++;
   // if(i===3){break};   // ------->usage of the break statement..ends the loop
   if (i===4){continue};  // ------->usage of the continue statement...jumps to the next loop
}
while(i<10);
console.log(text);

//regular expressions

var str ="1,2,3,4,5,6,7,8,9";
var sach=/[1-6]/g;        // -------->s=regeq for finding numbers between 1-6   
var result=str.match(sach);
console.log(result.toString());


var strng="give it your 100%";
console.log(/i/.test(strng)); // ----->checked for character i and returns true or false
console.log(/i/.exec(strng));
var chck=/\d/g;
var result=strng.match(chck);
console.log(String(result));

//hoisting
//default behavior of moving all declarations to the top of the current scope

//variables declared using const and let are not hoisted!!! only those declared with var
//declarations though,not initializations e.g var x; not var x=5;
//if using strict mode ,hoisting isnt allowed. it prevents using undeclared variables

 //performance

 //var i;
//for (i = 0; i < arr.length; i++) { --->bad code,,executes get arr.length everytime its looping

//var i;
//var l = arr.length;
//or (i = 0; i < l; i++) {  --->better code

var example={firstName:"bob",
            secondName:"mwangi",
            /* fullname:function(){
                return this.firstName + " "+this.secondName;
            } ///this is a a method */
            //setter
            get fullname(){
                return this.firstName+" "+this.secondName;
            }
        };
        console.log(example.fullname);

///using the object constructor function

function Person(a,b,c,d){
    this.jinaKwanza=a;
    this.jinaPili=b;
    this.age=c;
    this.personality=d;
    this.whoIsThis=()=>(this.jinaKwanza+" "+this.jinaPili+" "+this.age+" "+this.personality);
}
var myMan =new Person("hewlett","packard","77","smart");
console.log(myMan.whoIsThis());

function Car(name,year,origin){
    this.carName=name;
    this.yom=year;
    this.country=origin;
}

var volvo= new Car("volv0 v6",2017,"U.K");
var benz=new Car("mercedez amg 4matic",2018,"germany");
var renault=new Car("renault v6",2016,"france");
Car.prototype.cylinderCapacity=5700; /////////--------->inheritance,adds to all child classes
Car.prototype.magari=function(){return this.carName+" "+this.yom+" "+this.country+" "+this.cylinderCapacity;}
//Car.prototype.magari=()=>(return this.carName+" "+this.yom+" "+this.country+" "+this.cylinderCapacity); 
//------>note the arrow notation doesnt support usage of this
console.log(benz.magari());
console.log(Object.getOwnPropertyNames(renault));

//with call(), an object can use a method belonging to another object

var join={
    specs:function(a,b){
        return this.make+" "+this.cc+" "+a+" "+b
    }
}
var bugatti={
    cc:6000,
    make:2018
}
var ferrari={
    cc:6200,
    make:2015
}

//console.log(join.specs.call(ferrari,"super","fast"));   //----->calls another object using the call()
console.log(join.specs.apply(bugatti,["is super","fast"])); //-->difference with call is apply takes an array as arguments

//in math.max.apply(null,[array]) ------>to find the max number in an array.



var array_names = ['parto','cyrus','dickens', 'lilian', 'phyliss','bob', 'george'];
let iterator=array_names[Symbol.iterator](); /////////iterator shit
/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */
for (const elem of iterator){
    console.log(elem);
}

function checker(whichArray,jina){
    var x=whichArray.indexOf(jina.toLowerCase());
    if (x>0){  
        console.log(`Wolaa! Your name : ${jina} exists in position ${x} `);
    }else{
        console.log(`The name :${jina} doesnt exist in the array. `);
    }
}
checker(array_names,"Bob");



//checks the existence of a name in an array containing names and returns it position index:
var array_names = ['parto','cyrus','dickens', 'lilian', 'phyliss','bob', 'george'];
function check_array(items, value){
  if (items.includes(value)) {
    for (var i = 0; i < items.length; i++) {
      if (items[i] === items[items.indexOf(value)]) {
        console.log(`'The name '${value}' exist: and is indexed at position ${i} in the array'`);
      }
    }
  }
  else if (!items.includes(value)) {
    console.log(`'the name '${value}' doesn't exist: Please search for another name in the Array'`);
  }
}
check_array(array_names,'cyrus');



///////////for of
let array1=new Set(['tom','dick','dick','harry']);
for(let val of array1){
    console.log(val);
}
