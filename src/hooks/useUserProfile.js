
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../config/firebaseConfig';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const useUserProfile = () => {
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
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return {
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
  };
};

export default useUserProfile;
