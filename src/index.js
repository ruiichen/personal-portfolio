import { render } from '@testing-library/react'
import App from './App'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/index.css' 

import { useMediaQuery } from 'react-responsive'
import ReactDOM from 'react-dom'



ReactDOM.render(<App/>,document.querySelector("#root"))