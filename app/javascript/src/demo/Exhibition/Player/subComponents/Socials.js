import React from 'react';

import { useState } from 'react';

const Socials = () => {
  const [ bookmarked, setBookMarked ] = useState(false);

  return (
    <div className="socials">
      {bookmarked ?
        <i className="fas fa-bookmark" onClick={() => setBookMarked(false)}></i>
        :
        <i className="far fa-bookmark" onClick={() => setBookMarked(true)}></i>
      }
      <a href="https://www.instagram.com/tate/?hl=en" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <i className="fas fa-share"></i>
    </div>
  )
}

export default Socials;
