import defaultLogo from "../assets/defLogo.png"
import hamburgerIcon from "../assets/hamburgerMenu.png"
import {useState} from 'react';

// TO-DO: turn into component
const menuOptions = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/',
        text: 'About us'
    },
    {
        link: '/',
        text: 'Store'
    },
    {
        link: '/',
        text: 'Contact us'
    },
    
]

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <header className="bg-white z-10 px-10 w-full fixed top-0 shadow-sm">
            <nav className="flex m-auto justify-between container py-0 px-36">
                <div className="pr-20">
                    <img src={defaultLogo} alt="Logo" width={265} height={95}/>
                </div>

                <div className="r-0 flex-col content-center max-lg:hidden">
                    <ul className="flex-1 flex flex-row justify-center items-center uppercase mt-0">
                        {menuOptions.map((o) => (
                            <il className='mr-5'>
                                <a href={o.link}>
                                    {o.text}
                                </a>
                            </il>
                        ))}
                    </ul>

                </div>
                
                <button onClick={() => setSidebar(true)} className="navbar-hamburger r-0 content-center hidden max-lg:block">
                    <img src={hamburgerIcon} alt="Hamburger" height={60} width={60}/>
                </button>
                <div className={'fixed top-0 right-0 w-96 m-0 h-screen flex flex-col bg-gray-700 ' + (sidebar? "block" : "hidden")}>
                        
                </div>
            </nav>
        </header>
    )
}

export default Header;
  