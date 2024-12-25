import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../rootLayout/RootLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import LoginPage from '../pages/login/LoginPage';
import ArchiveFormDinamisPage from '../pages/admin/ArchiveFormDinamisPage';
export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <AdminDashboard />
      },
      {
        path: 'form-dinamis',
        element: <ArchiveFormDinamisPage />
      }
    ]
  }
]);
