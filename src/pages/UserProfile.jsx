import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('studentUser'));

    if (storedUser && parseInt(userId) === parseInt(storedUser.id)) {
      // ✅ Load local user from localStorage
      const localUserData = {
        id: storedUser.id,
        name: storedUser.name,
        email: storedUser.email,
        phone: 'N/A',
        website: 'N/A',
        company: { name: 'MSCIG' },
        address: { street: '-', city: '-', zipcode: '-' },
      };
      setUser(localUserData);
    } else {
      // ✅ Fetch from API
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch(() => setError('User not found'));
    }
  }, [userId]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-700 dark:text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold mr-4">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
              <p className="text-purple-600 dark:text-purple-400">User ID: {user.id}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Website:</span> {user.website}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Company</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Company Name:</span> {user.company?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Address</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user.address?.suite}, {user.address?.street}, {user.address?.city}, {user.address?.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
