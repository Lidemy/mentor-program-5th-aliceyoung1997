// eslint-disable-next-line
function solve(lines) {
  const n = Number(lines[0])
  for (let j = 1; j <= n; j++) { // lines = [3, '1 2 1', '1 2 -1' , '2 3 -1']
    console.log(game(lines[j])) // lines[j] = '1 2 -1'
  }
}
function game(line) {
  const temp = line.split(' ')
  const A = temp[0] // string
  const B = temp[1]
  const K = Number(temp[2])
  // A,B 值相同
  if (A === B) {
    return 'DRAW'
  }
  if (A.length !== B.length) {
    if (A.length > B.length && K === 1) {
      return 'A'
    } else if (A.length > B.length && K === -1) {
      return 'B'
    } else if (A.length < B.length && K === 1) {
      return 'B'
    } else if (A.length < B.length && K === -1) {
      return 'A'
    }
  } else if (A.length === B.length) {
    for (let i = 0; i < A.length; i++) {
      if (Number(A[i]) === Number(B[i])) {
        continue
      } else if (Number(A[i]) > Number(B[i]) && K === 1) {
        return 'A'
      } else if (Number(A[i]) > Number(B[i]) && K === -1) {
        return 'B'
      } else if (Number(A[i]) < Number(B[i]) && K === 1) {
        return 'B'
      } else if (Number(A[i]) < Number(B[i]) && K === -1) {
        return 'A'
      }
    }
  }
}
