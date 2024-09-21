import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import '@/sass/global.scss';

import App from '@/App';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';


if(process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}


const container = document.getElementById('root');
const root = createRoot(container!);
const app = (
  <BrowserRouter>
      <App />  
  </BrowserRouter>
);
root.render(app);
