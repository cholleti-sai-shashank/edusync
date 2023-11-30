import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../config/firebaseConfig';
import Post from './Post';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsCollection = collection(firestore, 'posts');
        const querySnapshot = await getDocs(postsCollection);
        
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} timestamp={post.timestamp} />
      ))}
    </div>
  );
};

export default DisplayPosts;
