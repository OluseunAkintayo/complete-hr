import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/index.tsx';
import Users from './pages/Users/index.tsx';
// import Dashboard from './pages/Dashboard/index.tsx';
import axios from 'axios';
import ProtectedRoute from './lib/ProtectedRoute.tsx';

axios.defaults.baseURL = 'https://employee.dreywandowski.ng/api/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Users /></ProtectedRoute>
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: 'users',
  //       element: <Users />
  //     }
  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
