import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import ErrorPage from './Pages/Error/Error';

import './styles/index.css';

/**
 * Router chosen: createBrowserRouter, specifically able to deal with API loader and fetcher
 * tuto: https://reactrouter.com/en/main/start/tutorial#the-root-route
 * Reroute to ErrorPage in need.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:id',
    element: <Dashboard mocked={false} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profileMocked/:id',
    element: <Dashboard mocked={true} />,
    errorElement: <ErrorPage />,
  },
]);

/** Render the app */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
