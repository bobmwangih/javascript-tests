function push_params(...varArgs) {
	let arr = [];
	for (let i = 0; i < varArgs.length; i++) {
		arr.push(varArgs[i]);
	}
	return arr;
}
// output -> ["mug", "spoon", "knife"]
console.log(push_params("cold", "warm", "hot"));