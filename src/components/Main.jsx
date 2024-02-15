import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import imgWebp from '../assets/background-main.webp'
import imgJpg from '../assets/background-main.jpg'
import {FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'


const Main = () => {

    const isWebpSupported = (typeof navigator !== 'undefined' && navigator?.webp);

  return (
    <div id="main">
            {isWebpSupported ?(
                <img className='w-full h-screen object-cover' src={imgWebp} alt="background" />
            ) : (
                <img className='w-full h-screen object-cover' src={imgJpg} alt="background" />
            )}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/5'>     
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Esteban Vargas</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
                sequence={[
                    'Developer',
                    1000,
                    'Coder',
                    2000,
                    'Tech Enthusiast',
                    2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                />
            </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaLinkedinIn size={25} className="cursor-pointer"/>
            <FaGithub size={25} className="cursor-pointer"/>
            <FaWhatsapp size={25} className="cursor-pointer"/>
        </div>
        </div>
    </div>
    </div> 
  )
}

export default Main
