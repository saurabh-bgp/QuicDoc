import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, hic quam aliquid totam fugiat error alias aut iusto, eum odit aliquam repellendus eveniet! Assumenda exercitationem maxime ullam hic delectus? Ad?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deserunt ducimus itaque eveniet eligendi perferendis ipsum incidunt libero pariatur, animi modi dolores nobis iure fugit repudiandae vel atque ex accusamus!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, deserunt beatae. Culpa sequi quia libero assumenda unde, labore, quam possimus aliquam adipisci, magni accusamus iure neque expedita quo fugit facilis.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        '>
          <b>Efficiency : </b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quia? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, voluptas.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        '>
          <b>Convenience : </b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, eos impedit tempore voluptates obcaecati aliquid eius amet accusamus. Iure, dolor.</p>
        </div >
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        '>
          <b>Personalization : </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum accusantium sapiente cumque, commodi minus quis aspernatur harum animi voluptas!</p>
        </div>
      </div>
    </div>
  )
}

export default About
