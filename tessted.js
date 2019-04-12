function reverse(arr){
    if (arr.length<=1){
        return arr;
    } else{
        let array=[];
        return reverse(arr.slice(1)).concat(arr[0])
    }
}
 console.log(reverse([1,0,1,0,2,3]));


 




function intersect_arrays(a, b) {
    var sorted_a = a.concat().sort();
    console.log(sorted_a);
    var sorted_b = b.concat().sort();
    console.log(sorted_b);
    var common = [];
    var a_i = 0;
    var b_i = 0;

    while (a_i < a.length
           && b_i < b.length)
    {
        if (sorted_a[a_i] === sorted_b[b_i]) {
            common.push(sorted_a[a_i]);
            a_i++;
            b_i++;
        }
        else if(sorted_a[a_i] < sorted_b[b_i]) {
            a_i++;
        }
        else {
            b_i++;
        }
    }
    return common;
}

var array1 = ["cat", "sum", "fun", "hut"]; //modified for additional match
var  array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];
console.log(intersect_arrays(array1, array2));




let str="the demo";
let wharever =str.split(' ');
wharever.pop();
console.log(wharever);
wharever.unshift('demo');
console.log(wharever);
console.log(wharever.toString().split().join());



let arr=['kip','lily'];
console.log(arr.includes('lily'));

function arrays(arr1,arr2){
    let similar=[];
    arr1.forEach(element => {
        if(arr2.includes(element)){
            similar.push(element);
        }
    });
    console.log(similar);
}
arrays(['bob','kip','lily'],['phylis','stosh','kip','lily']);


let pin=0.0123;
console.log(pin.includes('.'));


function validatePIN (pin) {
    let num = parseInt(pin);
    if(typeof num=="number"){
        if((num.length === 4 || num.length === 6) && (num >= 0) && (/^\d+$/)==true){
        return true;
       } else {
         return false
       }
      }
    else {
       return false
      }
    }    
    console.log(validatePIN('0000'));


    function validate(pin){
        if (/^(\d{6}|\d{4}$)/g.test(pin) === true) {
            return true;
        }else {
            return false;
        }
        }
        console.log(validate(120456));




        function valider(pin){
            return /^(\d{4}|\d{6})$/g.test(pin);
        }
        console.log(valider(4423));

    