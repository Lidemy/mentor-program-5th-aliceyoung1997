function join(arr, concatStr) {
    var ans = ''
    for (var i = 0; i < arr.length; i++) {
        ans += arr[i] + concatStr
    }
    return ans
}


function repeat(str, times) {
    var string = ''
    for (var i = 1; i <= times; i++) {
        string += str
    }
    return string
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
