import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.global.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login/index.tsx';
import Users from './pages/Users/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import axios from 'axios';
import ProtectedRoute from './lib/ProtectedRoute.tsx';
import Admin from './pages/Dashboard/Admin/index.tsx';
import Employees from './pages/Dashboard/Admin/Employees/index.tsx';

axios.defaults.baseURL = 'https://employee.dreywandowski.ng/api/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'auth/login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute><Outlet /></ProtectedRoute>,
        children: [
          {
            path: 'users',
            element: <Users />
          }
        ]
      },
      {
        path: '/admin',
        element: <ProtectedRoute><Outlet /></ProtectedRoute>,
        children: [
          {
            path: 'dashboard',
            element: <Admin />
          },
          {
            path: 'dashboard/staff',
            element: <Employees />
          }
        ]
      },
    ]
  },
]); 

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
