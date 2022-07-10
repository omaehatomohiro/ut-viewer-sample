import React from 'react'
import { createRoot } from 'react-dom/client';
import { App } from './App';

import {GlobalStyle} from './style/GlobalStyle';



const container = document.getElementById('root');

const root =  createRoot(container!);
console.log(root);
root.render(
  <React.StrictMode>
    <GlobalStyle/><App />
  </React.StrictMode>
);