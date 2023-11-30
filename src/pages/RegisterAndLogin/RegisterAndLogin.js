import React, { useState } from 'react'
import {auth, firestore} from '../../config/firebaseConfig'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './RegisterAndLoginStyles.css'

const createUserDocument = async(userUid, userData)=>{
	try{
		const userRef = doc(firestore, 'users', userUid);
		await setDoc(userRef, userData);
		console.log('User document created successfully');
	} catch(err){
		console.error('Error creating user document:', err);
		throw err;
	}
}


const RegisterAndLogin = () => {
	const [login, setLogin] = useState(false);
	//setLogin is must else once we registered, later if we try to register using same email, it shows email already in use
	const history = useNavigate()
	
	const handleSubmit = async (e,type)=>{
		e.preventDefault();//prevents from reloading the page, the default behaviour of browser
		const email = e.target.email.value;
		const password = e.target.password.value;
		//try catch the errors
		try{

			if(type==='signup'){
				const authData = await createUserWithEmailAndPassword(auth, email, password);
				const userData = {
					email: authData.user.email,
					//we can add more data
				}
				await createUserDocument(authData.user.uid, userData);
				console.log(authData,"authData");
				history('/home');
			}else{
				const authData = await signInWithEmailAndPassword(auth,email,password);
				console.log(authData,"authData");
				history('/home');
			}

		}catch(err){
			alert(err.code);
			setLogin(true);
		}
		
	}
  return (
	<div className='register'>
		<div className='register-topbar'>
				<img src={logo} alt='EDUSYNC' className='logo'/>
			<div className='register-nav'>
				<p className={login===false ? 'activeColor':'inactiveColor'} onClick={()=>setLogin(false)}>SignUp</p>
				<p className={login===true ? 'activeColor':'inactiveColor'} onClick={()=>setLogin(true)}>SignIn</p>
			</div>
		</div>
		<div className='register-component'>
			<h1>{login?'SignIn':'SignUp'}</h1>
			<form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
				<input name='email' placeholder='Email'/>
				<br/>
				<input name='password' placeholder='Password' type='password'/>
				<br/>
				<button type='submit'>{login?'SignIn':'SignUp'}</button>
			</form>
		</div>
	</div>
  )
}

export default RegisterAndLogin