import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.scss'
import MainCard from '../../components/MainCard/MainCard'
import Rightbar from '../../components/Rightbar/Rightbar'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <MainCard />
        <Rightbar />
    </div>
  )
}

export default Home