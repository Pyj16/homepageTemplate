import titleImage from '../assets/titleImage.png'

// TO-DO: Add scrolling images

const TitleCard = () => {
    return(
        <div className='relative top-0'>
            <h1 className="absolute z-1 pl-56 pt-64 text-6xl drop-shadow-sm font-bold">
                Title
            </h1>
            <img className="w-full h-full top-0 z-0" src={titleImage} alt="Title Image" />
        </div>
    )
}

export default TitleCard;
