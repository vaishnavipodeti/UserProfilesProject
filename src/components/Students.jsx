import React from 'react'
import students from '../data/studentsData'
import { useParams, Link } from 'react-router-dom'
const Students = () => {
const { id } = useParams()
const student = students.find(s => s.id === Number(id))
     return (
    <main className='mx-auto max-w-3xl p-4 sm:p-6'>
    <Link to='/' className='font-semibold text-orange-600 hover:text-orange-700'>Back</Link>
    {student?
    (<div className='mt-4 rounded-lg border border-gray-200 bg-white p-6'>
    <h1 className='text-2xl font-bold text-gray-900'>{student.name}</h1>
    <p className='text-gray-700'>{student.course} · {student.college}</p>
    <div className='mt-4 flex flex-wrap gap-x-10 gap-y-3'>
    <div>
       <p className='text-sm text-gray-500'>Age</p>
       <p className='text-gray-900'>{student.age}</p>
   </div>
   <div>
     <p className='text-sm text-gray-500'>Gender</p>
     <p className='text-gray-900'>{student.gender}</p>
    </div>
    <div>
     <p className='text-sm text-gray-500'>Email</p>
      <p className='text-gray-900'>{student.email}</p>
     </div>
      </div>
      <h2 className='mt-6 mb-2 text-lg font-semibold text-gray-900'>About</h2>
     <p className='text-gray-700'>{student.about}</p>
      </div>):(<p>Student Not Found</p>)}
    </main>
  )
}

export default Students