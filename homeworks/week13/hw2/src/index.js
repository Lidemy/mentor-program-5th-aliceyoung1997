import { getComments, addComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { cssTemplate, getForm } from './templates'
import $ from 'jquery'

export function init(options) {
  let siteKey = ''
  let apiUrl = ''
  let containerElement = null
  let size = 5
  let offset = 0
  let counter = 1
  let commentClassName
  let commentSelector
  let readMoreClassName
  let readMoreSelector
  let formClassName
  let formSelector

  siteKey = options.siteKey
  apiUrl = options.apiUrl
  commentClassName = `${siteKey}-comments`
  commentSelector = '.' + commentClassName
  readMoreClassName = `${siteKey}-btn__read-more`
  readMoreSelector = '.' + readMoreClassName
  formClassName = `${siteKey}-add-comment-form`
  formSelector = '.' + formClassName
  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentClassName, readMoreClassName))
  appendStyle(cssTemplate)

  getNewComment(offset, size, counter)

  $(formSelector).submit(e => {
    e.preventDefault();
    const nickNameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)
    const newComment = {
      'site_key': siteKey,
      'nickname': nickNameDOM.val(),
      'content': contentDOM.val(),
    }
    addComments(apiUrl, siteKey, newComment, data => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      nickNameDOM.val('')
      contentDOM.val('')
      //資料庫新增完留言後再去資料庫拿一次最新資料
      $(commentSelector).empty()
      getNewComment(0, size, counter)
      // 由於getNewComment的參數會隨著瀏覽者按read more 載入留言而不同。
      // 設定從 0 開始確保就算瀏覽者已經載入10則留言再新增留言也能從資料庫中抓到最新的 10 則
    })
  })
  $(readMoreSelector).click(function () {
    counter += 1
    offset = (counter - 1) * size
    //再拿五筆留言
    getNewComment(offset, size, counter)
  })
  function getNewComment(offset, size, counter) {
    //控制一次拿五筆資料
    const commentsDOM = $(commentSelector)

    getComments(apiUrl, siteKey, data => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      let sum = data.discussions.length
      const comments = data.discussions;
      let dataLoad = counter * size

      if (dataLoad < sum) {
        $(readMoreSelector).removeClass('hide')
      } else {
        $(readMoreSelector).addClass('hide')
      }
      if (dataLoad - sum >= 0) {
        dataLoad = sum
      }

      for (let i = offset; i < dataLoad; i++) {
        appendCommentToDOM(commentsDOM, comments[i])
      }
    });
  }
}
