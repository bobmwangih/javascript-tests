//check vowels

function theinputString(str)
{
   
        if(str.match(/[aeiouAEIOU]/))
        {
        console.log("The Input String" +" " +str + " " + "has a Vowel in it");
        }
        else {
        console.log("The Input String" + " " +str + " " + "has not a Vowel in it");
        }
       // return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
    
}
theinputString("anystring");


//print vowels size

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("lets go eat"));
