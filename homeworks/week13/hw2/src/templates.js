export const cssTemplate = `
.container {padding-top: 10px;}
.card { margin: 15px 0;}
span {color: grey;
  margin-left: 10px;}
.btn__read-more { margin-top: 10px;}
.hide { display: none;}`

export function getForm(className, commentsClassName, readMoreClassName) {
  return `
  <div>
    <form class="${className}">
      <div class="mb-3">
        <label class="form-label">Nickname</label>
        <input name="nickname" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Comments</label>
        <textarea name="content" class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="${commentsClassName}">
    </div>
    <div class="read-more">
      <button type="button" class="${readMoreClassName} btn btn-primary hide">Read More</button>
    </div>
  </div>
  `
}