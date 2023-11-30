import React from 'react';

const Post = ({ content, timestamp }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <p>{content}</p>
      <p>{timestamp.toDate().toLocaleString()}</p>
    </div>
  );
};

export default Post;