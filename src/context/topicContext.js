import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";

const INIT_STATE = {
  topics: [],
  topicDetails: {}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, topics: action.payload };
    case "GET_TOPIC_DETAILS":
      return {...state, topicDetails: action.payload}
    default:
      return state;
  }
};

let page = 1;

const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [search, setSearch] = useState('')

  const addTopic = async (topic) => {
    await axios.post(API, topic);
  };

  const getTopics = async () => {
    const { data } = await axios.get(`${API}?q=${search}&_page=${page}&_limit=3`);
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
  };

  const getTopicDetails = async(id) =>{
    const {data} = await axios.get(`${API}/${id}`);
    dispatch ({
      type: "GET_TOPIC_DETAILS",
      payload: data
    })
  }

  const deleteTopic = async(id)=>{
    await axios.delete(`${API}/${id}`)
  }

  const editTopicFunc = async (editedTopic, id)=>{
    await axios.patch(`${API}/${id}`, editedTopic)
  }

  function nextPage(){
    page += 1;
    getTopics()
  }
  function prevPage(){
    if(page <=1) return;
    page -= 1;
    getTopics()
  }
  return (
    <topicsContext.Provider
      value={{
        topics: state.topics,
        topicDetails: state.topicDetails,
        search,
        addTopic,
        getTopics,
        getTopicDetails,
        deleteTopic,
        editTopicFunc,
        nextPage,
        prevPage,
        setSearch
      }}
    >
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;

