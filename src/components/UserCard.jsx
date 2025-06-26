import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  const localUser = JSON.parse(localStorage.getItem('studentUser'));
  const isLocalUser = localUser && user.id === localUser.id;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {user.name}
        </h2>
        {isLocalUser && (
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-bold">
            YOU
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-1">
        <strong>Enrollment No:</strong> {user.id}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-1">
        <strong>Phone:</strong> {user.phone || 'N/A'}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-1">
        <strong>Company:</strong> {user.company?.name || 'N/A'}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        <strong>Website:</strong> {user.website || 'N/A'}
      </p>

      <Link
        to={`/users/${user.id}`}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
      >
        View Profile
      </Link>
    </div>
  );
}
