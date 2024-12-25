import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import Navbar from '../components/admin/Navbar';

function RootLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 bg-teal-50 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
