import {cards} from "../data/mockDb.js"

const Cards = () => {
    return (
        <div className="pb-10 flex flex-col content-center cards">
            {cards.map((c, i) => (
                <div key={i} className="m-auto 2xl:w-[90rem] lg:w-[64rem] md:w-[48rem] sm:w-full"> 
                    <div className="flex h-80 max-lg:h-fit my-10 max-sm:my-30 border-solid border-gray-600 border-[1px] max-md:flex-col">
                        <div className="w-2/3 m-0 max-md:w-full max-md:m-auto">
                            <img className="object-none w-full h-full" src={c.img} alt="Card"/>
                        </div>
                        <div className="p-5 w-1/3 m-0 max-md:w-full max-md:m-auto">
                            <h1 className="pb-5 text-6xl font-bold">
                                {c.title} 
                            </h1>
                            <p className="pb-5">
                                {c.desc}
                            </p>
                            <button className="w-36 h-10 border-solid border-2 rounded-xl border-blue-600 hover:bg-blue-800 hover:text-white">
                                View
                            </button>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
}

export default Cards;