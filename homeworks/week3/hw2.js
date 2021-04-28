// eslint-disable-next-line
function solve(lines) {
  const temp = lines[0].split(' ')
  const a = Number(temp[0])
  const b = Number(temp[1])
  for (let i = a; i <= b; i++) {
    isNarciss(i)
  }
}
function isNarciss(num) {
  const stringNum = num.toString()
  const digit = stringNum.length
  const split = stringNum.split('') // array ['1', '5', '3']
  let sum = 0
  for (let i = 0; i < digit; i++) {
    sum += Math.pow(Number(split[i]), digit)
  }
  if (sum === num) {
    console.log(num)
  }
}
