import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [localUser, setLocalUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const apiUsers = response.data;

        const storedUser = JSON.parse(localStorage.getItem('studentUser'));

        // If signed-up user exists, create a user object for them
        if (storedUser) {
          const signedUpUser = {
            id: 999,  // Use a high unique ID to avoid conflict with API users
            name: storedUser.name,
            email: storedUser.email,
            phone: 'N/A',
            website: 'N/A',
            company: { name: 'MSCIG' },
            address: { street: '-', city: '-', zipcode: '-' },
          };
          setUsers([signedUpUser, ...apiUsers]);  // Add signed-up user at the top
          setLocalUser(signedUpUser);
        } else {
          setUsers(apiUsers);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Users</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Connect with fellow students and community members
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
