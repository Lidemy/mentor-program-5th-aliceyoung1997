document.querySelector('form').addEventListener('submit',
  (e) => {
    const nameInput = document.querySelector('.name__input').value
    const emailInput = document.querySelector('.email__input').value
    const phoneInput = document.querySelector('.phone__input').value
    const knowInfoInput = document.querySelector('.know__info__input').value
    const bed = document.querySelector('#bed').checked
    const floor = document.querySelector('#floor').checked
    const choice = document.querySelector('input:checked')

    if (nameInput.length === 0) {
      document.querySelector('#name__error').style.display = 'block'
      e.preventDefault()
    } else {
      document.querySelector('#name__error').style.display = 'none'
    }
    if (emailInput.length === 0) {
      document.querySelector('#email__error').style.display = 'block'
      e.preventDefault()
    } else {
      document.querySelector('#email__error').style.display = 'none'
    }
    if (phoneInput.length === 0) {
      document.querySelector('#phone__error').style.display = 'block'
      e.preventDefault()
    } else {
      document.querySelector('#phone__error').style.display = 'none'
    }
    if (knowInfoInput.length === 0) {
      document.querySelector('#know__info__error').style.display = 'block'
      e.preventDefault()
    } else {
      document.querySelector('#know__info__error').style.display = 'none'
    }
    if (bed === false && floor === false) {
      document.querySelector('#choice__error').style.display = 'block'
      e.preventDefault()
    } else {
      document.querySelector('#choice__error').style.display = 'none'
    }

    if (nameInput.length !== 0 &&
      emailInput.length !== 0 &&
      phoneInput.length !== 0 &&
      knowInfoInput.length !== 0 &&
      (bed !== false || floor !== false)
    ) {
      alert(`
      報名資料如下：
      暱稱: ${nameInput} 
      電子郵件： ${emailInput} 
      手機號碼： ${phoneInput} 
      報名資料： ${choice.value}
      怎麼知道這個活動的： ${knowInfoInput}`
      )
    }
  }
)
