import React, { useRef, useEffect, useState } from 'react';
import './tooltip.styles.scss';

const Tooltip = ({ text, children }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState('top');

  useEffect(() => {
    const handlePosition = () => {
      if (!tooltipRef.current) return;

      const rect = tooltipRef.current.getBoundingClientRect();

      // Prüfen, ob das Tooltip über den oberen Rand hinausgeht
      if (rect.top < 100) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    };

    // Initiale Position prüfen
    handlePosition();

    // Event Listener zum erneuten Prüfen der Position bei Scrollen und Größenänderungen
    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);

    // Cleanup bei Unmount
    return () => {
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, []);

  return (
    <div className={`tooltip-container ${position}`} ref={tooltipRef}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
