import React, { useState } from 'react';
// Images Imports
import FA from '../media/images/fa.png';
import React_Image from '../media/images/react_r.png';
import js_image from '../media/images/js_r.png';
import bank from '../media/images/bank_R.png';
import web from '../media/images/web_r.png';
import css from '../media/images/css_r.png';
import pyt from '../media/images/py_r.png';
import html_I from '../media/images/html_r.png';

const Map = () => {
  // Menu Options
  const menuOptions = [
    {
      title: 'JOB EXPERIENCE',
      content: {
        details: [
          {
            image: FA,
            title: 'FINANCIAL ACCOUNTING',
            paragraph: '2016-2018',
            progress: 90,
          },
          {
            image: bank,
            title: 'AMEX INSURANCE COMPANY',
            paragraph: '2021-2022',
            progress: 75,
          },
          {
            image: web,
            title: 'IT-MANAGER PART-TIME JOB',
            paragraph: '2023-2025',
            progress: 80,
          }
        ],
      },
    },
    {
      title: 'SKILLS',
      content: {
        details: [
          {
            image: React_Image,
            title: 'REACT',
            paragraph: '90%',
            progress: 90,
          },
          {
            image: css,
            title: 'CSS',
            paragraph: '85%',
            progress: 85,
          },
          {
            image: js_image,
            title: 'JAVACRIPT',
            paragraph: '80%',
            progress: 80,
          },
          {
            image: html_I,
            title: 'HTML',
            paragraph: '90%',
            progress: 90,
          },
          {
            image: pyt,
            title: 'PYTHON',
            paragraph: '80%',
            progress: 80,
          },
        ],
      },
    },
    {
      title: 'CLASSIFIED',
      content: {
        details: [
          {
            title: 'ACCESS DENIED',
            paragraph: '',
          },
        ],
      },
    },
  ];

  // State to track the selected menu option
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);

  return (
    <div className="Map">
      {/* Menu Selection */}
      <div className="Menu-Selection">
        {menuOptions.map((option, index) => (
          <h2
            key={index}
            className={selectedOption.title === option.title ? 'active' : ''}
            onClick={() => setSelectedOption(option)}
          >
            {option.title}
          </h2>
        ))}
      </div>

      {/* Display Content */}
      <div className="Scrollable-Content">
  {selectedOption.content.details.map((item, index) => (
    <div key={index} className="Content TLFont-DIN-Expanded">
      {/* Only render the image if it exists */}
      {item.image && (
        <img
          className="Menu-Selection-IMG"
          src={item.image}
          alt={item.title || 'Menu Selection'}
        />
      )}
      <h3>{item.title}</h3>
      <p className="Paragraph-Colour">{item.paragraph}</p>

      {/* Render Progress Bar if progress exists */}
      {item.progress && (
        <div className="Progress-Bar">
          {[1, 2, 3].map((bar, barIndex) => (
            <div
              key={barIndex}
              className={`Bar ${
                barIndex < Math.ceil(item.progress / 33.33) ? 'filled' : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Map;

