const requestTop = new XMLHttpRequest()
requestTop.onload = () => {
  if (requestTop.status >= 200 && requestTop.status < 400) {
    const data = JSON.parse(requestTop.responseText)
    const topGame = data.top
    for (let i = 0; i < topGame.length; i++) {
      const list = document.createElement('li')
      list.innerHTML = `<button class=gameName>${topGame[i].game.name}</button>`
      document.querySelector('.navbar__list').appendChild(list)
    }
    // 1st top game streams
    const requestStreams = new XMLHttpRequest()
    requestStreams.open('GET', `https://api.twitch.tv/kraken/streams/?game=${topGame[0].game.name}&limit=20`, true)
    requestStreams.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    requestStreams.setRequestHeader('Client-ID', 'k5kbzqp55c30u5o6z5amlvrzmb6zwu')
    requestStreams.onload = () => {
      if (requestStreams.status >= 200 && requestStreams.status < 400) {
        const streamsData = JSON.parse(requestStreams.responseText)
        document.querySelector('.content__title').innerText = topGame[0].game.name
        for (let i = 0; i < streamsData.streams.length; i++) {
          const div = document.createElement('div')
          div.classList.add('game__streams')
          div.innerHTML = `
          <img src='${streamsData.streams[i].preview.medium}' class='game__streams__background'/>
          <div class='game__streams__info'>
          <div class='game__streams__avatar'><img src='${streamsData.streams[i].channel.logo}'/></div>
          <div class='game__streams__desc'>
            <div class='status'>${streamsData.streams[i].channel.status}</div>
            <div class='channel__name'>${streamsData.streams[i].channel.name}</div>
            </div>
            </div>`
          document.querySelector('.game').appendChild(div)
        }
      } else {
        console.log('error')
      }
    }
    requestStreams.onerror = () => {
      console.log('error')
    }
    requestStreams.send()
    // 監聽 top 5 games 按鈕
    document.querySelector('.navbar__list').addEventListener('click',
      (e) => {
        if (e.target.classList.contains('gameName')) {
          document.querySelector('.content').removeChild(document.querySelector('.game'))
          const gameDiv = document.createElement('div')
          gameDiv.classList.add('game')
          document.querySelector('.content').appendChild(gameDiv)
          const text = e.target.innerText
          const requestNavBar = new XMLHttpRequest()
          requestNavBar.open('GET', `https://api.twitch.tv/kraken/streams/?game=${text}&limit=20`, true)
          requestNavBar.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
          requestNavBar.setRequestHeader('Client-ID', 'k5kbzqp55c30u5o6z5amlvrzmb6zwu')
          requestNavBar.onload = () => {
            if (requestNavBar.status >= 200 && requestNavBar.status < 400) {
              const streamsData = JSON.parse(requestNavBar.responseText)
              document.querySelector('.content__title').innerText = text
              for (let i = 0; i < streamsData.streams.length; i++) {
                const div = document.createElement('div')
                div.classList.add('game__streams')
                div.innerHTML = `
          <img src='${streamsData.streams[i].preview.medium}' class='game__streams__background'/>
          <div class='game__streams__info'>
          <div class='game__streams__avatar'><img src='${streamsData.streams[i].channel.logo}'/></div>
          <div class='game__streams__desc'>
            <div class='status'>${streamsData.streams[i].channel.status}</div>
            <div class='channel__name'>${streamsData.streams[i].channel.name}</div>
            </div>
            </div>`
                document.querySelector('.game').appendChild(div)
              }
            } else {
              console.log('error')
            }
          }
          requestNavBar.onerror = () => {
            console.log('error')
          }
          requestNavBar.send()
        }
      })
  } else {
    console.log('error')
  }
}
requestTop.onerror = () => {
  console.log('error')
}
requestTop.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true)
requestTop.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
requestTop.setRequestHeader('Client-ID', 'k5kbzqp55c30u5o6z5amlvrzmb6zwu')
requestTop.send()
