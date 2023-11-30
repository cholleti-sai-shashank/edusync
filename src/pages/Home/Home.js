
import './HomeStyles.css'
import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import HomeLeft from '../../components/HomeLeft/HomeLeft'
import ProfileComponent from '../../components/Profile/ProfileComponent'
import HomeRight from '../../components/HomeRight/HomeRight'
const Home = () => {
  return (
	<div className='home'>
		<Topbar/>
		<div className='row'>
			<div className='col-4'>
				<HomeLeft profileComponent={<ProfileComponent />}/>
			</div>
			<div className='col-8'>
				<HomeRight/>
			</div>
		</div>
	</div>

  )
}

export default Home