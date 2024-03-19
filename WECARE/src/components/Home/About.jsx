import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const slidesData = [
  {
    imgSrc: 'image1.jpg',
    title: 'Slide 1',
    subtitle: 'Subtitle 1',
  },
  {
    imgSrc: 'image2.jpg',
    title: 'Slide 2',
    subtitle: 'Subtitle 2',
  },
  {
    imgSrc: 'image3.jpg',
    title: 'Slide 3',
    subtitle: 'Subtitle 3',
  },
];

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <img src={slidesData[currentSlide].imgSrc} className="card-img-top" alt="Slide" />
            <div className="card-body">
              <h1 className="card-title">{slidesData[currentSlide].title}</h1>
              <h2 className="card-subtitle mb-2 text-muted">{slidesData[currentSlide].subtitle}</h2>
              <div className="button-container">
                <button className="btn btn-primary" onClick={handlePrevSlide}>&lt;</button>
                <button className="btn btn-primary" onClick={handleNextSlide}>&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
