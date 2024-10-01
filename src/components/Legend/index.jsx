import React, { useState, useEffect } from 'react';

const Legend = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  const toggleLegend = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); 
      const container = document.querySelector('.container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        
        if (window.innerWidth > 500) {
          setLeftOffset(containerRect.right + 20);
        } else {
          setLeftOffset(0);
        }
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <>
      <button className="legendButton" onClick={toggleLegend} style={{ cursor: 'pointer' }}>?</button>
      {isVisible && (
        <div className="legendPopup" style={{ left: windowWidth > 500 ? `${leftOffset}px` : '0' }}>
          <h3>What is this tool?</h3>
          <p>This tool is ulalalalalal tralalalala (the legend to be completed)</p>
          <p>This tool is ulalalalalal tralalalala (the legend to be completed)</p>
          <p>This tool is ulalalalalal tralalalala (the legend to be completed)</p>
        </div>
      )}
    </>
  );
};

export default Legend;
