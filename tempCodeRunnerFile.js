

var strng="give it your 100%";
console.log(/i/.test(strng)); // ----->checked for character i and returns true or false
console.log(/i/.exec(strng));
var chck=/\d/g;
var result=strng.match(chck);
console.log(String(result));