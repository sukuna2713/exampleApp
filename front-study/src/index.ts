const number = parseInt(process.argv[2]) || 0
const sum = [...Array(number).keys()].map(i => i + 1).reduce((acc,v) => acc + v)
console.log(sum)