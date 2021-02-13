// Import Styles
import './index.css';

// Import Components
import App from './App.js';
import Header from './header.js'
import Footer from './footer.js';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.getElementById('top')
);

ReactDOM.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('bottom')
);
