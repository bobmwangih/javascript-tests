
///a for in iterates over the keys in a javascript object 
//// a for of itarates over the values of the object.--->cannot be used in objects because the are not iterable.

let car={name:'vanguard',cc:'2000',yom:2015}
for (key in car){
    console.log(key);
}

let cars=['vanguard','2000cc','yom:2015']
for (val of cars){
    console.log(val);
}