import React from 'react';
import Link from '../link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 4,
          name: "Products",
          path: "/products"
        },
        {
          id: 5,
          name: "Services",
          path: "/services"
        }
      ];
      
    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() =>setOpen(!isOpen)} className='md:hidden'>
                <span>{isOpen === true ? <Bars3Icon className="h-6 w-6 text-blue-500"></Bars3Icon> : <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon>}</span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 bg-purple-400 pl-4 ${isOpen ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;