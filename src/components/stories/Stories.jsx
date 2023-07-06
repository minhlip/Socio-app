import React, { useContext } from 'react'
import "./stories.scss"
import {userInfor} from "../../userInfo"
import { AuthContext } from '../../context/authContext';

const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  let stories = userInfor
  //USING TEMPORRARY DATA FROM userInfor
  return (
    <div className='stories'>
      <div className='story'>
        <img 
        src={currentUser.profilePic}
        alt={currentUser.name}
          />
        <div className='glass'>
        <span>{currentUser.name}</span>
        <button> + </button>
        </div>
      </div>
      {
        stories.map(story => (
          <div className='story' key={stories.id}>
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
