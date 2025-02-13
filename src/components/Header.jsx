import defaultLogo from "../assets/defLogo.png"
import hamburgerIcon from "../assets/hamburgerMenu.png"

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
    return (
        <header className="bg-white px-10 w-full fixed top-0 shadow-sm">
            <nav className="flex w-full justify-between container p-0">
                <div className="pr-20">
                    <img src={defaultLogo} alt="Logo" width={265} height={95}/>
                </div>

                <div className="justify-right flex-col content-center max-lg:hidden">
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
                
                <button className="navbar-hamburger justify-right content-center hidden max-lg:block">
                    <img src={hamburgerIcon} alt="Hamburger" height={60} width={60}/>
                </button>
            </nav>
        </header>
    )
}

export default Header;
  