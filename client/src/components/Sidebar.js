import React from 'react'

const Sidebar = ({isOpen, onClose}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center fixed inset-y-0 right-0 z-50 bg-[#00000088] text-white backdrop-blur-md w-[100%] px-4 py-6 transform duration-300 ease ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <button className="absolute top-0 m-4" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[50px] h-[50px]"
        >
          <path
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          />
        </svg>
      </button>

      <ul className='flex flex-col gap-10 w-2/5' >
        <li className='text-4xl font-semibold font-rubik p-5'><a href="/" className='transition-all duration-300 absolute origin-top-left hover:rotate-6'>Blogs</a></li>
        <li className='text-4xl font-semibold font-rubik p-5'><a href="/problems" className='transition-all duration-300 absolute origin-top-left hover:rotate-6'>Solve Some Problems</a></li>
        <li className='text-4xl font-semibold font-rubik p-5'><a href="/leaderboard" className='transition-all duration-300 absolute origin-top-left hover:rotate-6'>See World Leaderboard</a></li>
        <li className='text-4xl font-semibold font-rubik p-5'><a href="/" className='transition-all duration-300 absolute origin-top-left hover:rotate-6'>Connect With Us</a></li>
        <li className='text-4xl font-semibold font-rubik p-5'><a href="/" className='transition-all duration-300 absolute origin-top-left hover:rotate-6'>Organise a Contest</a></li>
      </ul>
      
    </div>
  );
}

export default Sidebar;