import React from 'react'
import Logo from '../../../assets/images/ozgort-logo.png'
import './Sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ExtensionIcon from '@mui/icons-material/Extension';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="container">
        <div className='logoContainer'>
            <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
        <span>Меню</span>
        <Link to='/' style={{textDecoration: 'none', color: "#273240"}}>
          <div className="item">
            <HomeIcon />
            <span>Главная</span>
          </div>
          </Link>
          <Link to='/articles' style={{textDecoration: 'none', color: "#273240"}}>
          <div className="item">
            <ArticleIcon />
            <span>Статьи</span>
          </div>
          </Link>
          <Link to='/tests' style={{textDecoration: 'none', color: "#273240"}}>
          <div className="item">
            <ExtensionIcon />
            <span>Интерактив</span>
          </div>
          </Link>
          <span style={{marginTop: '100px'}}>Другое</span>
          <div className="item">
            <AccountCircleIcon />
            <span>Личный кабинет</span>
          </div>
          <div className="item">
            <HelpIcon />
            <span>Помощь</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar