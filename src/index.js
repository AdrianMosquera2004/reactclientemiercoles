import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Adrian} from './Adrian.js'
import { Menu } from './Menu';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Menu/>
    <Adrian/>
  </div>
)
 

