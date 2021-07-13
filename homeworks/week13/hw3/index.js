const API_URL = 'https://api.twitch.tv/kraken/'
const myHeader = new Headers({
  Accept: 'application/vnd.twitchtv.v5+json',
  'Client-ID': 'k5kbzqp55c30u5o6z5amlvrzmb6zwu'
})

async function getTopGame() {
  const response = await fetch(`${API_URL}games/top?limit=5`, {
    method: 'GET',
    headers: myHeader
  })
  const data = await response.json()
  return data
}

async function getStreams(gameName) {
  const response = await fetch(`${API_URL}streams/?game=${gameName}&limit=20`, {
    method: 'GET',
    headers: myHeader
  })
  const data = response.json()
  return data
}

async function runGetTopGame() {
  try {
    const data = await getTopGame()
    for (let i = 0; i < data.top.length; i++) {
      const list = document.createElement('li')
      list.innerHTML = `<button class=gameName>${data.top[i].game.name}</button>`
      document.querySelector('.navbar__list').appendChild(list)
    }
    getGameStream(data.top[0].game.name)
  } catch (err) {
    console.log(err)
  }
}
runGetTopGame()

async function getGameStream(gamename) {
  try {
    const data = await getStreams(gamename)
    appendGame(data)
  } catch (err) {
    console.log(err)
  }
}

// 監聽 top 5 games 按鈕
document.querySelector('.navbar__list').addEventListener('click',
  (e) => {
    if (e.target.classList.contains('gameName')) {
      document.querySelector('.game').innerHTML = ''
      const gameName = e.target.innerText
      getGameStream(gameName)
    }
  })

function appendGame(data) {
  for (let i = 0; i < data.streams.length; i++) {
    const div = document.createElement('div')
    div.classList.add('game__streams')
    div.innerHTML = `
    <img src='${data.streams[i].preview.medium}' class='game__streams__background'/>
    <div class='game__streams__info'>
    <div class='game__streams__avatar'><img src='${data.streams[i].channel.logo}'/></div>
    <div class='game__streams__desc'>
    <div class='status'>${data.streams[i].channel.status}</div>
    <div class='channel__name'>${data.streams[i].channel.name}</div>
    </div>
    </div>`
    document.querySelector('.game').appendChild(div)
  }
}
