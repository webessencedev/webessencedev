import { useState, useEffect } from 'react';

function getWindowDimensions() {
  // Getting our innerWidth and innerHeight properties from the built in
  // JS window object
  const { innerWidth: width, innerHeight: height } = window;
  return {
    // returning the dimensions
    width,
    height
  };
}

// Exporting our hook which is an anonymous funciton
export default function useWindowDimensions() {
  // creating window dimension state
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      // setting the dimentions on change
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}