const cards = [
    {
        title: "card1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: "",
    },
]

const Cards = () => {
    return (
        <div className="flex flex-col content-center cards">
            {
            cards.map((c) => (
                <div className="p-5 flex">
                    <h1>
                        {c.title} 
                    </h1>
                    <p>
                        {c.desc}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Cards;