import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../App.css';

const defaultEventsData = [
  {
    id: 1,
    title: 'Math Assignment Due',
    date: '2025-06-28',
    description: 'Submit your Math assignment by the due date.',
  },
  {
    id: 2,
    title: 'Physics Midterm',
    date: '2025-07-01',
    description: 'Prepare for your Physics Midterm exam.',
  },
  {
    id: 3,
    title: 'Group Study',
    date: '2025-06-30',
    description: 'Join your classmates for a group study session.',
  },
  {
    id: 4,
    title: 'Project Presentation',
    date: '2025-07-05',
    description: 'Dont forget to present your project to the professor.',
  },
];

export default function Events() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState(defaultEventsData);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(getLocalDateString(new Date()));

  // Get date string in YYYY-MM-DD format in local timezone
  function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Handle date change from calendar
  const handleDateChange = (date) => {
    setValue(date);
    setSelectedDate(getLocalDateString(date));
  };

  // Filter events for the selected date
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  // Handle event creation
  const handleAddEvent = () => {
    if (!eventTitle || !eventDescription) return;

    const newEvent = {
      id: Date.now(), // Better unique ID
      title: eventTitle,
      description: eventDescription,
      date: selectedDate,
    };

    setEvents([...events, newEvent]);
    setEventTitle('');
    setEventDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add Event Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Add Event</h3>
          <input
            type="text"
            placeholder="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white mb-4"
            required
          />
          <textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white mb-4"
            rows="4"
            required
          />
          <button
            onClick={handleAddEvent}
            className="bg-purple-600 text-white hover:bg-purple-700 font-medium py-2 px-6 rounded-lg transition"
          >
            Add Event
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-purple-100 dark:bg-purple-600 rounded-lg shadow-md p-6 flex flex-col items-center">
          <Calendar
            onChange={handleDateChange}
            value={value}
            className="react-calendar dark:react-calendar rounded-lg shadow-md"
          />
        </div>

        {/* Events List */}
        <div className="bg-purple-100 dark:bg-purple-600 rounded-lg shadow-md p-6 max-h-80 overflow-y-auto flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Events for {value.toLocaleDateString()}
          </h2>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {filteredEvents.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400 text-center">No events on this day.</p>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">{event.description}</p>
                  <span className="text-xs mt-2 text-gray-400 dark:text-gray-300">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-lg text-gray-800 dark:text-white">
          Selected Date: {selectedDate} (Local Timezone)
        </h3>
      </div>
    </div>
  );
}