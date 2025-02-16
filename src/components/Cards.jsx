import cardImg from "../assets/cardImg.png"

// TO-DO:turn into compotnent
const cards = [
    {
        title: "card1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
]

const Cards = () => {
    return (
        <div className="pb-10 flex flex-col content-center cards">
            {
                // TO-DO: Fix the small devices quirkiness
            cards.map((c) => (
                <div className="m-auto 2xl:w-[90rem] lg:w-[64rem] md:w-[36rem] sm:w-[20rem]"> 
                    <div className="h-80 my-10 border-solid border-2 flex max-md:flex-col">
                        <div className="w-2/3">
                            <img className="w-full h-full" src={c.img} alt="Card"/>
                        </div>
                        <div className="p-5 w-1/3">
                            <h1 className="pb-5 text-6xl font-bold">
                                {c.title} 
                            </h1>
                            <p className="pb-5">
                                {c.desc}
                            </p>
                            <button className="w-36 h-10 border-solid border-2 rounded-xl hover:bg-black hover:text-white">
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