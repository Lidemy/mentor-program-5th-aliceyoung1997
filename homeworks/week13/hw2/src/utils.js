export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  styleElement.appendChild(document.createTextNode(cssTemplate));
  document.head.appendChild(styleElement)
}

export function escape(toOutput) {
  return toOutput.replace(/\&/g, '&amp;')
    .replace(/\</g, '&lt;')
    .replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#x27')
    .replace(/\//g, '&#x2F');
}

export function appendCommentToDOM(container, comment, isPrepend) {
  const html = ` <div class="card">
      <div class=" card-body">
        <h5 class="card-title">${escape(comment.nickname)}
          <span>${escape(comment.created_at)}</span>
        </h5>
        <p class="card-text">${escape(comment.content)}</p>
      </div>
    </div>`
  if (isPrepend) {
    container.prepend(html)
  } else {
    container.append(html)
  }
}