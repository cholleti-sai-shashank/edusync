import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import EditProfileComponent from '../../components/Profile/EditProfileComponent'
import './EditProfileStyles.css'

const EditProfile = () => {
  return (
	<div className='edit-profile'>
		<Topbar/>
		<EditProfileComponent/>
	</div>
  )
}

export default EditProfile