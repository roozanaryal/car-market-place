export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Tailwind CSS Test</h1>
        <p className="text-gray-600 text-center mb-6">
          If you see this with a gradient background and white card, Tailwind CSS is working!
        </p>
        <div className="flex justify-center space-x-4">
          <div className="w-16 h-16 bg-red-500 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
          <div className="w-16 h-16 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
