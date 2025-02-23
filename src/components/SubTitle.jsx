const SubTitle = () => {
    return(
        <div className='md:p-20 p-0 relative top-0 flex flex-col'>
            <div className="m-auto flex">
                <h1 className="font-bold text-4xl">
                    SubTitle
                </h1>
            </div>
            <div className="w-1/2 m-auto flex-col">
                <p className="pt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius cupiditate sequi sit rerum minus 
                    <a className="underline text-blue-700 hover:text-blue-950" href="/">nulla nihil aspernatur expedita</a>
                    , 
                    <a className="underline text-blue-700 hover:text-blue-950" href="/">nam ducimus cumque vero</a>
                    , 
                    <a className="underline text-blue-700 hover:text-blue-950" href="/">atque qui beatae mollitia</a>
                    ! Laborum, ipsa sint!
                </p>
                <p className="pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius cupiditate sequi sit rerum minus nulla nihil aspernatur expedita, nam ducimus cumque vero, atque qui beatae mollitia! Laborum, ipsa sint!
                </p>
            </div>
        </div>
    )
}

export default SubTitle;
