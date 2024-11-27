import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ---Left section ---- */}
        
        <div>
        <img onClick={()=>navigate('/')} className='mb-5 w-40 cursor-pointer' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla atque reiciendis reprehenderit veniam aut molestiae deleniti est exercitationem modi quas iusto, explicabo minima consequuntur nesciunt commodi assumenda ducimus qui laudantium!</p>
        </div>

        {/* ---Center section ---- */}

        <div>
        <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li onClick={()=>navigate('/')} className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About us</li>
                <li className='cursor-pointer'>Contact us</li>
                <li className='cursor-pointer'>Privacy policy</li>
            </ul>
        
        </div>


        {/* ---Right section ---- */}

        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 9876543210</li>
                <li>saurabh@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* --- copyright text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 © Saurabh Kumar - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
