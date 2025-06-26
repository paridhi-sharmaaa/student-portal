import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Banner Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-0 relative">
        <img 
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-[250px] object-cover rounded-lg shadow-md"
        />
      </section>
      {/* Hero Section */}
      <section className="bg-purple-100 dark:bg-purple-900 text-white py-20 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 dark:text-white mb-6">
            Welcome to Student Portal
          </h1>
          <p className="text-xl text-purple-800 dark:text-white mb-8">
            Manage your academic details in one place
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/auth/login" className="bg-purple-600 text-white hover:bg-purple-700 dark:hover:bg-purple-500 font-medium py-2 px-6 rounded-lg transition duration-300">
              Login
            </Link>
            <Link to="/auth/signup" className="bg-white text-purple-600 hover:bg-gray-100 dark:text-purple-500 dark:hover:bg-purple-600 font-medium py-2 px-6 rounded-lg transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
      {/* Banner Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-0 relative">
        <img 
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </section>
    </div>
  );
}
