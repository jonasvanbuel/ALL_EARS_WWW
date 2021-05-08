// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

console.log('javascript/packs/demo/index.jsx triggered...');


import React from 'react';
import ReactDOM from 'react-dom';

import AccessCodeRouter from './AccessCodeRouter';

ReactDOM.render(
  <React.StrictMode>
    <AccessCodeRouter />
  </React.StrictMode>,
  document.getElementById('demo-app')
);
