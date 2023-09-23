import React from 'react'
import Logo from '../../../assets/images/logo.png'
import Image from '../../../assets/images/image-main.png'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="left">
        <div className='logo-container'>
          <img src={Logo} alt="logo" />
          <h3>Экспертус</h3>
        </div>
        <h1>Войти</h1>
        <Link to="/register">
          <button>Зарегистрироваться</button>
        </Link>
        <form>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Пароль' />
          <div>
          <input type='checkbox' style={{width: '16px', height: '16px', marginRight: '5px'}} />
          <label>Запомнить меня</label>
          </div>
          <button>Войти</button>
        </form>
      </div>
      <div className="right">
        <div className='image-container'>
          <img src={Image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Login