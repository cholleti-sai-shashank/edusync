import React from 'react'
import useUserProfile from '../../hooks/useUserProfile'
const HomeLeft = () => {
	const userProfile = useUserProfile();
  return (
	<div>
		<p>User Name: {userProfile.displayName}</p>
		<p>Skills: {userProfile.skills}</p>
		<p>Hobbies: {userProfile.hobbies}</p>
		<p>About: {userProfile.message}</p>
	</div>
  )
}

export default HomeLeft