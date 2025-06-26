export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
            <span>Empowering students through technology</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400">Twitter</a>
            <a href="#" className="hover:text-purple-400">LinkedIn</a>
            <a href="#" className="hover:text-purple-400">GitHub</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2025 Student Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
