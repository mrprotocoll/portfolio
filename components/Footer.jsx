import { isMobile } from 'react-device-detect';
import DesktopFooter from './footer/DesktopFooter';
import MobileFooter from './footer/MobileFooter';

const Footer = () => {
    return (
        <>
            {isMobile ? <DesktopFooter /> : <MobileFooter />}
        </>
    )
}

export default Footer;