// Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [postContent, setPostContent] = useState('');

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(postContent);
    setPostContent(''); // Clear input after submission
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div>
        <h2>Add a Post</h2>
        <textarea
          placeholder="Enter your post here..."
          value={postContent}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
