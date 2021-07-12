import $ from 'jquery'

export function getComments(apiUrl, siteKey, cb) {
  //控制一次拿五筆資料
  const commentsDOM = $('.comments')
  $.ajax({
    url: `${apiUrl}/api_comments.php?site_key=${siteKey}`,
  }).done(function (data) {
    cb(data)
  });
}

export function addComments(apiUrl, siteKey, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comments.php?site_key=${siteKey}`,
    data
  }).done(function (data) {
    cb(data)
  });
}