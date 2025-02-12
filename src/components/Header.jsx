import defaultLogo from "../assets/defLogo.png"



const Header = () => {
    return (
        <header className="px-10 fixed top-0 shadow-sm">
            <nav className="flex justify-between container p-0">
                <div className="pr-20">
                    <img src={defaultLogo} alt="Logo" width={265} height={95}/>
                </div>

                <div className="justify-right content-center">
                    <ul className="flex-1 flex flex-row justify-center items-center uppercase mt-0">
                        <il className="mr-5">
                            <a className="">Home</a>
                        </il>
                        <il className="mr-5">
                            <a className="">Home</a>
                        </il>
                        <il className="mr-5">
                            <a className="">Home</a>
                        </il>
                        <il className="mr-5">
                            <a className="">Home</a>
                        </il>
                    </ul>

                    <button className="menu-button flex justify-center items-center p-0 bg-transparent border-0">
                
                    </button>
                </div>
                
                
            </nav>
        </header>
    )
}

export default Header;
  