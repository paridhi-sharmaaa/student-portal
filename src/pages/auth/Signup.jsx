import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup({
        id: formData.userId,
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  // Redirect to login when success notification is clicked
  const handleSuccessClick = () => {
    navigate('/auth/login');
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div 
          className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center cursor-pointer"
          onClick={handleSuccessClick}
        >
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Account Created!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Click anywhere to continue to login
          </p>
          <div className="animate-pulse text-sm text-gray-500 dark:text-gray-400">
            Redirecting to login page...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Create Account</h2>
          {error && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Enrollment No.
              </label>
              <input
                type="number"
                name="userId"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                value={formData.userId}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                minLength="8"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-purple-600 dark:text-purple-400 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}