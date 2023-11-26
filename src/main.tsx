import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.global.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/index.tsx';
import Users from './pages/Users/index.tsx';
import ProtectedRoute from './lib/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Outlet /></ProtectedRoute>,
    children: [
      {
        path: 'users',
        element: <Users />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
