import React, { useState } from 'react';
// Image Imports
import arrowUI from '../media/images/white_triangle_R.png';
import eui from '../media/images/me.jpg';

const Firefly = () => {

     const slides = [
        { title: 'NAME - KR', details: '지후 - 알렉스' },
        { title: 'NAME - US', details: 'ALEJANDRO MAGANA' },
        { title: 'BIRTHDAY', details: '2001.06.2001' },
        { title: 'LOCATION', details: 'LAST SEEN: 서울, 과달라하라' },
        { title: 'CONTACT', details: 'UK-7767718307' },
        { title: 'GITHUB', details: 'gitbub.com/Allegsu' },
        { title: 'EMAIL', details: 'allegsu@daum.net'},
      ];

      const [currentSlide, setCurrentSlide] = useState(0);
      
    
      const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
      };
    
  return (
    <div className="Firefly">
        <div className="ProfileContent">
            <div className="ProfilePicture">
                <img src={eui} alt="Profile" />
            </div>
        <div className="ProfileDetails">
          <div className="CarouselTitle TLFont-DIN-Expanded">
            <button className="ArrowButton" onClick={handlePrev}>
              <img className="Button-Images-Carousel-AL" src={arrowUI} alt="Arrow Left" />
            </button>
            <h2>{slides[currentSlide].title}</h2>
            <button className="ArrowButton" onClick={handleNext}>
              <img className="Button-Images-Carousel-AR" src={arrowUI} alt="Arrow Right" />
            </button>
          </div>
          <p className="TLFont-DIN-Expanded">{slides[currentSlide].details}</p>
        </div>
      </div>
    </div>
  );
};

export default Firefly;
