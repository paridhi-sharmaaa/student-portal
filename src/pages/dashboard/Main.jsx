import { useAuth } from '../../context/AuthContext';
import SummaryCard from '../../components/SummaryCard';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { title: 'GPA', value: '3.85', icon: '📊', trend: '↑ 0.1' },
    { title: 'Attendance', value: '92%', icon: '✅', trend: '↑ 2%' },
    { title: 'Courses', value: '5/6', icon: '📚', trend: '1 left' },
    { title: 'Deadlines', value: '3', icon: '⏰', trend: 'Next in 2d' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Welcome back, {user?.name || 'Student'}
        </h1>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <SummaryCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Activity & Deadlines Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-3">
                  <span className="text-purple-600 dark:text-purple-300">📝</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Submitted Math Assignment</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-3">
                  <span className="text-purple-600 dark:text-purple-300">💻</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Joined Coding Club</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Upcoming Deadlines</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 mr-3">
                  <span className="text-red-600 dark:text-red-300">⚠️</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Physics Midterm</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due in 2 days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 mr-3">
                  <span className="text-red-600 dark:text-red-300">🗓️</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Software Project Report</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due in 5 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
