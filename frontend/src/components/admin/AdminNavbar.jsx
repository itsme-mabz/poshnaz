import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin" className="text-xl font-bold">
          Admin Dashboard
        </Link>
        <div className="space-x-4">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/admin/users" className="hover:text-gray-300">
            Users
          </Link>
          <Link to="/admin/settings" className="hover:text-gray-300">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 