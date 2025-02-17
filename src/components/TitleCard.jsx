import titleImage from '../assets/titleImage.png'

// TO-DO: Add scrolling images

const TitleCard = () => {
    return(
        <div className='relative top-0'>
            <h1 className="absolute z-1 md:pl-56 pl-5 pt-24 lg:pt-64 text-7xl drop-shadow-sm font-bold">
                Title
            </h1>
            <img className="w-full h-[48rem] z-0" src={titleImage} alt="Title Image" />
        </div>
    )
}

export default TitleCard;
