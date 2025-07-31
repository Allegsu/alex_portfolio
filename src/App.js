import { useState, useEffect } from 'react';
import SurvivorProfile from '../src/components/SurvivorProfile';

// Title Screen (responsive versions)
import videoMobile from './media/videos/boat-mobile.mp4';
import videoDesktop from './media/videos/boat-desktop.mp4';

// Main Screen 
import video2 from './media/videos/shore-desktop.mp4'; 

function App() {
  const [showVideo2, setShowVideo2] = useState(false);
  const [initialVideoSrc, setInitialVideoSrc] = useState(videoDesktop); 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const updateSource = () => {
      setInitialVideoSrc(mediaQuery.matches ? videoMobile : videoDesktop);
    };

    updateSource();   
    mediaQuery.addEventListener('change', updateSource);

    return () => {
      mediaQuery.removeEventListener('change', updateSource);
    };
  }, []);

  const handleClick = () => {
    setShowVideo2(true);
  };

  const handleBack = () => {
    setShowVideo2(false);
  };

  return (
    <div className="App">
      <div className="App-video" onClick={handleClick}>
        <video key={showVideo2 ? 'video2' : initialVideoSrc} autoPlay muted loop playsInline>
          <source src={showVideo2 ? video2 : initialVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!showVideo2 && <h1 className="TLFont">PRESS ANY BUTTON</h1>}
      </div>

      {showVideo2 && <SurvivorProfile handleBack={handleBack} />}
    </div>
  );
}

export default App;



