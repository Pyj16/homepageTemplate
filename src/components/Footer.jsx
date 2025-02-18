import defaultLogo from "../assets/defLogo.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="p-40 w-full max-lg:p-10">
                <div className="p-5 flex content-center max-lg:flex-col">
                    <div className="w-1/3 max-lg:w-full">
                        <img className="mx-auto" src={defaultLogo} alt="Logo" width={265} height={95}/>
                        
                    </div>
                    <div className="w-1/3 max-lg:w-full">
                        <div className="text-center">
                            Place Name
                        </div>
                        <div className="text-center">
                            Address
                        </div>
                    </div>
                    <div className="w-1/3 max-lg:w-full">
                        <div className="text-center">
                            Phone: +123 456 789
                        </div>
                        <div className="text-center">
                            Email@example.com
                        </div>
                    </div>
                </div>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vero praesentium ratione reprehenderit, fuga corrupti. 
                </p>
            </div>
            
        </footer>
    )
}

export default Footer;