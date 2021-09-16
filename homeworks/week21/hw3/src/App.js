import './App.css';
import { useState } from 'react';

const QuestionBlock = ({ handleInfoValue, className, question, name, type, placeholder, errorMsg }) => {
  return (
    <div className='block'>
      <div className={className || 'question'}>{question}</div>
      <div className='ans'>
        <input
          className='ans__input'
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleInfoValue(e)} /></div>
      <div className='error'>{errorMsg}</div>
    </div>
  )
}

const QuestionRadio = ({ handleInfoValue, errorMsg }) => {
  return (
    <>
      <div className='question'>報名類型 </div>
      <div className='choice'>
        <div>
          <input type='radio'
            name='category'
            value='躺在床上用想像力實作'
            id='bed'
            onChange={(e) => handleInfoValue(e)} />
          <label htmlFor='bed'>躺在床上用想像力實作</label>
        </div>
        <div>
          <input type='radio'
            name='category'
            value='趴在地上滑手機找現成的'
            id='floor'
            onChange={(e) => handleInfoValue(e)} />
          <label htmlFor='floor'>
            趴在地上滑手機找現成的</label>
          <div className='error'>{errorMsg}</div>
        </div>
      </div>
    </>
  )
}

const Form = () => {
  const [info, setInfo] = useState({
    nickname: '',
    email: '',
    phone: '',
    category: '',
    howYouKnow: '',
    feedback: '',
  })
  const [errors, setErrors] = useState('')
  const { nicknameErr, emailErr, phoneErr, categoryErr, howYouKnowErr } = errors
  const handleValidity = (e) => {
    let errors = {}
    let validity = true
    if (info.nickname === '') {
      e.preventDefault()
      validity = false
      errors['nicknameErr'] = '請填寫暱稱'
    }
    if (info.email === '') {
      e.preventDefault()
      validity = false
      errors['emailErr'] = '請填寫電子郵件'
    }
    if (info.phone === '') {
      e.preventDefault()
      validity = false
      errors['phoneErr'] = '請填寫手機號碼'
    }
    if (info.category === '') {
      e.preventDefault()
      validity = false
      errors['categoryErr'] = '請勾選'
    }
    if (info.howYouKnow === '') {
      e.preventDefault()
      validity = false
      errors['howYouKnowErr'] = '請填寫此欄'
    }
    setErrors(errors)
    return validity
  }

  const handleInfoValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    const result = `
    報名成功！
    暱稱：${info.nickname}
    電子郵件：${info.email}
    手機號碼：${info.phone}
    報名類型：${info.category}
    如何知道活動：${info.howYouKnow}
    其他：${info.feedback}`
    if (handleValidity(e)) {
      alert(result)
    }
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>新拖延運動報名表單</h1>
      <div className='info'>
        <div>活動日期：2020/12/10 ~ 2020/12/11</div>
        <div>活動地點：台北市大安區新生南路二段1號</div>
      </div>
      <div className='notice'>*必填</div>
      <QuestionBlock
        handleInfoValue={handleInfoValue}
        question='暱稱'
        name='nickname'
        type='text'
        placeholder='您的回答'
        errorMsg={nicknameErr} />
      <QuestionBlock
        handleInfoValue={handleInfoValue}
        question='電子郵件'
        name='email'
        type='email'
        placeholder='您的電子郵件'
        errorMsg={emailErr} />
      <QuestionBlock
        handleInfoValue={handleInfoValue}
        question='手機號碼'
        name='phone'
        type='tel'
        placeholder='您的手機號碼'
        errorMsg={phoneErr} />
      <QuestionRadio
        handleInfoValue={handleInfoValue}
        errorMsg={categoryErr} />
      <QuestionBlock
        handleInfoValue={handleInfoValue}
        question='怎麼知道這個活動的？'
        name='howYouKnow'
        type='text'
        placeholder='您的回答'
        errorMsg={howYouKnowErr} />
      <QuestionBlock
        handleInfoValue={handleInfoValue}
        className='other'
        question='其他，對活動的一些建議'
        name='feedback'
        type='text'
        placeholder='您的回答' />
      <input
        className='submit'
        type='submit'
        value='提交' />
      <div className='reminder'>請勿透過表單送出您的密碼。</div>
    </form>
  )
}

const Footer = () => {
  return (
    <div className='footer__bottom'>
      © 2020 © Copyright. All rights Reserved.
    </div>
  )
}

function App() {
  return (
    <>
      <div className='container'>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;
