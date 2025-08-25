

let name = "krushnal"


let text = "hello krushnal"

console.log("text:" + text)


console.log("char at:" + text.charAt(4))


console.log("joined string:" + text.concat(" good afternoon"))


console.log("ends with:" + text.endsWith("l"))


console.log("includes  b character in text variable ? :" + text.includes("b"))


console.log("index of:" + text.indexOf("l"))


console.log("index of (not available will show) :" + text.indexOf("bhatti"))


console.log("last index:" + text.lastIndexOf("krushnal"))


console.log("length of string:" + text.length)





let a = "ab";
let b = "cd";
console.log("local Compare", a.localeCompare(b));
console.log("local Compare", b.localeCompare(a));
console.log("local Compare", a.localeCompare(a));