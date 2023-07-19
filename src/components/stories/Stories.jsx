import React, { useContext } from 'react'
import "./stories.scss"
import {userInfor} from "../../userInfo"
import { AuthContext } from '../../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Stories = () => {
  const {currentUser} = useContext(AuthContext)
const userId = currentUser.id.toString()
const { data } = useQuery(["user"], () =>
makeRequest.get("/users/find/" + userId).then((res) => {
  return res.data;
})
);
let profilePic = data?.profilePic
let name = data?.name
let stories = userInfor
  return (
    <div className='stories'>
      <div className='story'>
        <img 
        src={"/upload/"+profilePic}
        alt={name}
          />
        <div className='glass'>
        <span>{name}</span>
        <button> + </button>
        </div>
      </div>
      {
        stories.map((story,index) => (
          <div className='story' key={story.id + index}>
            <img
              src={story.story}
              alt=""
            />
            <div className='glass'>
            <span>{story.name}</span>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Stories
