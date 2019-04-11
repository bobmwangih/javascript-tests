
     function getCount(str){
        vowelsCount = 0;
        var m = str.match(/[aeiou]/gi);
     m === null ? vowelsCount: m.length; 
    
    
        return vowelsCount;
    }
    console.log(getCount("gygyyaeeovdyv"));