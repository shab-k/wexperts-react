import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Usage:
// If we are at the bottom of a long page & we go to another page
// it'll scroll the second page to the top, so we won't see the bottom of that page!

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default Scroll;
