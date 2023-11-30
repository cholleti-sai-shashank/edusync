import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import ProfileComponent from '../../components/Profile/ProfileComponent'
import './ProfileStyles.css'
const Profile = () => {
  return (
	<div className='profile'>
    <Topbar/>
    <ProfileComponent/>
  </div>
  )
}

export default Profile