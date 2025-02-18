import React from 'react';
import {useState} from 'react';

import defaultLogo from "../assets/defLogo.png"
import hamburgerIcon from "../assets/hamburgerMenu.png"
import closeMenu from "../assets/closeMenu.png"

import {menuOptions} from '../data/mockDb.js'

const Header = () => {
    
    const [sidebar, setSidebar] = useState(false); // Enables or disables sidebar

    return (
        <header className="bg-white z-10 w-full fixed top-0 shadow-md">
            <nav className="flex m-auto justify-between container py-0 px-36 max-lg:px-2">
                <div className="">
                    <img src={defaultLogo} alt="Logo" width={265} height={95}/>
                </div>

                <div className="r-0 flex-col content-center max-lg:hidden">
                    <ul className="flex-1 flex flex-row justify-center items-center uppercase mt-0">
                        {menuOptions.map((o, i) => (
                            <li key={i} className='mr-5'>
                                <a href={o.link}>
                                    {o.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div> 
                
                <button onClick={() => setSidebar(true)} className="navbar-hamburger r-0 content-center hidden max-lg:block">
                    <img src={hamburgerIcon} alt="Hamburger" height={60} width={60}/>
                </button>
                <div className={'w-full fixed top-0' + (sidebar ? "" : " hidden")}>
                        <div className='w-full h-screen left-0 fixed bg-black opacity-25'>

                        </div>
                        <div className='w-96 m-0 fixed right-0 opacity-100 h-screen flex flex-col bg-white '>
                            <button onClick={() => setSidebar(false)} className='fixed right-5 top-5 flex'>
                                <img src={closeMenu} alt="close" height={30} width={30}/>
                            </button>
                            
                            <ul className="flex flex-col items-start uppercase ml-8 mt-20">
                                {menuOptions.map((o, i) => (
                                    <li key={i} className='mr-5 pb-5'>
                                        <a href={o.link}>
                                            {o.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
  