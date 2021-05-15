import React from 'react';

import { useState } from 'react';

import exhibitions from '../data';
import utils from '../utils';

import LogoButton from '../subComponents/LogoButton';

const AccessCodeForm = ({ setExhibition }) => {
  const [ userInput, setUserInput ] = useState('');

  const handleClick = e => {
    e.preventDefault();
    const accessCode = utils.formatAccessCode(userInput);

    // 1. Validate accessCode
    if (exhibitions[accessCode]) {
      // 2. If accessCode is found -> setExhibition
      setExhibition(exhibitions[accessCode])
    } else {
      // 3. TODO: if accessCode is NOT found -> add message...


    }
  }

  return (
    <div id="access-code-form">
      <div className="horizontal-container">
        <div className="form-container">
          <LogoButton />
          <div id="form">
            <h2>Please enter your <span>access code</span> to view our demo</h2>
            <input
              className="user-input"
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
            <div className="submit-button-container">
              <button
                className="submit-button"
                onClick={e => handleClick(e)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="contact-us-container">
          <a href="mailto:team@allears.art" className="contact-us">
            <p>Contact us to request access</p>
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AccessCodeForm;
