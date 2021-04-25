function reverse(str) {
    var words = ''
    var x = str.length
    x = x - 1
    for (var i = x; i >= 0; i--) {
        words += str[i]
    }
    console.log(words)
}

reverse('hello');
