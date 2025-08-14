

function checkWeight(weight)
{
    return weight > 100
}

let weights = [10, 20, 30, 40, 50, 60, 70, 80, 90]


let olderweight = weights.some(checkWeight)

console.log(olderweight)






let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log("numarray:", numArray)


console.log("revesing array:", numArray.reverse())






const numIterators = numArray.values()

for(let value of numIterators)
{
    console.log(value)
}
