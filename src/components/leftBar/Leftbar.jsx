import React, { useContext } from 'react'
import {item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13} from "../../assets/index"
import LeftbarItems from './LeftbarItems'
import "./leftbar.scss"
import { AuthContext } from '../../context/authContext'

const items1 = [
  {
      title: "Friends",
      src: item1
  },
  {
      title: "Groups",
      src: item2
  },
  {
      title: "Marketplace",
      src: item3
  },
  {
      title: "Watch",
      src: item4
  },
  {
      title: "Memories",
      src: item5
  }
]
const items2 = [
  {
      title: "Friends",
      src: item6
  },
  {
      title: "Groups",
      src: item7
  },
  {
      title: "Marketplace",
      src: item8
  },
  {
      title: "Watch",
      src: item9
  },
  {
      title: "Memories",
      src: item10
  }
]

const items3 = [
  {
      title: "Fundraiser",
      src: item11
  },
  {
      title: "Tutorials",
      src: item12
  },
  {
      title: "Courses",
      src: item13
  },
  {
    title: "Fundraiser",
    src: item11
},
{
    title: "Tutorials",
    src: item12
},
{
    title: "Courses",
    src: item13
}
]

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser.profilePic} alt='user' />
            <h5>{currentUser.name}</h5>
          </div>

          <div className='items'>
            {items1.map((item,index)=>(
              <LeftbarItems 
              title={item.title} 
              src={item.src}
              key={item.title+index}/>
            ))}
          </div>
        </div>
        <hr/>
        <div className='menu'>
          <div className='items'>
            <h4>Your shortcuts</h4>
            {items2.map((item,index)=>(
              <LeftbarItems 
              title={item.title} 
              src={item.src}
              key={item.title+index}/>
            ))}
          </div>
        </div>

        <hr/>
        <div className='menu'>
          <div className='items'>
          <h4>Others</h4>
          {items3.map((item,index)=>(
              <LeftbarItems 
              title={item.title} 
              src={item.src}
              key={item.title+index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
