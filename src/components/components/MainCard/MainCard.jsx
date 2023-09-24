import React, { useContext, useEffect } from 'react'
import './MainCard.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { topicsContext } from '../../../context/topicContext';
import MainCardItem from './MainCardItem/MainCardItem';

const MainCard = () => {
	const {topics, getTopics, nextPage, prevPage, search, setSearch} = useContext(topicsContext);

	useEffect(()=>{
		getTopics()
	}, [])

	useEffect(() => {
		getTopics();
	  }, [search]);
	  
  return (
	  <div class="container">
		  <div className="search">
			  <SearchOutlinedIcon />
			  <input type="text" placeholder="Поиск..." onChange={(e)=>setSearch(e.target.value)} />
		  </div>
		  <Link to='/add'>
			  <button className='addBtn'><AddIcon />Добавить</button>
		  </Link>
		  {
			topics.map((item)=>(
				<MainCardItem id={item.id} title={item.title} desc={item.desc} image={item.image} />
			))
		  }
		  <div className='btnContainer'>
		<button className='paginationBtn' onClick={()=>prevPage()}>Предыдущий</button>
      	<button className='paginationBtn' onClick={()=>nextPage()}>Следующий</button>
		  </div>
	  </div>
  )
}

export default MainCard