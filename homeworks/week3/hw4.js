// eslint-disable-next-line
function solve(lines) {
  const str = lines[0]
  if (sentence(str)) {
    console.log('True')
  } else {
    console.log('False')
  }
}
function sentence(str) {
  const n = str.length
  for (let i = 0; i <= (n / 2); i++) {
    if (str[i] !== str[n - i - 1]) {
      return false
    }
  }
  return true
}
