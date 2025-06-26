export default function SummaryCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-3 mr-4">
          <span className="text-2xl text-purple-600 dark:text-purple-300">{icon}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{title}</h3> 
        {/* ✅ Fixed text color */}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div> 
      {/* ✅ Main value visible */}
      <div className="text-sm text-green-500 mt-1">{trend}</div>
    </div>
  );
}
