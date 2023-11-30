// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyles.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.imageSrc} alt={props.title} className='card-image' />
      <div className='card-content'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-description'>{props.description}</p>
        <Link to={props.link} target="_blank" rel="noopener noreferrer" className='read-more'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
