import { useState } from 'react';
//import './App.css';
import SurvivorProfile from '../src/components/SurvivorProfile';
// Media Imports
import video1 from './media/videos/boatMain.mp4';
import video2 from './media/videos/boat_on_the_shore.mp4';

function App() {
  const [showVideo2, setShowVideo2] = useState(false);

  const handleClick = () => {
    setShowVideo2(true);
  };

  const handleBack = () => {
    setShowVideo2(false);
  };

  return (
    <div className="App">
      <div className="App-video" onClick={handleClick}>
        <video key={showVideo2 ? 'video2' : 'video1'} autoPlay muted loop>
          <source src={showVideo2 ? video2 : video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!showVideo2 && <h1 className="TLFont">PRESS ANY BUTTON</h1>}
      </div>

      {showVideo2 && <SurvivorProfile handleBack={handleBack} />}

    </div>
  );
}

export default App;


