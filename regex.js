let a ="abcd1234"
let b =/[a-z0-9]/g
console.log(b.test(a));

//// --->\w matches alphanumerics
//// --->\W matches opposite of alphanumerics
//// ---->\d --digits,,\D opposite
//// ---->\s  --whitespaces ,,,\S opposite of whitespaces
////^t.+h$ ---->starts with t and ends with h


function vowels(str){
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0: m.length;   ////usage of tanary 
    }
     console.log(vowels("bfvcdfdrcr"));



     function getCount(str){
        vowelsCount = 0;
        var m = str.match(/[aeiou]/gi);
     m === null ? vowelsCount: vowelsCount= m.length; 
    
    
        return vowelsCount;
    }
    console.log(getCount("gygyyaeeovdyv"));