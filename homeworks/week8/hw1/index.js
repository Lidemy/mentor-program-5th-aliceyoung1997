/* eslint-disable quotes */
const errorMessage = '系統不穩定，請再試一次'
function getPrize(cb) {
  const request = new XMLHttpRequest()
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let data
      try {
        data = JSON.parse(request.responseText)
      } catch (err) {
        cb(errorMessage)
        return
      }
      if (!data.prize) {
        cb(errorMessage)
        return
      }
      cb(null, data)
    } else {
      cb(errorMessage)
    }
  }
  request.onerror = () => {
    cb(errorMessage)
  }
  request.send()
}

document.querySelector('.lucky__draw__take-draw').addEventListener('click', () => {
  const banner = document.querySelector('.banner')
  const luckyDraw = document.querySelector('.lucky__draw')
  const prize = document.querySelector('.lucky__draw__body')
  getPrize((err, data) => {
    if (err) {
      alert(err)
      return
    }
    if (data.prize === 'FIRST') {
      banner.style.background = 'url(firstprize.jpg)'
      luckyDraw.style.background = 'transparent'
      luckyDraw.style.width = 'fit-content'
      prize.innerHTML = `<h1>恭喜你中頭獎了！日本東京來回雙人遊！</h1> <button class='lucky__draw__take-draw' onclick='javascript:window.location.reload()'>我要抽獎</button>`
      prize.style.textAlign = 'center'
      prize.style.padding = '40px 18px'
    } else if (data.prize === 'SECOND') {
      banner.style.background = 'url(secondprize.jpg)'
      luckyDraw.style.background = 'transparent'
      luckyDraw.style.width = 'fit-content'
      prize.innerHTML = `<h1>二獎！90 吋電視一台！</h1> <button class='lucky__draw__take-draw' onclick='javascript:window.location.reload()'>我要抽獎</button>`
      prize.style.textAlign = 'center'
      prize.style.padding = '40px 18px'
    } else if (data.prize === 'THIRD') {
      banner.style.background = 'url(thirdprize.jpg)'
      luckyDraw.style.background = 'transparent'
      luckyDraw.style.width = 'fit-content'
      prize.innerHTML = `<h1>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</h1> <button class='lucky__draw__take-draw' onclick='javascript:window.location.reload()'>我要抽獎</button>`
      prize.style.textAlign = 'center'
      prize.style.padding = '40px 18px'
    } else if (data.prize === 'NONE') {
      banner.style.background = 'black'
      luckyDraw.style.background = 'transparent'
      luckyDraw.style.width = 'fit-content'
      prize.innerHTML = `<h1>銘謝惠顧</h1> <button class='lucky__draw__take-draw' onclick='javascript:window.location.reload()'>我要抽獎</button>`
      prize.style.color = 'white'
      prize.style.textAlign = 'center'
      prize.style.padding = '40px 18px'
    }
  }
  )
}
)
