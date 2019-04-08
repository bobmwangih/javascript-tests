let a ="abcd1234"
let b =/[a-z0-9]/g
console.log(b.test(a));

//// --->\w matches alphanumerics
//// --->\W matches opposite of alphanumerics
//// ---->\d --digits,,\D opposite
//// ---->\s  --whitespaces ,,,\S opposite of whitespaces
////^t.+h$ ---->starts with t and ends with h