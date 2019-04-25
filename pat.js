function compare(arr1,arr2){
  for (val of arr1){
    while(arr2.includes(val*val)){
      arr2.pop(val*val);
    }
  }
  //console.log(arr2.length);
  if(arr2.length==0){
    console.log(true)
  }
  else{
    console.log(false);
  }
}

compare([121, 144, 19, 161, 19, 144, 19, 11],[11*11, 121*121,'n', 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]);