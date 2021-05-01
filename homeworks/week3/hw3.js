// eslint-disable-next-line
function solve(lines) {
  const n = Number(lines[0])
  for (let i = 1; i <= n; i++) {
    console.log(prime(Number(lines[i])))
  }
}
function prime(n) {
  const arr = []
  if (n === 1) {
    return 'Composite'
  } else {
    for (let j = 1; j <= n; j++) {
      if (n % j === 0) {
        arr.push(j)
      }
    }
  }
  if (arr.length === 2) {
    return 'Prime'
  } else {
    return 'Composite'
  }
}
