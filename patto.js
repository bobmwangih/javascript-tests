
function comp(array1, array2){
  //your code here
  for(i = 0; i < array1.length; i++){
 
  let mySquare = array1[i] * array1[i];
  
    if(array2.includes(mySquare)) {
        array2.pop(mySquare)     
    };
  }; 
  if (array2.length == 0) {
        return true;
    }
    else {
        console.log(array2);
    }
}


var array1 = [121, 144, 19, 161, 19, 144, 19, 11];
var array2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(array1,array2);