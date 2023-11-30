import React,  { useState, useEffect }  from 'react'
import { auth, firestore } from '../../config/firebaseConfig';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const EditProfileComponent = () => {
  const navigate = useNavigate(); //hook for navigating back to profile page
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [skills, setSkills] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [school, setSchool] = useState('');
  const [standard, setStandard] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
          setDisplayName(userDoc.data().displayName || '');
          setSkills(userDoc.data().skills || '');
          setDateOfBirth(userDoc.data().dateOfBirth || '');
          setHobbies(userDoc.data().hobbies || '');
          setSchool(userDoc.data().school || '');
          setStandard(userDoc.data().standard || '');
          setCity(userDoc.data().city || '');
          setState(userDoc.data().state || '');
          setCountry(userDoc.data().country || '');
          setMessage(userDoc.data().message || '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const userRef = doc(firestore, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        displayName: displayName,
        skills: skills,
        dateOfBirth: dateOfBirth,
        standard: standard,
        school: school,
        city: city,
        state: state,
        country: country,
        hobbies: hobbies,
        message: message,
      });
      console.log('User profile updated successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }

  };
  return (
	<div>
    <h2>Edit Profile</h2>
          {/* Add input fields for new fields */}
          <label>Display Name:</label>
          <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          <br />
          <label>Skills:</label>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
          <br />
          <label>Date of Birth:</label>
          <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          <br />
          <label>Standard:</label>
          <input type="text" value={standard} onChange={(e) => setStandard(e.target.value)} />
          <br />
          <label>School:</label>
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
          <br />
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <br />
          <label>State:</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          <br />
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          <br />
          <label>Hobbies:</label>
          <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
          <br />
          <label>About:</label>
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          <br />

          <button onClick={handleUpdateProfile}>Update Profile</button>
  </div>
  )
}

export default EditProfileComponent