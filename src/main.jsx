import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './Pages/App/App';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
//import Dashboard, {
//   loaderDesData as dashboardLoader,
// } from './Pages/Dashboard/Dashboard';
import ErrorPage from './Pages/Error/Error';

import './styles/index.css';

//style

// choix de createBrowserRouter pour gérer une API
// tuto: https://reactrouter.com/en/main/start/tutorial#the-root-route

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
    path: '/App',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:id',
    element: <Dashboard mocked={false} />,
    errorElement: <ErrorPage />,
    //loader: dashboardLoader,
  },
  {
    path: '/profileMocked/:id',
    element: <Dashboard mocked={true} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
