function add_params(...varArgs){
    let array=['green',"hearts"];
    for(let i = 0;i < varArgs.length;i ++){
        array.push(varArgs[i]);
    }
    return array;
}
console.log(add_params("roses","violets"));


let x =function(...n){
    console.log(n);
}
x('born','walk','have fun','die');


arr1=[1,2,3,4];
arr2=[5,6,7,8];
arr1.push(...arr2);   ///spread
console.log(arr1);

var shitHappens=['go to school','get a gf','pay bills'];
var life=['born','walk',...shitHappens,'die'];              ///////spread 
console.log(life);

