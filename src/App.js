import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import About from './Components/Pages/About';
import Editors from './Components/Editor';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <About /> },
    { path: '/about', element: <About /> },
    { path: '/Editors', element: <Editors /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
