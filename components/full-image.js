import Image from 'next/image';
import { useState } from 'react';

export const FullScreenImage = ({ src, alt , className }) => {
  // State to track if the image is in full screen mode (modal view)
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    // Optional: add a class to the body to prevent background scrolling when modal is active
    if (!isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Styles dynamically change based on the state
  const containerStyles = {
    // Shared styles
    
    position: isFullScreen ? 'fixed' : 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isFullScreen ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
    cursor: 'pointer',


    // Full screen dimensions
    top: isFullScreen ? '0' : 'unset',
    left: isFullScreen ? '0' : 'unset',
    width: isFullScreen ? '100vw' : '100%',
    height: isFullScreen ? '100vh' : '100%',
  
    zIndex: isFullScreen ? 9999 : 'auto',
    transition: 'all 0.3s ease-in-out',
  };

  const imageStyles = {
    objectFit: 'contain', 
    borderRadius: isFullScreen ? '0' : '100px', 
    border: "1px "
 
  };
  
  // Optional: A dedicated close button (better UX than just clicking the image)
  const closeButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
    zIndex: 10000,
    display: isFullScreen ? 'block' : 'none',
  };


  return (
    <div style={containerStyles} onClick={isFullScreen ? toggleFullScreen : undefined}>
     
      {isFullScreen && (
          <span style={closeButtonStyle} onClick={(e) => {
              e.stopPropagation(); 
              toggleFullScreen();
          }}>
              &times; 
          </span>
      )}

      <Image
        src={src}
        alt={alt}
        fill={true} 
        style={imageStyles} 
        onClick={!isFullScreen ? toggleFullScreen : undefined} 
        priority
      />
    </div>
  );
};

