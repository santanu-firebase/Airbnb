"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Booking', href: "/pages/booking" },
    { name: 'Departure', href: "/pages/departure" },
    { name: 'Inquary', href: "/pages/inquary" },
    { name: 'Stay', href: "/pages/stay" },

  ]

  return (
    <div className='flex'>
      <div className={`fixed top-0 left-0 h-full bg-indigo-600 text-white w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}>
        <div className='p-4'>
          <h1 className='text-2xl font-bold mb-6 mt-10'>My Sidebar</h1>
          <ul>
            {navigation.map((item) => (
              <li key={item.name} className='mb-4'>
                <button className={`w-full text-left `}
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex-1'>
        <button onClick={() => setIsOpen(!isOpen)}
          className='fixed top-4 left-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none'>
          {isOpen ? "closed" : "Menu"}
        </button>

      </div>

      {/* ${
            router.pathtName === item.href ? "font-semibold underline" : ""
          } */}
    </div>
    

  )
}

export default Sidebar