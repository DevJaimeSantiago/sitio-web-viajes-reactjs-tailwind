import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>PLAYAS</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaPinterest className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>Acerca de </li>
                    <li>Patherships</li>
                    <li>Carreras</li>
                    <li>Newsroom</li>
                    <li>Publicidad</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li>Inicio</li>
                    <li>Destinos</li>
                    <li>Viaja</li>
                    <li>Vistas</li>
                    <li>Agendar</li>
                </ul>
                
            </div>
            <div className='text-center'>
                <p>DevJaimeSS</p>
            </div>
        </div>
    </div>
  )
}

export default Footer