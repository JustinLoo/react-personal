import React, { useState, useEffect } from 'react';

const Box = ({ 
  children, 
  height, 
  borderRadius, 
  bgColor, 
  textColor, 
  bgImage, 
  className, 
  shouldRotate = true,  
  scaleFactor = 2.75    
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (shouldRotate) {  
      const interval = setInterval(() => {
        setRotation(prevRotation => prevRotation + 1); 
      }, 100); 

      return () => clearInterval(interval); 
    }
  }, [shouldRotate]); 


  const boxStyle = {
    maxHeight: '500px',
    
    height: height || '450px', 
   
    backgroundColor: bgImage ? 'transparent' : bgColor || 'lightgray',  
    backgroundSize: 'cover',
    borderRadius: borderRadius || '30px',  
    color: textColor || 'black', 
    margin: 7,
    display: 'flex',
    overflow: 'hidden',  
    position: 'relative', 
    boxShadow: "10px 10px 30px rgba(255, 255, 255, 0.15)",
    border: '0.01px solid rgba(50, 50, 50, 1)'  
  };

  const rotatingBackgroundStyle = {
    backgroundImage: `url(${bgImage})`,  
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',  
    backgroundPosition: 'center',  
    position: 'absolute',  
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%', 
    height: '100%',
    zIndex: 1,  
    transform: `rotate(${rotation}deg) scale(${scaleFactor})`,  
    transformOrigin: 'center',  
  };

  return (
    <div className={`box-container ${className}`} style={boxStyle}>
      {bgImage && <div style={rotatingBackgroundStyle}></div>}  {/* Background image container */}
      <div style={{ zIndex: 1 }}>{children}</div>  {/* Ensure content stays above the background */}
    </div>
  );
};

export default Box;
