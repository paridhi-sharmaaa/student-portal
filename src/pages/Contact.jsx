export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-3">
                    <span className="text-purple-600 dark:text-purple-300">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">Delhi Technological University, Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-3">
                    <span className="text-purple-600 dark:text-purple-300">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">contact@mscigdtuw.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-3">
                    <span className="text-purple-600 dark:text-purple-300">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Office Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Monday-Friday:</span> 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}