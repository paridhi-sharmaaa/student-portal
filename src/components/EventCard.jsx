export default function EventCard({ event }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
        <span className="text-5xl">📅</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{event.title}</h3>
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-full">
            Upcoming
          </span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <span className="mr-2">📅</span>
          <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <span className="mr-2">📍</span>
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md">
          Register Now
        </button>
      </div>
    </div>
  )
}