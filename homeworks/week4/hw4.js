const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'k5kbzqp55c30u5o6z5amlvrzmb6zwu'
  }
}
function callback(error, response, body) {
  const data = JSON.parse(body)
  for (let i = 0; i < data.top.length; i++) {
    console.log(data.top[i].viewers, data.top[i].game.name)
  }
}
request(options, callback)
