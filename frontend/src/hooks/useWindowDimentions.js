import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let viewPort = '';
  switch (true) {
    case width <= 425:
      viewPort = 'sm';
      break;
    case width <= 768:
      viewPort = 'md';
      break;
    case width > 768:
      viewPort = 'lg';
      break;

    default:
      viewPort = 'sm';
  }

  return {
    width,
    height,
    viewPort,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
