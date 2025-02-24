import React, { useState } from 'react';
// Image Imports
import arrowUI from '../media/images/white_triangle_R.png';
import React1 from '../media/images/skills.png';
import React2 from '../media/images/wrench_w.png';
import PHP1 from '../media/images/php_tlou.png';
import PHP2 from '../media/images/Tesco.png';
import Java1 from '../media/images/summary.png';

const Trophy = () => {
  const sections = {
    React: [
      { title: 'PORTFOLIO', image: React1, description: 'A React portfolio about my skills!' },
      { title: 'E-COMMERCE', image: React2, description: 'Coming Soon...' },
    ],
    PHP: [
      { title: 'TLOU', image: PHP1, description: 'E-commerce site for Korea and Spain inspired in TLOU' },
      { title: 'TESCO', image: PHP2, description: 'Coming Soon...' },
    ],
    Java: [
      { title: 'Point Of Sale(POS)', image: Java1, description: 'A Java desktop application. Oriented to be a Point of Sale (POS) system.' },
    ],
  };

  const [currentSection, setCurrentSection] = useState('React');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % sections[currentSection].length
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sections[currentSection].length - 1 : prevSlide - 1
    );
  };

  const handleMenuClick = (section) => {
    setCurrentSection(section);
    setCurrentSlide(0); // Reset to the first slide when switching sections
  };

  return (
    <div className="Trophy">
      <div className="TrophyContent TLFont-DIN-Expanded">
        <div className="Menu-Sections">
          {Object.keys(sections).map((section) => (
            <h2
              key={section}
              onClick={() => handleMenuClick(section)}
              className={currentSection === section ? 'active-section' : ''}
            >
              {section.toUpperCase()}
            </h2>
          ))}
        </div>
        <div className="ProjectOptions">
          <button className="ArrowButton" onClick={handlePrev}>
            <img className="Button-Images-Carousel-AL" src={arrowUI} alt="Arrow Left" />
          </button>
          <h2>{sections[currentSection][currentSlide].title}</h2>
          <button className="ArrowButton" onClick={handleNext}>
            <img className="Button-Images-Carousel-AR" src={arrowUI} alt="Arrow Right" />
          </button>
        </div>
        <div className="ProjectView">
          <h2>{sections[currentSection][currentSlide].title}</h2>
          <img
            src={sections[currentSection][currentSlide].image}
            alt={sections[currentSection][currentSlide].title}
          />
          <p>{sections[currentSection][currentSlide].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Trophy;


