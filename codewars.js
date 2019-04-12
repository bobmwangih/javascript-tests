//challenge 1
function array_diff(a, b) {
    let mpya=[];
    for(i=0;i<a.length;i++){
      if(b.indexOf(a[i])==-1){
      mpya.push(a[i])}
      }
      return mpya;
    }

//challenge 2