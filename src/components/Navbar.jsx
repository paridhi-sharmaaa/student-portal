import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DarkModeToggle from './DarkModeToggle'; // Dark Mode Toggle component

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('studentUser');
    localStorage.removeItem('isLoggedIn');
    logout(); // Ensure logout works correctly
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 dark:to-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold">Student Portal</span>
        </Link>

        <div className="space-x-6">
          <NavLink to="/" className="text-white hover:text-purple-300">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-purple-300">About</NavLink>
          <NavLink to="/events" className="text-white hover:text-purple-300">Events</NavLink> {/* Add Events Link */}
          <NavLink to="/contact" className="text-white hover:text-purple-300">Contact</NavLink>

          {/* Show Profile, Dashboard and Logout for logged-in users */}
          {user ? (
            <>
              <NavLink to="/profile" className="text-white hover:text-purple-300">Profile</NavLink>
              <NavLink to="/dashboard" className="text-white hover:text-purple-300">Dashboard</NavLink>
              <button onClick={handleLogout} className="text-white hover:text-purple-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/auth/login" className="text-white hover:text-purple-300">Login</NavLink>
              <NavLink to="/auth/signup" className="text-white hover:text-purple-300">Sign Up</NavLink>
            </>
          )}

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
