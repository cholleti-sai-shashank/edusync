import React, { useState, useEffect } from 'react';
import './EduNewsStyles.css';
import Topbar from '../../components/Topbar/Topbar';
import Card from '../../components/Card/Card'
const EduNews = () => {
  const [news, setNews] = useState([]);
  const country = 'in'; // Assuming 'in' stands for India

  useEffect(() => {
    const apiKey = ''; // Replace with your actual News API key
    const category = 'general';

    const getNews = async () => {
      try {
        const response = await fetch(
          ''
        );

        if (!response.ok) {
          alert('Data unavailable at the moment. Please try again later');
          return;
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, [country]);

  return (
    <div className='edunews'>
      <Topbar/>
      <div className='edunews-container'>
        {news.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.urlToImage || './newspaper.jpg'}
            title={item.title}
            description={item.description || item.content || ''}
            link={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default EduNews;
