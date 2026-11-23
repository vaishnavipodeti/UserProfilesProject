
import students from '../data/studentsData'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
    <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-8">
   <h1 className="text-3xl font-bold text-gray-800">Student Profiles</h1>
   <Link to="/about" className="font-medium text-orange-600 hover:text-orange-700">About</Link>
   </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {students.map((student) => {
            return (
              <Link key={student.id} to={`/students/${student.id}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-500 hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {student.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  {student.course}
                </p>
                <p className="text-gray-600">
                  {student.college}
                </p>
              </Link>
              )
             })}
           </div>
           </div>
          </div>
          )  
         }

            export default Home
