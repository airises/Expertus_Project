import React from 'react'
import Logo from '../../../assets/images/logo.png'
import Image from '../../../assets/images/image-main.png'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="left">
        <div className='logo-container'>
          <img src={Logo} alt="logo" />
          <h3>Экспертус</h3>
        </div>
        <h1>Регистрация</h1>
        <form>
          <input type="text" placeholder='Имя' />
          <input type="text" placeholder='Фамилия' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Пароль' />
          <div>
          </div>
          <button>Регистрация</button>
        </form>
        <span>У вас уже есть аккаунт?</span>
        <Link to='/login'>
        <button>Войти</button>
        </Link>
      </div>
      <div className="right">
        <div className='image-container'>
          <img src={Image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Register;