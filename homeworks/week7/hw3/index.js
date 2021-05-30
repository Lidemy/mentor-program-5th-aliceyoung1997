/* eslint-disable no-useless-return */
document.querySelector('.add').addEventListener('click',
  () => {
    const inputValue = document.querySelector('.todo__input').value
    if (inputValue.length === 0) {
      return
    } else {
      const div = document.createElement('div')
      div.classList.add('task')
      div.innerHTML = ` <label><input class='ckbutton' type='checkbox' /><p>${inputValue}</p>
    </label><button class='delete'></button>`
      document.querySelector('.todo__list').appendChild(div)
    }
  }
)

document.querySelector('.todo__list').addEventListener('click',
  (e) => {
    if (e.target.classList.contains('delete')) {
      document.querySelector('.todo__list').removeChild(e.target.closest('.task'))
    }
  }
)
