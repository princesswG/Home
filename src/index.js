import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tw-elements';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelsinkiFinland from './routes/helsinkifinland';
import Addguests from './routes/addguests';
import OuluFinland from './routes/oulufinland';
import TurkuFinland from './routes/turkufinland';
import VaasaFinland from './routes/vaasafinland';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "/helsinkifinland",
    element: <HelsinkiFinland/>,
  },
  {
    path: "/addguests",
    element: <Addguests/>,
  },
  {
    path: "/oulufinland",
    element: <OuluFinland/>,
  },
  {
    path: "/turkufinland",
    element: <TurkuFinland/>,
  },
  {
    path: "/vaasafinland",
    element: <VaasaFinland/>,
  },
]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
