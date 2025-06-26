import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students through technology and innovation
          </p>
        </div>

        {/* Mission and Icon Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The MSCIG Student Portal is dedicated to providing students with a comprehensive platform to manage their academic journey, connect with peers, and access valuable resources.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2023, we've been committed to enhancing the student experience through innovative technological solutions.
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300">
              Learn More
            </button>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 rounded-xl h-64 flex items-center justify-center shadow-lg">
            <span className="text-5xl">🏫</span>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: '📊', 
                title: 'Academic Tracking', 
                desc: 'Monitor your grades and progress',
                link: '/dashboard' // Functional link to the dashboard page
              },
              { 
                icon: '👥', 
                title: 'Student Network', 
                desc: 'Connect with classmates and faculty', 
                link: '/users' // Functional link to the user network page
              },
              { 
                icon: '📅', 
                title: 'Event Management', 
                desc: 'Stay updated with campus events',
                link: '/events' // Functional link to the events page
              }
            ].map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link} 
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our team is a group of dedicated professionals committed to delivering the best student experience.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'John Doe', role: 'Developer', img: 'https://via.placeholder.com/100' },
              { name: 'Jane Smith', role: 'Designer', img: 'https://via.placeholder.com/100' },
              { name: 'Emily Johnson', role: 'Product Manager', img: 'https://via.placeholder.com/100' }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-purple-100 dark:bg-purple-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <img src={member.img} alt={member.name} className="rounded-full mb-4 w-24 h-24 border-4 border-purple-600 dark:border-purple-400" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
