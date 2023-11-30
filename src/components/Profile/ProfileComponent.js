import react from 'react';
import useUserProfile from '../../hooks/useUserProfile';
import { Link } from 'react-router-dom';
const ProfileComponent = () => {
  const {
    user,
    displayName,
    skills,
    dateOfBirth,
    hobbies,
    school,
    standard,
    city,
    state,
    country,
    message,
    handleUpdateProfile,
  } = useUserProfile();
  
  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>User Name: {displayName}</p>
          <p>Email: {user.email}</p>
          <p>Skills: {skills}</p>
          <p>Date of Birth: {dateOfBirth}</p>
          <p>Standard: {standard}</p>
          <p>School: {school}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Country: {country}</p>
          <p>Hobbies: {hobbies}</p>
          <p>About: {message}</p>
          
          <Link to="/edit-profile">Edit Profile</Link>
        </div>
      )}
    </div>
  );
};


export default ProfileComponent;

