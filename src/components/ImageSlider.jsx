import React, { useState } from 'react';
import './ImageSlider.css'; // Make sure to create this CSS file
const images = [
  "https://thumbs.dreamstime.com/b/notre-dame-de-paris-black-white-view-notre-dame-de-paris-river-seine-landmark-paris-notre-dame-de-paris-177102830.jpg",
  "https://i.pinimg.com/736x/c3/fe/b9/c3feb9dcd9efb4422e8d2cecf7b21b89.jpg",
  "https://i.pinimg.com/originals/b6/9f/e1/b69fe1e6c150582625e22f91f53e1e1d.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&lt;</button>
      <img src={images[currentIndex]} alt="Slide" className="slide" />
      <button className="next" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
