import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="fixed flex justify-between w-full mx-auto p-5 py-3 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-10">
        <div className='text-white'>
          <h1 className=''>Logo</h1>
        </div>

        <div>
          <ul className='flex gap-5 text-white'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Offerings</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        <div className='text-white'>
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
