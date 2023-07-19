import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import {
    useQuery, useQueryClient
  } from '@tanstack/react-query' 
  import { makeRequest } from "../../axios";
  import { useLocation } from "react-router-dom";
const Navbar = () => { 
    const {toggle, darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)
    const userId = currentUser.id.toString()
    const { data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  let profilePic = data?.profilePic
  let name = data?.name
    return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration: "none"}}>
                <span>Socio.</span>

            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) : (<NightsStayOutlinedIcon onClick={toggle}/>)}
            <GridViewOutlinedIcon/> 

            <div className='search'> 
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search...' />
            </div>   
        </div>
        <div className='right'>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <div className='user'>
                <img src={"/upload/"+profilePic} alt=''/>
            
                <span>{name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
