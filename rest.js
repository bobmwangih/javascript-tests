function add_params(...varArgs){
    let array=['green',"hearts"];
    for(let i = 0;i < varArgs.length;i ++){
        array.push(varArgs[i]);
    }
    return array;
}
console.log(add_params("roses","violets"));

