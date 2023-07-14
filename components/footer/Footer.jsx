"use client"
import { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if the window width is below a specific threshold (e.g., 600px)
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
      };
  
      // Call the handleResize function on initial mount and window resize
      window.addEventListener('resize', handleResize);
      handleResize();
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
          {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </>
    )
}

export default Footer;