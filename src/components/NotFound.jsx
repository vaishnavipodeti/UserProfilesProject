import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="text-center bg-white p-10 rounded-2xl shadow-md max-w-md w-full">
    <h1 className="text-7xl font-bold text-orange-500">404</h1>
    <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
    <p className="mt-3 text-gray-600">Sorry, the page you are looking for doesn't exist.</p>
    <Link to="/" className="inline-block mt-6 rounded-lg bg-orange-500 px-5 py-3 text-white font-medium hover:bg-orange-600 transition">
          Back to Home
    </Link>
    </div>
    </main>
  )
}

export default NotFound