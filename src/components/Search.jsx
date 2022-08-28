import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'



const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>VACACIONES DE LUJO INCLUIDO PARA DOS PERSONAS</h2>
                <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio aliquam ratione error, a impedit, quidem enim neque adipisci exercitationem accusamus corrupti culpa. Asperiores itaque soluta temporibus possimus quia natus tenetur aperiam, ad non doloremque eligendi iste minima suscipit eaque totam! Dolorem quam vel est adipisci voluptates nobis. Cumque illo quas voluptatum nam, eaque, fuga est hic maxime aspernatur at commodi ipsam placeat nesciunt! Possimus vitae enim laborum harum sequi beatae eos, obcaecati, ducimus, repudiandae amet necessitatibus.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className="flex flex-col lg:flex-row items-center text-center">
                    <button>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className="py-2">LIDER EN SERVICIO</h3>
                        <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center text-center">
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className="py-2">LIDER EN SERVICIO</h3>
                        <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='border text-center'>
                <p className='pt-2'>oBTENGA UN 10% DE DESCUENTO ADICIONALL</p>
                <p className="py-4">QUEDAN 12 HORAS</p>
                <p className='bg-gray-800 text-gray-200 py-2'>RESERVA AHORA Y AHORRA</p>
            </div>

            <form className='w-full'>
                <div className="flex flex-col my-2">
                    <label>Destino</label>
                    <select className='border rounded-md py-2'>
                        <option>Grand Antigua</option>
                        <option>Key west</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className="flex flex-col my-4">
                    <label>Registrarse</label>
                    <input className='border rounded-md p-2' type="date"/>
                </div>
                <div className="flex flex-col my-2">
                    <label>Verificar</label>
                    <input className='border rounded-md p-2' type="date"/>
                </div>
                    <button className="w-full my-4">Tarifas y Disponibilidades</button>
            </form>
        </div>
    </div>
  )
}

export default Search