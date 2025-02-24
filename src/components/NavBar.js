import React from 'react';
import '../components/NavBar.js';
//Images
import FirefliesIcon from '../media/images/FirefliesWF.png';
import MapIcon from '../media/images/Map_r2.png';
import TrophyIcon from '../media/images/Trophy_r.png';


const NavBar = ({ changeSection }) => {
  return (
    <div className="NavBar">
      <div className="NavItem" onClick={() => changeSection('Firefly')}>
        <img className="Button-Images" src={FirefliesIcon} alt="Firefly Icon" />
      </div>
      <div className="NavItem" onClick={() => changeSection('Map')}>
        <img className="Button-Images" src={MapIcon} alt="Map Icon" />
      </div>
      <div className="NavItem" onClick={() => changeSection('Trophy')}>
        <img className="Button-Images" src={TrophyIcon} alt="Trophy Icon" />
      </div>
    </div>
  );
};

export default NavBar;

