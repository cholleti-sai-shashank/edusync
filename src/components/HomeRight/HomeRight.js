// HomeRight.js
import React, { useState } from 'react';
import Modal from './Modal'; 
import { firestore } from '../../config/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import DisplayPosts from '../Post/DisplayPosts';
const HomeRight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPostClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = async (postContent) => {
    try {
      // Add the post to the 'posts' collection in Firebase
      const postsCollection = collection(firestore, 'posts');
  
      await addDoc(postsCollection, {
        content: postContent,
        timestamp: serverTimestamp(),
      });
  
      console.log('Post submitted successfully');
    } catch (error) {
      console.error('Error adding post:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleAddPostClick}>Add a post</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handlePostSubmit} />
      <DisplayPosts/>
    </div>
  );
};

export default HomeRight;

