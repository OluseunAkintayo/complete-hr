import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles.global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login/index.tsx';
import Users from './pages/Users/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import axios from 'axios';
import ProtectedRoute from './lib/ProtectedRoute.tsx';
import Admin from './pages/Dashboard/Admin/index.tsx';

axios.defaults.baseURL = 'https://employee.dreywandowski.ng/api/';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Users />
  // },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    children: [
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    children: [
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
  {
    path: '/admin/dashboard',
    element: <><Admin /></>,
    children: [
      {
        path: 'users',
        element: <Admin />
      }
    ]
  }
]); 

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
