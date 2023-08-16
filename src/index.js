import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from "./Components/Checkout/Checkout.jsx"
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import LogIn from "./Components/User/Login.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/LogIn",
    element: <LogIn/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
