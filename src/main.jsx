import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './Pages/App/App';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';

import './styles/index.css';

//style

// choix de createBrowserRouter pour gérer une API
// tuto: https://reactrouter.com/en/main/start/tutorial#the-root-route

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/App',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
