import React, {useState} from "react";


import {Bars3Icon,UserPlusIcon,XCircleIcon} from "@heroicons/react/24/outline"

import { Link } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    return (
        <div className="w-screen h-[80 px] z-10 bg-zinc-100 fixed drop-shadow-lg mx-auto py-3">
            <div className="px-10 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <ul className='md:flex text-lg'>  
                        <li className="text-primary font-bold"><Link to="/">Sysprim</Link></li>
                    </ul>
                </div>

                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-primary mr-4 text-base"><Link to="/new">
                        Registrar vehículo
                    </Link></button>

                </div>

                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <Bars3Icon className="w-5 fill-secondary-900" /> : <XCircleIcon className="w-5" />}
                </div>

            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-100 w-full px-8 py-8"}>            
            <li className='border-b-2 border-secondary text-primary w-full'><Link to="/new">Registrar vehículo</Link></li>
            </ul>
            
        </div>

    )
}

export default Navbar

