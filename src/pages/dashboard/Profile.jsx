import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32"></div>

          <div className="px-6 py-4 relative">
            <div className="absolute -top-16 left-6">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full w-32 h-32 flex items-center justify-center text-5xl border-4 border-white dark:border-gray-800">
                {user?.name?.charAt(0) || 'S'}
              </div>
            </div>

            <div className="ml-40">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user?.name || 'Student'}</h1>
              <p className="text-purple-600 dark:text-purple-400">Student</p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Personal Information</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-medium">Email:</span> {user?.email}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-medium">Member Since:</span> {new Date(user?.joinDate).toLocaleDateString() || '2024'}</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Academic Information</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-medium">Program:</span> Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-medium">Semester:</span> 4th</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
