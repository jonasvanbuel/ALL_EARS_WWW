import React, { useEffect } from 'react';

import Player from './Player/Player';
import Header from './Player/subComponents/Header';
import FooterMobile from './Player/subComponents/FooterMobile';
import utils from '../utils';


const Exhibition = ({ exhibition }) => {

  const renderResponsiveFooter = () => {
    const isMobile = utils.mobileCheck();
    if (isMobile) {
      return <FooterMobile />;
    }
  }

  return (
    <div id={utils.mobileCheck() ? "mobile-app" : "desktop-app"} className="app">
      <Header exhibition={exhibition} />
      <Player exhibition={exhibition} />
      {renderResponsiveFooter()}
    </div>
  )
}

export default Exhibition;
