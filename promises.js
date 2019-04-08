

///promises.all---------->waits for all promises listed in the array to finish the executes the then()method
///////promise.race ----------->waits for any of the promises listed in the array  to finish then executes the then()method

console.log('person 1:ndo hii ticket');
console.log('person 2:ndo hii ticket');
console.log('person 3:ndo hii ticket');
//person 3 doesnt have a ticket,is waiting for wife to bring ticket. makes a promise to the attendant
const wifeBringingTicket =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)//////////////////////this promise will execute after 3000 milliseconds,,the program doesnt wait.
});
/*wifeBringingTicket.then((t)=>{
    console.log(`person 4:ndo hii ${t} `);
}) */

const getPopcorns=wifeBringingTicket.then((t=>{
    console.log('wife:shika tickets'+"\n"+'hussy:tuingie'+"\n"+'wife:nataka popcorns'+"\n"+'hussy:sawa nipe milliseconds 2000')
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve(`${t} popcorns ndo hizi mama`)
    }))
}))
getPopcorns.then((t)=>{
    console.log('person 4:ndo hii ticket')
})

console.log('person 5:ndo hii ticket');
console.log('person 6:ndo hii ticket');
