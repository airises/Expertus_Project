import React from 'react'
import './MainCardItem.css'
import { Link } from 'react-router-dom'

const MainCardItem = ({id, title, desc, image}) => {
	
  return (
    <article class="article" itemscope itemtype="http://schema.org/Article">
			  <header class="article__header">
			  <h3>{title}</h3>
			  </header>
			  <section class="article__content">
					  <picture class="article__image" itemprop="image" itemscope >
						  <img itemprop="url" src={image} alt="Изображение" width="256" height="128" />
					  </picture>
				  <h3 class="article__title" itemprop="headline">
					  <span>Проблема:</span>
					  <br></br>
					  <div>{desc}</div>
					  <Link to={`/details/${id}`}>
					  <button className='details'>Подробнее</button>
					  </Link>
				  </h3>
			  </section>
		  </article>
  )
}

export default MainCardItem