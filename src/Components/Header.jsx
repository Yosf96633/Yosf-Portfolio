import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'; // Heroicons

const Header = () => {
  return (
    <header className=' w-full flex max-md:justify-between items-center bg-[#AA14F0] text-white px-6 py-4'>
           <h1 className=' overflow-hidden text-4xl max-md:text-2xl self cursor-pointer'>
                yosf.Dev
           </h1>
           <nav className=" mx-auto max-md:hidden translate-x-[-10%] uppercase space-x-4 border border-white p-4 rounded-3xl">
                 <a href="">Intro</a>
                 <a href="">Skills</a>
                 <a href="">Projects</a>
                 <a href="">Contact</a>
           </nav>
         <HiOutlineMenu className=' md:hidden text-3xl'/>
    </header>
  )
}

export default Header