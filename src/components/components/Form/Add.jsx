import React, { useState, useContext } from 'react'
import './Add.scss'
import { ToastContainer, toast } from "react-toastify";
import { topicsContext } from '../../../context/topicContext';
import { useNavigate } from 'react-router';


const Add = () => {
  const { addTopic } = useContext(topicsContext);

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [solution, setSolution] = useState('')
  const [image, setImage] = useState('')

  const notify = () => toast.error("Empty");
  const navigate = useNavigate()
  const handleClick = () => {
    if(!title || !desc || !solution || !image){
      notify();
      return
    }
    let newTopic = {
      title,
      desc,
      solution,
      image,
    };

    addTopic(newTopic)

    // setTitle("");
    // setDesc("");
    // setSolution("");
    // setImage("");
    navigate('/')
  };
  return (
    <div className='add'>
      <div className="container">
        <h1>Добавить проблему</h1>
        <div className='form'>
          <input type='text' placeholder='Название проблемы' onChange={(e)=>setTitle(e.target.value)} />
          <textarea type='text' rows={5} placeholder='Дайте описание проблемы' onChange={(e)=>setDesc(e.target.value)} />
          <textarea type='text' rows={5} placeholder='Дайте решение проблемы' onChange={(e)=>setSolution(e.target.value)} />
          <input type="text" placeholder='Добавьте фото' onChange={(e)=>setImage(e.target.value)} />
          <button onClick={handleClick}>Добавить</button>
          </div>
      </div>
      <ToastContainer position="top-center" pauseOnHover={true} />
    </div>
  )
}

export default Add