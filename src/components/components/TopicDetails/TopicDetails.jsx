import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { topicsContext } from '../../../context/topicContext';
import './TopicDetails.scss'

const TopicDetails = () => {
    const {id} = useParams();
    const {getTopicDetails, topicDetails} = useContext(topicsContext)

    useEffect(()=>{
        getTopicDetails(id)
    }, [])
  return (
      <div className='topicDetails'>
          <div className='container'>
              <div className='detailsInfo'>
                  <div>
                      <img src={topicDetails.image} alt='some pic' />
                  </div>
                  <div className='infoBlock'>
                    <div className='item'>
                      <h3>Описание проблемы</h3>
                      <br></br>
                      <p>{topicDetails.desc}</p>
                      </div>
                      <div className='item'>
                      <h3>Описание предложенного решения</h3>
                      <br></br>
                      <p>{topicDetails.solution}</p>
                      </div>
                      <textarea rows={2} />
                      <br></br>
                      <button>Добавить комментарий</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TopicDetails