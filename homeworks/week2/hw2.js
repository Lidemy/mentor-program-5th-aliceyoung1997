function capitalize(str) {
    var ans = ''
    code = str.charCodeAt(0)
    if (code >= 97 && code <= 122) {
        ans += String.fromCharCode(code - 32)
        for (var i = 1; i < str.length; i++) {
            ans += str[i]
        }
        return ans
    } else if (code >= 65 && code <= 90) {
        return str
    } else {
        return str
    }

}



console.log(capitalize('hello'));
