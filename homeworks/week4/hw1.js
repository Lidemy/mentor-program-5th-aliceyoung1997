const request = require('request')

request.get('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  })
