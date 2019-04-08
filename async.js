////async  functions starts with a prefix async and always returns promise
///goes hand in hand with 


console.log('person 1:ndo hii ticket');
console.log('person 2:ndo hii ticket');
console.log('person 3:ndo hii ticket');
const preMovie=async()=>{
    const mamaAnaletaTicket=new Promise((resolve,reject)=>{
        setTimeout(()=> reject('ticket'),3000);
    });
    const popCorns=new Promise((resolve,reject)=>{resolve('popcorns')});
    const candy=new Promise((resolve,reject)=>{resolve('cande')});
   
     let ticket
     try{
         ticket=await mamaAnaletaTicket;    //////code below the await key word will only execute after the promise is resolved
    console.log('mama:tickets ndo hizi');
     }catch(e){
         ticket='sad face'

     }
    let popcorns=await popCorns;
    console.log('hussy: popcorns ndo izi ');
    let cande=await candy;
    console.log('candy secured'); 

    /* let [ticket,popcorns,cande]=await Promise.all([mamaAnaletaTicket,popCorns,candy]); //all at once
    console.log('we are all set for the movie'); */

    return ticket;
}
preMovie().then((t)=>console.log(`person 3:ndo hii ${t}`));
console.log('person 5:ndo hii ticket');
console.log('person 6:ndo hii ticket');
console.log('person 7:ndo hii ticket');