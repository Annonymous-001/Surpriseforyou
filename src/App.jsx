import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  <SpeedInsights/>
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '58%', left: '70%' });
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const handleYesClick = () => {
    setShowCongratulations(true);
  };

  const closeCongratulations = () => {
    setShowCongratulations(false);
  };

  return (
    <>
      <div className="relative h-screen">
        <img 
          className="w-full h-full object-cover" 
          src="https://imgs.search.brave.com/oDoJ8jlY5iiW_XTRFz7mfqGP-3XDRpXL2KvINeX3lEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MzU2MTUzOC9waG90/by9kZWZvY3VzZWQt/YmFja2dyb3VuZC13/aXRoLWhlYXJ0LXNo/YXBlZC53ZWJwP2I9/MSZzPTE3MDY2N2Em/dz0wJms9MjAmYz1G/Y3FYc1h6SmtieGtB/eFBTVjBiZnNWdHFU/ZmtSVm1EQUtzWk0z/TjFXbXZzPQ" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-auto max-w-xs p-6 bg-white bg-opacity-80 rounded-lg shadow-lg text-center relative">
            <p className="mb-4">Hey lili, would you like to go on a date with me?</p>
            <div className="flex justify-center space-x-4">
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button 
                className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 absolute ${isMobile ? 'transition-transform transform duration-200' : ''}`} 
                style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
                onMouseEnter={isMobile ? undefined : handleMouseEnter}
                onClick={isMobile ? handleMouseEnter : undefined}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col items-center text-white">
          <div className="mb-2 text-sm">Developed by Nitin with 💌</div>
          <div className="flex space-x-2">
            <a href="https://twitter.com/_Nitin_Swami_" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/twitter.png" alt="Twitter" className="w-9 h-9"/>
            </a>
            <a href="https://www.instagram.com/nitinswami12577/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="/instagram.png" alt="Instagram" className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </div>

      {showCongratulations && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations! 🫣</h2>
            <p className="mb-4">You've accepted the date invitation 😘😍</p>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={closeCongratulations}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
