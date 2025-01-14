import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
const Header
 = () => {
  return (
    <div className='border-b-2'>
      <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      
      <span className="ml-3 text-4xl">Traditional Jewellery</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
      <Link href="#" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">About</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">Contact</Link>
      <Link href="#" className="mr-5 hover:text-gray-900">Services</Link>
    </nav>
    <Button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
      Sign In
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Button>
  </div>
</header>

    </div>
  )
}

export default Header

