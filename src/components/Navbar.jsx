import React, { useState } from 'react'

// iconos
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return(
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>PLAYAS</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Inicio</li>
                <li>Destinos</li>
                <li>Viaja</li>
                <li>Vistas</li>
                <li>Reservar</li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch className='mr-2' size={20}/>
                <BsPerson size={20}/>
            </div>
            <div onClick={handleNav} className='md:hidden z-10'>
                {
                    nav ? <AiOutlineClose className="text-black" size={20}/> : <HiOutlineMenuAlt4 size={20}/>
                }
            </div>

            {/* Menu deslizable */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]' } >
                <ul>
                    <h1>PLAYAS</h1>
                    <li className="border-b">Inicio</li>
                    <li className="border-b">Destinos</li>
                    <li className="border-b">Viaja</li>
                    <li className="border-b">Vistas</li>
                    <li className="border-b">Reservar</li>
                    <div className="flex flex-col">
                        <button className="my-6">Buscar</button>
                        <button>Cuenta</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar