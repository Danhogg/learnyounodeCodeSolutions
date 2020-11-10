const array_arg = process.argv
function sumArgValues(myArray) {
    const arguements = myArray.slice(2, )
    let sum = 0
    for (let i = 0; i < arguements.length; i++) {
        if (typeof Number(arguements[i]) === 'number') {
        sum += Number(arguements[i])
        }
    }
    console.log(sum)
    return sum
}

sumArgValues(array_arg)