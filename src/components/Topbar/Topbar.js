import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaSearch, FaHome, FaConnectdevelop, FaNewspaper, FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { signOut } from 'firebase/auth'
import {auth} from '../../config/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Topbar.css'
const Topbar = () => {

	const history = useNavigate()

	const handleClick = ()=>{
		signOut(auth).then(val=>{
			history('/')
		})
	}

  return (
	<div className='topbar'>
		<img src={logo} alt='EDUSYNC' className='logo'/>
		<div className='topbar-icons'>
			<FaSearch className='react-icon' size={'1.2rem'}/>
			<Link to='/home'>
				<FaHome className='react-icon'  size={'1.2rem'}/>
			</Link>
			<Link to='/connections'>
				<FaConnectdevelop className='react-icon'  size={'1.2rem'}/>
			</Link>
			<Link to='/edunews'>
				<FaNewspaper className='react-icon'  size={'1.2rem'}/>
			</Link>
			<Link to='/profile'>
				<FaRegUserCircle className='react-icon'  size={'1.2rem'}/>
			</Link>
			<Link onClick={handleClick}>
				<FaSignOutAlt className='react-icon'  size={'1.2rem'}/>
			</Link>
		</div>
	</div>
  )
}

export default Topbar