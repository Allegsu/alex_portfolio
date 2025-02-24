import React, { useState } from 'react';
//Nav Bar Imports
import '../css/SurvivorProfile.css';
import '../css/NavBar.css';
import NavBar from './NavBar';
//Nav Bar Imports 
import Map from './Map';
import Trophy from './Trophy'
import Firefly from './Firefly'

const SurvivorProfile = ({ handleBack }) => {
 
  const [activeSection, setActiveSection] = useState('Firefly');

  const changeSection = (section) => {
    setActiveSection(section);
  }

  return (
    <div className="SurvivorProfile">
      <header className="ProfileHeader">
        <h1 className="TLFont-DIN-Expanded">SURVIVOR PROFILE</h1>
      </header>
      <NavBar changeSection={changeSection} activeSection={activeSection} />
      <div className="Content">
        {activeSection === 'Firefly' && <Firefly />}
        {activeSection === 'Map' && <Map />}
        {activeSection === 'Trophy' && <Trophy />}
      </div>
    </div>
  );
};

export default SurvivorProfile;


