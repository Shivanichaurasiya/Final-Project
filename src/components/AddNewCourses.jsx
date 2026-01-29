import React from 'react'

const AddNewCourses = () => {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4'>
        <div className='max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center '>
            {/* left */}
            <div>
                <div>
                    <div className='text-white'>
                        <h1 className='text-3xl font-bold mb-2'>Add Your <span className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-teal-300 to-green-300 bg-clip-text text-transparent">Course for Students</span></h1>
                        <p className='text-gray-400 mb-8'>Share your knowledge with thousands of students by creating your own course </p>
                    </div>
                    <form>
                        <label className='text-white'>Course Name</label>
                        <input type="text" className='text-white' placeholder='Enter your course name'/>
                    </form>
                </div>
            </div>
            {/* right */}
            <div></div>
        </div>
      
    </div>
  )
}

export default AddNewCourses
